import { test, expect } from '@playwright/test';

// Testy weryfikujące poprawki z Poprawki/tasks.md — każdy test odpowiada
// jednemu punktowi z listy komentarzy klienta na screenach BT1-BT10.

test.describe('Logo wraca do strony głównej', () => {
  test('logo na podstronie /oferta/[slug] linkuje do "/"', async ({ page }) => {
    await page.goto('/oferta/passiv-line-ultra/');
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();
    await logo.click();
    await page.waitForURL((url) => url.pathname === '/');
    expect(new URL(page.url()).pathname).toBe('/');
  });
});

test.describe('Partnerzy', () => {
  test('Barański nie występuje wśród partnerów', async ({ page }) => {
    await page.goto('/');
    await page.locator('text=Nasi partnerzy').scrollIntoViewIfNeeded();
    await expect(page.getByText('Barański', { exact: true })).toHaveCount(0);
  });

  test('każdy partner linkuje na zewnątrz do strony producenta', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('section', { has: page.locator('text=Nasi partnerzy') });
    await section.scrollIntoViewIfNeeded();
    const expected: Record<string, string> = {
      VEKA: 'veka.pl',
      AdamS: 'adams.com.pl',
      Martom: 'drzwimartom.pl',
      Aluprof: 'aluprof.eu',
    };
    for (const [name, domain] of Object.entries(expected)) {
      const link = section.getByRole('link', { name: new RegExp(name) });
      await expect(link).toHaveAttribute('href', new RegExp(domain));
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });
});

test.describe('Aktualności', () => {
  test('kliknięcie karty otwiera modal z pełną treścią wpisu', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('article').filter({ hasText: 'Nowe drzwi stalowe' }).first();
    await card.scrollIntoViewIfNeeded();
    await card.click();
    const modal = page.getByRole('heading', { name: 'Nowe drzwi stalowe w naszej ofercie!' }).nth(1);
    await expect(modal).toBeVisible();
    // Treść w modalu powinna być dłuższa niż skrócona wersja na karcie (line-clamp-4).
    const fullText = await page.locator('.whitespace-pre-line').innerText();
    expect(fullText.length).toBeGreaterThan(200);
  });
});

test.describe('Drzwi Zewnętrzne Martom', () => {
  test('karta Martom linkuje zewnętrznie do drzwimartom.pl', async ({ page }) => {
    await page.goto('/');
    await page.locator('#drzwi').scrollIntoViewIfNeeded();
    const link = page.locator('#drzwi a[href*="drzwimartom.pl"]').first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('target', '_blank');
  });

  test('pozycja menu "Drzwi Zewnętrzne" linkuje zewnętrznie do drzwimartom.pl', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('banner').getByRole('button', { name: 'Oferta' }).hover();
    const link = page.getByRole('banner').getByRole('link', { name: 'Drzwi Zewnętrzne' });
    await expect(link).toHaveAttribute('href', 'https://drzwimartom.pl');
    await expect(link).toHaveAttribute('target', '_blank');
  });
});

test.describe('Szczegóły drzwi tarasowych', () => {
  const sluggi = ['hst-corner-view', 'hst-passiv', 'hst-basic', 'hst-sl-82', 'smart-slide'];

  for (const slug of sluggi) {
    test(`podstrona /oferta/${slug} istnieje i ma kolory`, async ({ page }) => {
      const res = await page.goto(`/oferta/${slug}/`);
      expect(res?.status()).toBeLessThan(400);
      await expect(page.getByText('Dostępne kolory')).toBeVisible();
    });
  }

  test('karty drzwi tarasowych na stronie głównej mają przycisk "Zobacz szczegóły"', async ({ page }) => {
    await page.goto('/');
    await page.locator('#drzwi-tarasowe').scrollIntoViewIfNeeded();
    const buttons = page.locator('#drzwi-tarasowe a:has-text("Zobacz szczegóły")');
    await expect(buttons).toHaveCount(5);
  });
});

test.describe('Zdjęcia biura', () => {
  test('sekcja "O nas" zawiera zdjęcie salonu', async ({ page }) => {
    await page.goto('/');
    await page.locator('#dlaczego-my').scrollIntoViewIfNeeded();
    const img = page.locator('#dlaczego-my img[alt*="Salon firmowy BT-Styl"]');
    await expect(img).toBeVisible();
  });
});

test.describe('Build sanity', () => {
  test('strona główna ładuje się bez błędów konsoli', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });
});

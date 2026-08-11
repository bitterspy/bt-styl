import { test, expect } from '@playwright/test';

// Testy weryfikujące poprawki z Poprawki/tasks.md oraz przebudowę multi-page
// (osobne podstrony zamiast one-pagera, wzorem dobreoknaszczecin.pl).

test.describe('Logo wraca do strony głównej', () => {
  test('logo na podstronie /oferta/[slug] linkuje do "/"', async ({ page }) => {
    await page.goto('/oferta/passiv-line-ultra/');
    const logo = page.locator('header a[href="/"]').first();
    await expect(logo).toBeVisible();
    await logo.click();
    await page.waitForURL((url) => url.pathname === '/');
    expect(new URL(page.url()).pathname).toBe('/');
  });

  test('logo na podstronie /o-nas linkuje do "/"', async ({ page }) => {
    await page.goto('/o-nas/');
    const logo = page.locator('header a[href="/"]').first();
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

test.describe('Blog Aktualności', () => {
  test('lista /aktualnosci pokazuje wszystkie 10 wpisów', async ({ page }) => {
    await page.goto('/aktualnosci/');
    const cards = page.locator('a[href^="/aktualnosci/"]').filter({ hasText: /Czytaj więcej/ });
    await expect(cards).toHaveCount(10);
  });

  test('kliknięcie karty na stronie głównej otwiera pełną podstronę wpisu', async ({ page }) => {
    await page.goto('/');
    const card = page.locator('a[href^="/aktualnosci/"]').filter({ hasText: 'Nowe drzwi stalowe' }).first();
    await card.scrollIntoViewIfNeeded();
    await card.click();
    await page.waitForURL('**/aktualnosci/nowe-drzwi-stalowe-w-naszej-ofercie/');
    await expect(page.getByRole('heading', { name: 'Nowe drzwi stalowe w naszej ofercie!' })).toBeVisible();
    const bodyText = await page.locator('main').innerText();
    expect(bodyText.length).toBeGreaterThan(300);
  });

  test('wszystkie 10 podstron wpisów istnieją pod SEO-friendly URL', async ({ page }) => {
    const sluggi = [
      'nowe-drzwi-stalowe-w-naszej-ofercie',
      'najlepsze-okna-czyli-jakie-przedstawiamy-najlepsze-okna-w-ofercie-adams-w-roznych-kryteriach',
      'firma-adams-pionierem-rozwiazan-ekologicznych',
      'adams-podwyzszenie-wartosci-domu-dzieki-niezawodnym-oknom',
      'adams-okno-do-domu-pasywnego-czyli-jakie',
      'adams-letnie-okno',
      'adams-jaki-rodzaj-systemu-przesuwnego-wybrac',
      'jesienna-konserwacja-okna',
      'jakie-okna-wybrac-do-halasliwej-okolicy',
      'adams-zatrzymaj-halas-dzieki-oknom',
    ];
    for (const slug of sluggi) {
      const res = await page.goto(`/aktualnosci/${slug}/`);
      expect(res?.status(), slug).toBeLessThan(400);
    }
  });
});

test.describe('Drzwi Zewnętrzne Martom', () => {
  test('menu "Drzwi Zewnętrzne" prowadzi na naszą podstronę z wzorami (nie bezpośrednio do producenta)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('banner').getByRole('link', { name: 'Oferta' }).hover();
    const link = page.getByRole('banner').getByRole('link', { name: 'Drzwi Zewnętrzne' });
    await expect(link).toHaveAttribute('href', '/oferta/drzwi-zewnetrzne/');
    await link.click();
    await page.waitForURL('**/oferta/drzwi-zewnetrzne/');
  });

  test('karta Martom na stronie głównej prowadzi na naszą podstronę z wzorami', async ({ page }) => {
    await page.goto('/');
    await page.locator('#drzwi').scrollIntoViewIfNeeded();
    const link = page.locator('#drzwi a[href="/oferta/drzwi-zewnetrzne/"]').first();
    await expect(link).toBeVisible();
  });

  test('na podstronie /oferta/drzwi-zewnetrzne każdy wzór linkuje zewnętrznie do drzwimartom.pl', async ({ page }) => {
    await page.goto('/oferta/drzwi-zewnetrzne/');
    const wzor = page.locator('a[href*="drzwimartom.pl"]').first();
    await expect(wzor).toBeVisible();
    await expect(wzor).toHaveAttribute('target', '_blank');
  });

  test('podstrona pokazuje wszystkie 9 kolekcji', async ({ page }) => {
    await page.goto('/oferta/drzwi-zewnetrzne/');
    for (const kolekcja of ['Creative', 'Classic', 'Future', 'Diamond', 'Simple elegance', 'Smooth', 'No glass', 'Modern', 'Traditional']) {
      await expect(page.getByRole('heading', { name: kolekcja, exact: true })).toBeVisible();
    }
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
  test('podstrona /o-nas zawiera zdjęcie salonu', async ({ page }) => {
    await page.goto('/o-nas/');
    const img = page.locator('img[alt*="Salon firmowy BT-Styl"]');
    await expect(img).toBeVisible();
  });
});

test.describe('Nowe podstrony multi-page', () => {
  const strony = ['/o-nas/', '/aktualnosci/', '/realizacje/', '/porady/', '/kontakt/', '/oferta/drzwi-zewnetrzne/'];

  for (const url of strony) {
    test(`podstrona ${url} odpowiada statusem < 400`, async ({ page }) => {
      const res = await page.goto(url);
      expect(res?.status(), url).toBeLessThan(400);
    });
  }

  test('nawigacja główna prowadzi do właściwych podstron', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('banner');
    await expect(nav.getByRole('link', { name: 'O Nas' })).toHaveAttribute('href', '/o-nas/');
    await expect(nav.getByRole('link', { name: 'Aktualności' })).toHaveAttribute('href', '/aktualnosci/');
    await expect(nav.getByRole('link', { name: 'Realizacje' })).toHaveAttribute('href', '/realizacje/');
    await expect(nav.getByRole('link', { name: 'Porady' })).toHaveAttribute('href', '/porady/');
    await expect(nav.getByRole('link', { name: 'Kontakt' })).toHaveAttribute('href', '/kontakt/');
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

<?php
require __DIR__ . '/auth.php';
requireLogin();

$pdo = getPdo();
$editItem = null;
$error = '';

// Usuwanie
if (isset($_GET['delete'])) {
    $stmt = $pdo->prepare('DELETE FROM aktualnosci WHERE id = ?');
    $stmt->execute([(int) $_GET['delete']]);
    header('Location: index.php');
    exit;
}

// Zapis (dodanie lub edycja)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tytul = trim($_POST['tytul'] ?? '');
    $tresc = trim($_POST['tresc'] ?? '');
    $data_publikacji = $_POST['data_publikacji'] ?? '';
    $id = $_POST['id'] ?? '';

    if ($tytul === '' || $tresc === '' || $data_publikacji === '') {
        $error = 'Wszystkie pola są wymagane.';
    } else {
        if ($id !== '') {
            $stmt = $pdo->prepare('UPDATE aktualnosci SET tytul=?, tresc=?, data_publikacji=? WHERE id=?');
            $stmt->execute([$tytul, $tresc, $data_publikacji, (int) $id]);
        } else {
            $stmt = $pdo->prepare('INSERT INTO aktualnosci (tytul, tresc, data_publikacji) VALUES (?, ?, ?)');
            $stmt->execute([$tytul, $tresc, $data_publikacji]);
        }
        header('Location: index.php');
        exit;
    }
}

// Wczytanie rekordu do edycji
if (isset($_GET['edit'])) {
    $stmt = $pdo->prepare('SELECT * FROM aktualnosci WHERE id = ?');
    $stmt->execute([(int) $_GET['edit']]);
    $editItem = $stmt->fetch();
}

$items = $pdo->query('SELECT * FROM aktualnosci ORDER BY data_publikacji DESC, id DESC')->fetchAll();
?>
<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>Aktualności — Panel Admina BT-Styl</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: system-ui, sans-serif; background: #f8f9fa; margin: 0; color: #333; }
  header { background: #1a3a5c; color: white; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
  header h1 { font-size: 1.1rem; margin: 0; }
  header a { color: #f5c55a; text-decoration: none; font-size: 0.875rem; }
  .wrap { max-width: 900px; margin: 2rem auto; padding: 0 1.5rem; }
  .card { background: white; border-radius: 16px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 1.5rem; }
  .card h2 { margin-top: 0; font-size: 1rem; color: #1a3a5c; }
  input, textarea { width: 100%; box-sizing: border-box; padding: 0.6rem 0.9rem; border: 1px solid #ddd; border-radius: 8px; font-size: 0.95rem; margin-bottom: 0.9rem; font-family: inherit; }
  textarea { min-height: 120px; resize: vertical; }
  label { font-size: 0.8rem; font-weight: 600; color: #555; display: block; margin-bottom: 0.3rem; }
  button, .btn { padding: 0.6rem 1.2rem; background: #1a3a5c; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem; text-decoration: none; display: inline-block; }
  .btn-secondary { background: #eee; color: #333; margin-left: 0.5rem; }
  .error { color: #c0392b; font-size: 0.875rem; margin-bottom: 1rem; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; padding: 0.7rem 0.5rem; border-bottom: 1px solid #eee; font-size: 0.9rem; vertical-align: top; }
  th { color: #888; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; }
  .actions a { margin-right: 0.8rem; font-size: 0.85rem; text-decoration: none; }
  .actions .del { color: #c0392b; }
  .actions .edit { color: #1a3a5c; }
  .tresc-preview { color: #666; max-width: 400px; }
</style>
</head>
<body>
<header>
  <h1>Panel Aktualności — BT-Styl</h1>
  <a href="logout.php">Wyloguj</a>
</header>
<div class="wrap">
  <div class="card">
    <h2><?= $editItem ? 'Edytuj wpis' : 'Dodaj nowy wpis' ?></h2>
    <?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?>
    <form method="post">
      <?php if ($editItem): ?><input type="hidden" name="id" value="<?= (int) $editItem['id'] ?>"><?php endif; ?>
      <label>Tytuł</label>
      <input type="text" name="tytul" required value="<?= htmlspecialchars($editItem['tytul'] ?? '') ?>">
      <label>Treść</label>
      <textarea name="tresc" required><?= htmlspecialchars($editItem['tresc'] ?? '') ?></textarea>
      <label>Data publikacji</label>
      <input type="date" name="data_publikacji" required value="<?= htmlspecialchars($editItem['data_publikacji'] ?? date('Y-m-d')) ?>">
      <button type="submit"><?= $editItem ? 'Zapisz zmiany' : 'Dodaj wpis' ?></button>
      <?php if ($editItem): ?><a href="index.php" class="btn btn-secondary">Anuluj</a><?php endif; ?>
    </form>
  </div>

  <div class="card">
    <h2>Wszystkie wpisy (<?= count($items) ?>)</h2>
    <table>
      <thead>
        <tr><th>Data</th><th>Tytuł / treść</th><th>Akcje</th></tr>
      </thead>
      <tbody>
        <?php foreach ($items as $item): ?>
        <tr>
          <td><?= htmlspecialchars($item['data_publikacji']) ?></td>
          <td>
            <strong><?= htmlspecialchars($item['tytul']) ?></strong>
            <div class="tresc-preview"><?= htmlspecialchars(mb_substr($item['tresc'], 0, 120)) ?>…</div>
          </td>
          <td class="actions">
            <a class="edit" href="?edit=<?= (int) $item['id'] ?>">Edytuj</a>
            <a class="del" href="?delete=<?= (int) $item['id'] ?>" onclick="return confirm('Usunąć ten wpis?')">Usuń</a>
          </td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>
</body>
</html>

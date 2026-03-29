<?php
// Contact form handler for aufmschaeferhof.de
// Sends form data as email using PHP mail()

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot check (spam protection)
if (!empty($_POST['website'])) {
    // Bot filled hidden field
    echo json_encode(['success' => true]);
    exit;
}

// Get and sanitize form data
$name    = trim(strip_tags($_POST['name'] ?? ''));
$email   = trim(strip_tags($_POST['email'] ?? ''));
$phone   = trim(strip_tags($_POST['phone'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

// Prevent email header injection
if (preg_match('/[\r\n]/', $name) || preg_match('/[\r\n]/', $email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige Eingabe']);
    exit;
}

// Build email
$to = 'info@aufmschaeferhof.de';
$subject = "Kontaktanfrage von {$name} über aufmschaeferhof.de";

$body  = "Neue Kontaktanfrage über die Website:\n\n";
$body .= "Name: {$name}\n";
$body .= "E-Mail: {$email}\n";
if (!empty($phone)) {
    $body .= "Telefon: {$phone}\n";
}
$body .= "\nNachricht:\n{$message}\n";

$headers  = "From: noreply@aufmschaeferhof.de\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: AufmSchaeferhof-Kontaktformular\r\n";

// Send
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail konnte nicht gesendet werden']);
}

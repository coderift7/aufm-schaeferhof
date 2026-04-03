<?php
// Contact form handler for aufmschaeferhof.de
// Sends form data via SMTP using PHPMailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/Exception.php';
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot check (spam protection)
if (!empty($_POST['website'])) {
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

// Build email body
$body  = "Neue Kontaktanfrage über die Website:\n\n";
$body .= "Name: {$name}\n";
$body .= "E-Mail: {$email}\n";
if (!empty($phone)) {
    $body .= "Telefon: {$phone}\n";
}
$body .= "\nNachricht:\n{$message}\n";

// Send via SMTP
$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host       = 'mail.biohost.de';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'noreply@aufmschaeferhof.de';
    $mail->Password   = '%%SMTP_PASSWORD%%';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Sender & recipient
    $mail->setFrom('noreply@aufmschaeferhof.de', 'Auf\'m Schäferhof Kontaktformular');
    $mail->addAddress('info@aufmschaeferhof.de');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = "Kontaktanfrage von {$name} über aufmschaeferhof.de";
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Mail konnte nicht gesendet werden']);
}

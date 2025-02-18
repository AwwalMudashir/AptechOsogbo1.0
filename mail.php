<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';

// Validate Request
if ($_SERVER['REQUEST_METHOD'] != "POST") {
    http_response_code(400);
    echo "Invalid request method.";
    exit;
}

// Retrieve Form Data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$program = filter_input(INPUT_POST, 'program', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

if (!$email) {
    echo "Invalid email address.";
    exit;
}

// Prepare the Email Message
$msg = "<b>Full Name:</b> $name<br/>";
$msg .= "<b>Email:</b> $email<br/>";
$msg .= "<b>Phone Number:</b> $phone<br/>";
$msg .= "<b>Program:</b> $program<br/>";
$msg .= "<b>Message:</b> $message<br/>";

$mail = new PHPMailer(true);

try {
    // Configure PHPMailer
    $mail->isSMTP();
    $mail->Host       = 'aptechosogbo.com.ng';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@aptechosogbo.com.ng';
    $mail->Password   = 'Oaptech12345'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('contact@gapslight.com.ng', 'gapslight');
    $mail->addAddress('awwalmudashir@gmail.com');

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'New Enrollment Submission';
    $mail->Body    = $msg;

    $mail->send();
    echo "Email sent successfully!";
} catch (Exception $e) {
    echo "Error sending email: " . $mail->ErrorInfo;
}
?>

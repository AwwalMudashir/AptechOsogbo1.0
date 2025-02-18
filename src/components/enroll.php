<?php
header("Content-Type: application/json");

// Get JSON data from the request body
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid input"]);
    exit;
}

// Extract form fields
$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone']);
$program = htmlspecialchars($data['program']);
$message = htmlspecialchars($data['message']);

// Email settings
$to = "admin@example.com"; // Replace with your email
$subject = "New Enrollment Form Submission";
$headers = "From: $email\r\n" .
           "Reply-To: $email\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

$emailBody = "New enrollment form submission:\n\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: $phone\n";
$emailBody .= "Program: $program\n";
$emailBody .= "Message: $message\n";

if (mail($to, $subject, $emailBody, $headers)) {
    echo json_encode(["message" => "Form submitted successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email."]);
}
?>

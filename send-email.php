<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is installed

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'isaacrao200121@gmail.com'; // Replace with your email
        $mail->Password = 'apkf meob prvl zxvl'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($_POST['email'], $_POST['name']); // Use the user's email as the "From" email
        //$mail->addReplyTo($email, $name); // Use the user's email for replies as well
        $mail->addAddress('isaacrao200121@gmail.com', 'isaac'); // Recipient's email
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = 'Name: ' . $_POST['name'] . '<br>Email: ' . $_POST['email'] . '<br>Message: ' . $_POST['message'];
            
        // Send email    
        $mail->send();
        header("Location: success.php");
        exit;
    } catch (Exception $e) {
        // Redirect to error page in case of failure
        header("Location: error.php");
        exit;
    }
}
?>
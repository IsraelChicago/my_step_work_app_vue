<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);

    $name = @trim(stripslashes($_POST['contact-name'])); 
	$email = @trim(stripslashes($_POST['contact-email'])); 
    $subject = @trim(stripslashes($_POST['contact-subject'])); 
    $message = @trim(stripslashes($_POST['contact-message'])); 

    $email_from = $email;
	//$email_to = 'email@domain.com';
	$email_to = 'settysantu@gmail.com';

    $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Phone No: ' . $phoneno . "\n\n" . 'Subject: ' . $subject. "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die; 
?>	
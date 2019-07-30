<?php

if($_POST["submit"]) {
	$recipient = "echeng@scu.edu";
	$subject = "Website Contact Message";
	$sender = $_POST["name"];
	$senderEmail = $_POST["email"];
	$message = $_POST["message"];

	$mailBody = "Name: $name\nEmail:
$senderEmail\n\n$message";

	mail($recipient, $subject, $mailBody, "From:
$sender <senderEmail>");

	$thankYou="<p>Thank You! Your message has been
sent.</p>";	
}



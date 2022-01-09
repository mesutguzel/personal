<?php


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "mesutguzel3501@gmail.com";
    $headers = "From: " . $mailFrom;
    $txt = "You have received an email from " . $nam . ".\n\n" . $message;

    mail($mailTo, $txt, $headers);
    header("Location: navbar.html?mailsend");
}

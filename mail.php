<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$phone = trim($phone);
$message = trim($message);

if (mail("mail.ponomarev@yandex.ru", "Заявка с сайта", "Телефон: ".$phone." Сообщение: ".$message. "ФИО:".$name.". E-mail: ".$email ." . From: mail.ponomarev@yandex.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
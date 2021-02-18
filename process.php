<?php

if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'Поле ИМЯ пустое';}
if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {
	$phone = stripslashes(strip_tags($_POST['phone']));
} else {$phone = 'Поле ТЕЛЕФОН пустое';}

if ((isset($_POST['banner'])) && (strlen(trim($_POST['banner'])) > 0)) {
  $banner = stripslashes(strip_tags($_POST['banner']));
} else {$banner = 'Поле banner пустое';}

ob_start();


  // $to      = 'okna@panorama30.ru, sm@panorama30.ru, m1@panorama30.ru, m2@panorama30.ru, makarovt_t@mail.ru';
  $to      = 'mr.offlain@mail.ru';
  $subject = 'Заявка на замер с сайта Панорама';
  $valid = false;
  $headers = 'From: info@bzcekh.ru' . "\r\n" .
      'Reply-To: info@bzcekh.ru' . "\r\n" .
      'Content-type: text/html' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  $valid = true;
  $message = 'Имя: '. $name .'<br>Телефон: '. $phone .'<br>Тип баннера: '. $banner;
  mail($to, $subject, $message, $headers);
  exit;

?>

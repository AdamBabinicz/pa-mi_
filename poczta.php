<?php
error_reporting(0);
$msg="";

if(isset($_POST['submit'])) {
  $to = "puaro@vp.pl";
  $subject = "Form Submission";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['text'];

  $msgBody = 'Name : '.$name.' has written you : '.$message;
  $headers = 'From:' .$email;

  if(mail($to, $subject, $msBody, $headers)) {
    $msg = "Message Sent Successfully!";
  } else {
    $msg = "Failed to send the message!";
  }
}
?>
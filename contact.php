<?php

if(isset($_POST['submit'])) {
    
    $name = $_POST["name"];
    $mailFrom = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "contacto@b2bu.com.mx";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\"\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: contact.php");
}

?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-mail mandado</title>
    <link href="./thanksforcontact.css" rel="stylesheet">
</head>
<body>

<h1  style = "text-align: center;">
         Gracias por tu mensaje, te responderemos pronto.</h1> 
<div class="box-1">
 
<a href = "./index.html">
  <div class="btn btn-one" >
     <span>Página principal</span>
  </div>
</a>
</div>  

</body>
</html>


<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail ->Charset = 'UTF-8';
    $mail -> setLanguage('ru', 'phpmailer/language/');
    $mail -> IsHTML(true);

    $mail -> setFrom('info@fls.guru');
    $mail -> addAddress('kzhanahmet573@mail.com');
    $mail -> Subject = 'привет';

    $body = '<h1>Welcome</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong>'.$_POST['name'].'</p>';        
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';        
    }
    if(trim(!empty($_POST['messsage']))){
            $body.='<p><strong>message:</strong>'.$_POST['message'].'</p>';        
        }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Error';
    }
    else{
        $message = 'source send';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>

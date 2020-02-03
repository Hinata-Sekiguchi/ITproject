<?php

$to = '*会社側の送られるメアド';
$subject = '予約問い合わせ';

// 本文組み立て
$params = ['name','address','email'];

//
$body_string = "日付:". date('Y-m-d H:i:s'). "\n";
foreach($params as $p) {
    $body_string .= "{$p} : {$_POST[$p]}\n\n";
}



//$message = “名前：" . $_POST[“name"] . “\n本文：" . $_POST[“message"];
//if (!mb_send_mail($to, $subject, $body_string) {
//    header('Location: ./thankyou.html');
    exit("error");
//}
    
//if (!mb_send_mail("example@example.com", $_POST["subject"], $message, "From:
//" . $_POST[“mail"])) {
//exit(“error");
//}

?>

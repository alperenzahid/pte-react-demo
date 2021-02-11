<?php

 header("Access-Control-Allow-Origin: *");
 header('Content-Type: application/json');
 ini_set('display_errors',1);
error_reporting(E_ALL);


if(isset($_FILES['file']) and !$_FILES['file']['error']){
    $fname =  $_POST["name"] . ".webm";
    echo json_encode(move_uploaded_file($_FILES['file']['tmp_name'], "records/" . $fname));
}
?>

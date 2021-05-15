<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $exit = false;

    $request = json_decode($postdata)->data;

    $sql = "INSERT INTO employees (name,surname,dni,salary,phone_number,position) VALUES ('$request->name','$request->surname','$request->dni','$request->salary','$request->telf','$request->position');";
    if ($result = mysqli_query($mysqli, $sql)) {
        $exit = true;
       
    }
    echo json_encode($exit);
}

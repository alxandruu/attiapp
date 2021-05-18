<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $exit = false;

    $request = json_decode($postdata)->data;
  
    $name = strtoupper($request->name);
    $surname = strtoupper($request->surname);
    $dni = strtoupper($request->dni);
    $position = strtoupper($request->position);

    $sql2 = "SELECT * FROM employees WHERE dni='$dni'";
    $row = mysqli_num_rows(mysqli_query($mysqli, $sql2));  
    if($row === 0){
        $sql = "INSERT INTO employees (name,surname,dni,salary,phone_number,position) VALUES ('$name','$surname','$dni','$request->salary','$request->telf','$position');";
        if ($result = mysqli_query($mysqli, $sql)) {
            $exit = true;
        }
    }else{
        $exit = false;
    }
    echo json_encode($exit);
}

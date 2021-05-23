<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
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
            
            echo json_encode(true);
        }
    }else{
        echo json_encode([false, "Ya existe un empleado con el mismo DNI/NIE"]);   
    }
    
}

<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata)->data;

    $id = $request->id;
    $name = strtoupper($request->name);
    $surname = strtoupper($request->surname);
    $dni = strtoupper($request->dni);
    $position = strtoupper($request->position);

    if ($id == 0) {
        // Empleado Nuevo

        $row = mysqli_num_rows(mysqli_query($mysqli, "SELECT * FROM employees WHERE dni='$dni'"));
        if ($row === 0) {
            $sql = "INSERT INTO employees (name,surname,dni,salary,phone_number,position) VALUES ('$name','$surname','$dni','$request->salary','$request->telf','$position');";
            if ($result = mysqli_query($mysqli, $sql)) {
                echo json_encode([true, "Empleado agregado correctamente"]);
            }
        } else {
            echo json_encode([false, "Ya existe un empleado con el mismo DNI/NIE"]);
        }
    } else if ($id > 0) {
        //Actualizar Empleado
        $sql = "UPDATE employees 
        SET name='$name', surname='$surname', dni='$dni', salary='$request->salary',phone_number='$request->telf',position='$position'
        WHERE id='$id'";
        if ($result = mysqli_query($mysqli, $sql)) {
            echo json_encode([true, "Empleado modifcado correctamente"]);
        } else {
            http_response_code(404);
        }
    } else {
        http_response_code(404);
    }
}

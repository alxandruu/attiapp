<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata)->data;

    $id = $request->id;
    $name = strtoupper($request->name);
    $date = strtoupper($request->date);
    $price = strtoupper($request->price);
    $categoria = strtoupper ($request->categoria);

    if ($id == 0) {
        // Empleado Nuevo
        /*
        $row = mysqli_num_rows(mysqli_query($mysqli, "SELECT * FROM employees WHERE dni='$dni'"));
        if ($row === 0) {
           
        } else {
            echo json_encode([false, "Ya existe un empleado con el mismo DNI/NIE"]);
        }
        */
        $sql = "INSERT INTO gastos (name,date,price,id_cat) VALUES ('$name','$date','$price','$categoria');";
        if ($result = mysqli_query($mysqli, $sql)) {
            echo json_encode([true, "Gasto agregado correctamente"]);
        }
    } else if ($id > 0) {
        //Actualizar Empleado
        $sql = "UPDATE employees 
        SET name='$name', surname='$surname', dni='$dni', salary='$request->salary',phone_number='$request->telf',position='$position'
        WHERE id='$id'";
        if ($result = mysqli_query($mysqli, $sql)) {
            echo json_encode([true, "Empleado modifcado correctamente"]);
        }else{
            http_response_code(404);
        }
    } else {
        http_response_code(404);
    }
}

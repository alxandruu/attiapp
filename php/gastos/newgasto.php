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

    
        $sql = "INSERT INTO gastos (name,date,price,id_cat) VALUES ('$name','$date','$price','$categoria');";
        if ($result = mysqli_query($mysqli, $sql)) {
            echo json_encode([true, "Gasto agregado correctamente"]);
        }
    
}

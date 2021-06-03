<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata)->data;

    $title = strtoupper($request->title);

    if ($result = mysqli_query($mysqli, "INSERT INTO ganancias (name,date,price,id_cat) VALUES ('$title','$request->date','$request->price','$request->id_cat')")) {
        echo json_encode([true, "Ganancia agregada correctamente"]);
    } else {
        http_response_code(404);
    }
}

<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata)->data;
    $name = strtoupper($request->name);

    if ($result = mysqli_query($mysqli, "INSERT INTO categoria (nombre) VALUES ('$name')"))
        echo json_encode(true);
    else
        http_response_code(404);
}

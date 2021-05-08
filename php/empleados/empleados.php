<?php
include_once("../database.php");

$empleados = [];
$sql = "SELECT * FROM employees";

if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $empleados[$i] = $row;
        $i++;
    }
    echo json_encode($empleados);
} else {
    http_response_code(404);
}

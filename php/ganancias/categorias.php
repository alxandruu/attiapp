<?php
include_once("../database.php");

$categories = [];

$sql ="SELECT * FROM categoria";
if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $categories[$i] = $row;
        $i++;
    }
    echo json_encode($categories);
} else {
    http_response_code(404);
}
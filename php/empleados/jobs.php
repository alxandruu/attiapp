<?php
include_once("../database.php");

$jobs = [];

$sql ="SELECT * FROM job";
if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $jobs[$i] = $row;
        $i++;
    }
    echo json_encode($jobs);
} else {
    http_response_code(404);
}
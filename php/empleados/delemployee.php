<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $exit = false;

    $request = json_decode($postdata);
    $id = $request->id;

    $sql = "DELETE FROM employees WHERE id='$id'";
    if ($result = mysqli_query($mysqli, $sql)) {
        $exit = true;
    }
    echo json_encode($exit);
}

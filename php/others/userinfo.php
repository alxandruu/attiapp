<?php
include_once("../database.php");

$postdata = file_get_contents("php://input");


if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $token = mysqli_real_escape_string($mysqli, trim($request->token));

    $sql = "SELECT name, img_profile FROM users where id='$token'";

    if ($result = mysqli_query($mysqli, $sql)) {
        $result = mysqli_fetch_assoc($result);
        echo json_encode($result);
    } else {
        http_response_code(404);
    }
}
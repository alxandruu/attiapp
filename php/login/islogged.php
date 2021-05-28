<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $exit = false;

    $token = mysqli_real_escape_string($mysqli, trim($request->usertoken));

    $sql = "SELECT count(token) as ct FROM access where token='$token'";

    if ($result = mysqli_query($mysqli, $sql)) {
        $ct = mysqli_fetch_assoc($result)["ct"];

        if ($ct > 0) {
            echo json_encode(true);
        } else {
            echo json_encode(false);
        }
    } else {
        http_response_code(404);
    }
}

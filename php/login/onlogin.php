<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $exit = false;


    $pwd = md5(mysqli_real_escape_string($mysqli, trim($request->password)));
    $username = mysqli_real_escape_string($mysqli, trim($request->username));

    $sql = "SELECT * FROM users where username='$username' and password='$pwd'";

    if ($result = mysqli_query($mysqli, $sql)) {

        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $id  = $row["id"];
            // GENERATE TOKEN
            do {
                $token = openssl_random_pseudo_bytes(16);
                $token = bin2hex($token);
                $exist = mysqli_num_rows(mysqli_query($mysqli, "SELECT token FROM access WHERE token='$token'"));
            } while ($exist > 0);
            // ** 

            mysqli_query($mysqli, "DELETE FROM access WHERE userid='$id'");

            $sqlAccess = "INSERT INTO access VALUES ('$token','$id')";

            if (mysqli_query($mysqli, $sqlAccess)) {
                echo json_encode($token);
            } else {
                echo json_encode(false);
            }
        } else {
            echo json_encode(false);
        }
    } else {
        http_response_code(404);
    }
}

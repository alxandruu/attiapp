<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $iduser = mysqli_real_escape_string($mysqli, trim($request->tokenUser));
    $sqllvlperm = "SELECT lvl_perm FROM users where id='$iduser'";

    $idlvlperm = mysqli_fetch_assoc(mysqli_query($mysqli, $sqllvlperm))["lvl_perm"];

    $sqlperm = "SELECT * FROM perms where id='$idlvlperm'";
    $result = mysqli_fetch_assoc(mysqli_query($mysqli, $sqlperm));
    // $result = mysqli_query($mysqli, $sql);
    // $arrresult = mysqli_fetch_assoc($result);
    echo json_encode($result);
    // if ($result = mysqli_query($mysqli, $sql)) {
    //     $rows = array();
    //     while ($row = mysqli_fetch_assoc($result)) {
    //         $rows[] = $row;
    //     }
    //     echo json_encode($rows);
    // } else {
    //     http_response_code(404);
    // }
}

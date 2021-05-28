<?php
include_once("../database.php");

$postdata = file_get_contents("php://input");


if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $token = mysqli_real_escape_string($mysqli, trim($request->token));

    $sql = "SELECT name, img_profile,username,admin_perm,surname,email FROM users where id='$token'";

    if ($result = mysqli_query($mysqli, $sql)) {
        $result = mysqli_fetch_assoc($result);
        // FILE MOVE
        $source = '../../uploads/' . $result["img_profile"];
        $destination = '../../src/assets/img/users/' . $result["img_profile"];
        if (!file_exists($destination) && file_exists($source)) {
            copy($source, $destination);
           
        }else if(!file_exists($source)){ 
            $result["img_profile"]="default.jpg";
        }
        echo json_encode($result);
        
    } else {
        http_response_code(404);
    }
}

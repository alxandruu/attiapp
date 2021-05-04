<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $folderPath = '../../uploads/';
    $request = json_decode($postdata);
    // IMAGE

    $allowed_extensions = array("jpg", "jpeg", "png");

    $token = mysqli_real_escape_string($mysqli, trim($request->token));
    $image_parts = explode(";base64,", $request->img->fileSource);
    
    $image_type_aux = explode("image/", $image_parts[0]);

    $image_type = $image_type_aux[1];
    
    $image_base64 = base64_decode($image_parts[1]);
    if (in_array($image_type, $allowed_extensions)) {
        $uniqueid = uniqid();
        $file = $folderPath . $uniqueid . '.' . $image_type;
        $fileDB = $uniqueid.'.'.$image_type;
        $sql = "UPDATE users SET img_profile='$fileDB' WHERE id='$token'";
        if($result= mysqli_query($mysqli, $sql)){
            if (file_put_contents($file, $image_base64)) {
                echo json_encode(true);
            } else {
                echo json_encode(false);
            }
        }    
    } else {
        echo json_encode(false);
    }
    // $file = $folderPath . uniqid() . '.' . $image_type;
    // if (file_put_contents($file, $image_base64)) {
    //     echo json_encode(true);
    // } else {
    //     echo json_encode(false);
    // }
}

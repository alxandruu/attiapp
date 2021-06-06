<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  
    $request = json_decode($postdata);

    $id = $request->id;

    $sql = "DELETE FROM categoria WHERE id='$id'";
    if ($result = mysqli_query($mysqli, $sql) && mysqli_query($mysqli, "DELETE FROM ganancias WHERE id_cat='$id'") ) {
        echo json_encode(true);
    }else {
        http_response_code(404);
    }
   
}

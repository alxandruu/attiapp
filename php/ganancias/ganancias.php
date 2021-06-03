<?php
include_once("../database.php");

$ganancias = [];
$sql = "SELECT * FROM ganancias";

if($result = mysqli_query($mysqli, "SELECT * FROM categoria")){
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
        $row['data'] =[];
        array_push($ganancias, $row);
        
        $i++;
    }
}else {
    http_response_code(404);
}



if ($result = mysqli_query($mysqli, $sql)) {
 
    
    while ($row = mysqli_fetch_assoc($result)) {
        $id_cat = $row["id_cat"];
        $cat = mysqli_fetch_assoc(mysqli_query($mysqli, "SELECT nombre FROM categoria where id='$id_cat'"))["nombre"];
        for($j = 0;$j<count($ganancias);$j++){
            if($ganancias[$j]["nombre"] == $cat){
                array_push($ganancias[$j]["data"],$row);
            }
        }
       
       
    }
    
    echo json_encode($ganancias);
} else {
    http_response_code(404);
}

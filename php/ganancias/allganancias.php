<?php
include_once("../database.php");
$ganancias = [];
$c = [];

if ($result = mysqli_query($mysqli, "SELECT * FROM categoria")) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $c[$i] = $row;
        $i++;
    }
} else {
    http_response_code(404);
}

if ($result = mysqli_query($mysqli, "SELECT * FROM ganancias")) {

    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        for($j = 0; $j < count($c); $j++){
            if($c[$j]["id"] == $row["id_cat"]){
                $row["categoria"] = $c[$j]["nombre"];
            }
        }
        $ganancias[$i] = $row;
        $i++;
    }
    echo json_encode($ganancias);
} else {
    http_response_code(404);
}

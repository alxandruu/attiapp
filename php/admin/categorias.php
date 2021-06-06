<?php
include_once("../database.php");

$categories = [];

$sql ="SELECT * FROM categoria";
if ($result = mysqli_query($mysqli, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $cat = $row["id"];
        $countGan = mysqli_num_rows(mysqli_query($mysqli, "SELECT id t from ganancias WHERE id_cat='$cat'"));
        $countLos = mysqli_num_rows(mysqli_query($mysqli, "SELECT id t from gastos WHERE id_cat='$cat'"));
        $row["relaciones"] = $countGan + $countLos;
        $categories[$i] = $row;
        $i++;
    }
    echo json_encode($categories);
} else {
    http_response_code(404);
}
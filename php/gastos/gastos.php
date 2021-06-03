<?php
include_once("../database.php");

$categorias = [];

$sql = "SELECT nombre FROM categoria";
$sql2 = "SELECT * FROM gastos";




if ($result = mysqli_query($mysqli, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
       $row['data']=[];
        array_push($categorias,$row);
      
    }
    
} else {
    http_response_code(404);
}

if($result = mysqli_query($mysqli, $sql2)){
    $i=0;

    while ($row = mysqli_fetch_assoc($result)) {
        $id_cat=$row['id_cat'];
       $nom_categoria =   mysqli_fetch_assoc(mysqli_query($mysqli, "SELECT nombre FROM categoria WHERE id = '$id_cat'"))['nombre'];
       for($j=0;$j < count($categorias);$j++){

           if($categorias[$j]['nombre']==$nom_categoria){
               array_push($categorias[$j]['data'],$row);
           }
       }
      
     $i++;
    }

    //Eliminar categorías vacías
    $return_cat = [];
    for($j=0;$j < count($categorias);$j++){
     

       if(count($categorias[$j]['data'])>0){
        array_push($return_cat,$categorias[$j]);
       }
    }
    echo json_encode($return_cat);
}else{
    http_response_code(404);
}

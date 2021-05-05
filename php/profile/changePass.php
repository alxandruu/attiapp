<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $pact = mysqli_real_escape_string($mysqli, trim($request->passact));
    $pnew = mysqli_real_escape_string($mysqli, trim($request->passnew));
    $token = mysqli_real_escape_string($mysqli, trim($request->token));
    $sql = "SELECT password FROM users where id='$token'";
    if ($result = mysqli_query($mysqli, $sql)) {
        if ($pact == '' || $pnew == '') {
            echo json_encode([false, "Ambos campos son requeridos."]);
        } else {
            $er = "/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/"; /*La contraseña debe tener al entre 5 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
            NO puede tener otros símbolos. */
            $rta = preg_match($er, $pnew);
            if ($rta === 0) {
                echo json_encode([false, "Introduce un formato correcto en la nueva contraseña por favor."]);
            } else if (mysqli_fetch_assoc($result)['password'] === $pact) {

                if ($pact === $pnew) {
                    echo json_encode([false, "Las dos contraseñas son iguales"]);
                } else {
                    $pnew = md5($pnew);
                    $sqlupdate = "UPDATE users SET password='$pnew' WHERE id='$token'";
                    $result2 = mysqli_query($mysqli, $sqlupdate);
                    echo json_encode([$result2, "Cambio de contraseña realizado correctamente"]);
                }
            } else {
                echo json_encode([false, "La contraseña actual introducida no es igual"]);
            }
        }
    }
}

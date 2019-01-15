<?php

header("Content-type:text/html;charset=utf-8");
include ("../inc/dbconn.php");

$Id = $_GET["Id"];

$sql = "select * from addshops where pid=$Id";
$result = $conn->query($sql);
if($result->num_rows > 0){
    $sql2 = "delete from addshops where pid=$Id";
    $result2 = $conn->query($sql2);
    $data['success']=0;
}else{
    $sql3 = "insert into addshops (pid) values ($Id)";
    $result3 = $conn->query($sql3);
    $data['success']=1;
}
echo json_encode($data);
?>
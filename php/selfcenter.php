<?php
    // ++++++++++++传向个人中心的接口+++++++++++++;
    include("../inc/dbconn.php");
    $user=$_GET["username"];
    // $user=4;
    $sql="update paygoods set recordcount='2' where username= '$user' and recordcount='1'";
    $conn->query($sql);
        echo 1;
?>
<?php
    // 增加商品修改购物车的数量
    include("../inc/dbconn.php");
    $count=$_GET['count'];
    $Id=$_GET["Id"];
    $user=$_GET["username"];
    $sql="update paygoods set goodscount='$count' where username= '$user'and goodsId='$Id' and recordcount='1'";
        $conn->query($sql);
        echo 1;
?>
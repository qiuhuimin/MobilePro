<?php
    // 购物页删除商品修改购物车数据
     include("../inc/dbconn.php");
     $Id=$_GET['Id'];
     $sql = "delete from shopcar where pid='$Id'";
     $result = $conn->query($sql);
     if($result){
         $data['success'] = 1;
     }else{
         $data['success'] = 0;
     }
     echo json_encode($data);
?>
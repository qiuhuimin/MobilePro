<?php
    // ****添加购物车的接口*****
    include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $Id=$_GET['id'];
    $user=$_GET['username'];
    $count=$_GET['count'];
    $sql1="select * from shopcar where pid='$Id' and username='$user'";
    $result1 = $conn->query($sql1);
    if($result1->num_rows>0){
        while($row=mysqli_fetch_assoc($result1)){
            $q=$row['goodscount'];
            $q+=$count;
            $sql2="update shopcar set goodscount='$q' where pid='$Id'";
            $result2 = $conn->query($sql2);
            $data['success'] = 2;
        }
    }else{
        $sql3="insert into shopcar (pid,goodscount,username) values ('$Id','$count','$user')";
        $result3 = $conn->query($sql3);
        $data['success'] = 3;
    }
   
    echo json_encode($data);
?>
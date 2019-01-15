<?php
    //+++++++付款页面接受的数据++++++++++++
     include("../inc/dbconn.php");
     date_default_timezone_set('PRC');
     $Id=$_GET['Id'];
     $user=$_GET['username'];
     $count=$_GET['count'];
    $sql="update shopcar set goodscount='$count' where username= '$user'and pid='$Id'";
    $result = $conn->query($sql);
    $sql1="select * from paygoods where username= '$user' and goodsId= '$Id' and recordcount='1'";
    $result1 = $conn->query($sql1);
    if($result1->num_rows>0){
        while($row=mysqli_fetch_assoc($result1)){
            $q=$row['goodscount'];
            var_dump($q);
            $q=$count;
            $sql2="update paygoods set goodscount='$q' where username= '$user'and goodsId='$Id' and recordcount='1'";
            $result2 = $conn->query($sql2);
            $data['success'] = 1;
        }
    }else{
        $sql3="insert into paygoods (goodsId,goodscount,username,recordcount) values ('$Id','$count','$user','1')";
        $conn->query($sql3);
        $data['success'] = 2;
    }
     echo json_encode($data); 
?>
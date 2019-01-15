<?php
	header("Content-type:text/html;charset=utf-8");
    include ("../inc/dbconn.php");
    $userTel = $_GET['userTel'];
    $psw = $_GET['psw'];
   
    $sql="select * from user where userTel='$userTel'";

    $result=$conn->query($sql);
 
    if($result->num_rows >0){
        $data["success"]=1;
        $row = mysqli_fetch_assoc($result);
        $data['list'] = $row;
        
    }else{
        $data["success"]=0;
        $sql2 = "insert into user(userTel,psw) value ('$userTel','$psw')";
        $conn->query($sql2);
    }
    echo json_encode($data);

?>
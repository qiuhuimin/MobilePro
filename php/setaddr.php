<?php
    //添加地址$修改地址
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $truename=$_GET['truename'];
    $userTel=$_GET['userTel'];
    $userrigion=$_GET['userrigion'];
    $datailaddr=$_GET['datailaddr'];
    $user=$_GET['username'];
    $Id=$_GET['Id'];
    if($truename!=null && $userTel!= null && $userrigion!=null && $datailaddr!=null){
        $sql = "select * from addressc where username='$user' and truename='$truename' and userTel='$userTel' and userregion='$userrigion' and detailaddr='$datailaddr'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $data['success']=0;
        }else{
            $sql = "select * from addressc where Id='$Id'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0){
            $sql="update addressc set truename='$truename',userTel='$userTel',userregion='$userrigion',detailaddr='$datailaddr' where username='$user' and Id='$Id'";
            $result = $conn->query($sql);
            $data['success']=1;
            }else{
                $sql = "insert into addressc( truename,userTel,userregion,detailaddr,username) values ('$truename','$userTel','$userrigion','$datailaddr','$user')";
                $result = $conn->query($sql);
                $data['success']=2;
            }      
        }
    }else{
        $data['success']=0;
    }
    echo json_encode($data);
?>
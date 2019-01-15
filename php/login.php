<?php
	header("Content-type:text/html;charset=utf-8");
    include ("../inc/dbconn.php");
    $userTel = $_GET['userTel'];
    $psw = $_GET['psw'];
   
    // $sql = "select * from user where userTel='$userTel'";
    $sql = "select * from user where userTel='$userTel' and psw = '$psw'";
    // $result = $conn->query($sql);
    // var_dump($conn);
    // die();
    $result=$conn->query($sql);
 
    if($result->num_rows >0){
        $data["success"]=1;
        $row = mysqli_fetch_assoc($result);
        
		$data['list'] = $row;
    }else{
        $data["success"]=0;

    }
    echo json_encode($data);

?>
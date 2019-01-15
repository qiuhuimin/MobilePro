<?php
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $user=$_GET['username'];
    $sql = "select goods.*,shopcar.goodscount from goods inner join shopcar on goods.Id=shopcar.pid where username='$user' order by shopcar.Id desc";
    $result = $conn->query($sql);
    if ($result->num_rows > 0){
    	while($row=mysqli_fetch_assoc($result)){
            $list[]=$row;
           
        } 
        $data['list']=$list;
        $data['success']=1;
    }else{
        $data['success']=0; 
    }
    echo json_encode($data);
?>
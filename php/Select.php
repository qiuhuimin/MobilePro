<?php 
    // 连接数据库
    
	include("../inc/dbconn.php");
    $key=$_GET['key'];//接收传过来的值
  
	// 数据库模糊查询
	$sql="select goods_info from goods where goods_info like '%$key%' limit 10";
	// 执行sql
    $result=$conn->query($sql);
  
	if ($result->num_rows>0) {
		while ($row=mysqli_fetch_assoc($result)) {
			$list[]=$row;
		}
		$data['success']=1;
		$data['list']=$list;
	}else{
		$data['success']=0;
	}
	echo json_encode($data);
 ?>
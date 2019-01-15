<?php
    // ******结算页获取数据的接口******
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $user=$_GET['username'];
    $sql = "select goods.* ,paygoods.goodscount , paygoods.recordcount, paygoods.username from goods inner join paygoods on goods.Id=paygoods.goodsId where paygoods.recordcount='1' and  paygoods.username='$user' order by paygoods.Id desc";
    $result = $conn->query($sql);
    if ($result->num_rows > 0){
    	while($row=mysqli_fetch_assoc($result)){
    		$data[]=$row;
    	}
    }
    echo json_encode($data);
?>
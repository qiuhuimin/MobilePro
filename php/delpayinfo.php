<?php
	// 删除支付界面中的商品
	include("../inc/dbconn.php");
	$user=$_GET['username'];
	$sql = "delete from paygoods where username='$user' and recordcount='1'";
	$result = $conn->query($sql);
	echo 1;
?>
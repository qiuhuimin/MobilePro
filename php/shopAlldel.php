<?php
	// 删除购物车中全部购买的商品
	include("../inc/dbconn.php");
	$user=$_GET['username'];
	$Id=$_GET['Id'];
	$sql = "delete from shopcar where username='$user' and pid='$Id'";
	$result = $conn->query($sql);
	echo 1;
?>
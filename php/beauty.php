<?php

header("Content-type:text/html;charset=utf-8");
include ("../inc/dbconn.php");

// $Id = $_GET["Id"];
$page = $_GET["page"];
$size = 3;
$page = ($page-1)*$size;

$sql = "select * from goods where advise = '1' order by rand() limit 6 ";
$result = $conn->query($sql);
if($result->num_rows >0){
   $data['success']=1;
   while($row=mysqli_fetch_assoc($result)){
       $list[]=$row;
   }
   $data['list']=$list;
}else{
   $data['success']=0;
}
echo json_encode($data);


?>
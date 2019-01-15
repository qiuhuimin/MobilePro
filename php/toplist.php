<?php

header("Content-type:text/html;charset=utf-8");
include ("../inc/dbconn.php");

$Id = $_GET["Id"];

$sql2="select type_id from goods where Id ='$Id'";
$result2=$conn->query($sql2);
$row2=mysqli_fetch_row($result2);

$sql = "select * from goods where type_id ='$row2[0]'  order by goods_num desc limit 10";
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
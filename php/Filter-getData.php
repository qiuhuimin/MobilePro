<?php
 include("../inc/dbconn.php");
//  $page=$_GET["page"];
 $key=$_GET["key"];
//  $size=6;
//  $page=($page-1)*$size;
 $sql="select * from goods where goods_info like '%$key%'";
//  $sql="select * from goods order by Id asc limit $page,6";
 $result=$conn->query($sql);
 if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $list[]=$row;
    }
    $data["success"]=1;
    $data["list"]=$list;
 }else{
     $data["success"]=0;
 }
 echo json_encode($data);

?>
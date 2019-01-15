<?php
 include("../inc/dbconn.php");
 $price=$_GET["price"];
 $key=$_GET["key"];
 if($price=="0"){
     $sql="select * from goods  where goods_info like '%$key%' order by price asc";
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
 }
 else if($price=="1"){
    $sql="select * from goods  where goods_info like '%$key%' order by price desc";
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
 }
?>
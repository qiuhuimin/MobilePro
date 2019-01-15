<?php
 include("../inc/dbconn.php");
 $type=$_GET["type"];
 if($type=="1"){
     $sql="select * from goods  where advise=1 ";
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
 else if($type=="2"){
    $sql="select * from goods  where advise=2";
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
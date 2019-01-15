<?php
    include ('../inc/dbconn.php');
    $Id=$_GET["Id"];
    
    $sql="select * from goods where Id='$Id' ";
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
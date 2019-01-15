<?php
    header("Content-type:text/html;charset=utf-8");
    include ("../inc/dbconn.php");

    $sql = "select * from catelist";
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
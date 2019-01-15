<?php
    include ('../inc/dbconn.php');

    $typeId=$_GET['typeId'];
    $sql="select pic from goods where type_id='$typeId' order by goods_num desc limit 5";
    
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
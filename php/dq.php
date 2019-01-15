<?php
    include("../inc/dbconn.php");
    if(isset($_GET['page'])){
        $page = $_GET['page'];
        $res = ($page-1)*4;
        $sql = "select * from goods where type_id='dq' order by Id limit $res,4";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
         while($row = mysqli_fetch_assoc($result)){
                $list[] = $row;
         }
            $data['success'] = 1;
            $data['list'] = $list;
        }else{
            $data['success'] = 0;
        }
     echo json_encode($data);
    }else{
        $sql = "select * from goods where type_id='dq'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
         while($row = mysqli_fetch_assoc($result)){
                $list[] = $row;
            }
            $data['success'] = 1;
         $data['list'] = $list;
        }else{
            $data['success'] = 0;
     }
        echo json_encode($data);
    }
?>
<?php
    //将数据库地址渲染到添加地址页面
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $user=$_GET['username'];
        $sql = "select * from addressc where username='$user' order by Id desc";
        $result = $conn->query($sql);
        if ($result->num_rows > 0){
            while($row=mysqli_fetch_assoc($result)){
                $list[]=$row;
               
            } 
            $data['list']=$list;
            $data['success']=1;
        }
    echo json_encode($data);
?>
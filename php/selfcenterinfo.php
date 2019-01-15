<?php
    //++++++++++++个人中心的接受数据的接口+++++++++++++++++；
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    $user=$_GET['username'];
    // $user=4;
    $sql = "select goods.*,paygoods.goodscount from goods inner join paygoods on goods.Id=paygoods.goodsId where paygoods.username='$user' and recordcount='2' order by paygoods.Id desc";
    $result = $conn->query($sql);
    if ($result->num_rows > 0){
    	while($row=mysqli_fetch_assoc($result)){
            $list[]=$row;
           
        } 
        $data['list']=$list;
        $data['success']=1;
    }else{
        $data['success']=0; 
    }
    echo json_encode($data);
?>
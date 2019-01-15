<?php
	include("../inc/dbconn.php");
    date_default_timezone_set('PRC');
    // $user=$_GET['username'];
    $sql = "select goods.*,addshops.* from goods inner join addshops on goods.Id=addshops.pid order by addshops.Id desc";
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
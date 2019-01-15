// 电话正则验证
function phone(){
    var mob =/^[0-9]{11}$/;
    var tel = $(".tel");
  
    tel.blur(function(){
        $(".err").hide();

        var val = tel.val();
        
        if((mob.test(val))==false){
            $(".err").show();
            
        }     
        if(tel.length==0){
            $(".err").hide();
        } 
    });
    tel.focus(function(){
        $(".err").hide();
    })
}
phone();

// 点击小眼睛按钮 密码改变type
function passHide(){

    $(".eye-btn").on("touchstart",function(e){
        if($(".mi").hasClass("ab")){
            $(".mi").removeClass("ab").attr("type","password");
            $(".eye-btn").removeClass("eye");
        }else{
            // console.log($(".mi"));
            $(".mi").addClass("ab");
            $(".mi").attr("type","text");
            $(".eye-btn").addClass("eye");

        }
        
    })
  
}
passHide();

// 密码验证
function passwordYan(){
    var pass = /^\w{6,12}$/;
    var mi = $(".mi");
    
    mi.focus(function(){
        $(".err3").hide();
    })

    mi.blur(function(){
        var val = mi.val();
        if((pass.test(val))==false){
            $(".err3").show();
        }else{
            $(".err3").hide();
        }
        if(val.length==0){
            $(".err3").hide();
        } 
    });  
}
passwordYan();

// 登录按钮ajax事件
function loginBtn(){

    var tel = $(".tel"),
        mi = $(".mi"),
        loginBtn = $(".ipt-btn");
    loginBtn.on("touchstart",function(e){
        if (tel.val().length > 0) {
            var userTel = tel.val();
            var psw = mi.val();
            if(userTel != "" && psw!=""){
                $.ajax({
                    type:"get",
                    url:'php/login.php',
                    data:{
                        userTel : userTel,
                        psw : psw
                    },
                    dataType:'json',
                    timeout:3000,
                    beforeSend: function (){
                        loginBtn.html('登录中...');
                    },
                    success:function(data){
                        if(data.success == "1"){ // 判断是否拿到后台数据
                            
                            if(psw == data.list["psw"]){ //判断密码
                                // console.log("密码正确");
                                // location.href = "person.html";
                                history.back();

                                setCookie('userTel',userTel,7);
                                setCookie('psw',psw,7);
                            }else{
                                // console.log("密码错误");
                                $('.err3').show();
                            }

                        }else{
                            console.log("后台数据未拿到")
                            // $(".err2").show();

                        }
                    }
                   
                })
            }else{
                $(".err2").show();
            }
		}
    })

}   
loginBtn();

function handlerCookie(){
	var userCookie=getCookie("userTel");
	var pwCookie=getCookie("psw");
	if (!(userCookie==null||pwCookie==null)) {
        console.log("有CookiSe");
	}else{
        console.log("没有cookies");

	}
}
handlerCookie();

// //检查cookie是否存在，若存在，读取出来
// function checkCookie(){
//     var userName=document.getElementById("userName");
//     var password=document.getElementById("password");
//     var UValue=getCookie(userName.id);
//     var PValue=getCookie(password.id);
//     if (UValue!=null && UValue!="" && PValue!=null && PValue!=""){
//         userName.value=UValue;
//         password.value=PValue;
//     }
// }

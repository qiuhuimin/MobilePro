$('.tel').focus(function(){
    $(".err").hide();
});
// 电话验证,点击出现注册验证码
function phone(){

    var mob =/^[0-9]{11}$/;
    var tel = $(".tel");
    tel.keyup(function(){
        var val = tel.val();
        if((mob.test(val))==false){
            $(".verify-btn").attr("disable","disable").css("color","gray");
        }else{
            $(".verify-btn").css("","").attr("disable","").css("color","white");
            $(".verify-btn").on("touchstart",function(){
                $(".yan-pa").show();
                var num="";
                for(var i=0;i<4;i++){
                    num+=Math.floor(Math.random()*10);
                }
                var _num = num;
                $(".y-ran").html(num);
               
                $(".clo").on("touchstart",function(){
                    $(".yan-pa").hide();
                    $(".yan-num").val(_num);

                })
            })    
        }
        if(val.length==0){
            $(".err").hide();
        } 
    });
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
    $(".err2").hide();
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
// 注册事件

function regBtn(){
    $(".ipt-btn").tap(function(){
    
        var userTel = $(".tel").val();
        var psw = $(".mi").val();
        if(userTel != "" && psw!=""){
            $.ajax({
                type:"get",
                url:"php/register.php",
                data:{
                    userTel : userTel,
                    psw : psw
                },
                dataType:'json',
                success:function(data){
                    if(data.success == "1"){
                        $(".err").html("该电话已注册过!").show();
                    }
                    else{
                        setCookie('userTel',userTel,7);
                        setCookie('psw',psw,7);
                        location.href = "person.html";
                    }
                   
                }
            })
        }

    })


}
regBtn();
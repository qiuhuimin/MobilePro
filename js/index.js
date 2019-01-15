 function init(){
       var  flag=true
       $(".top-search-menu-btn").bind("touchstart",function(event){
            if(flag){
                $(this).parent().siblings(".top-search-bar-menu-cover").css({width:'100%'});
                $('.top-search-menu-btn').parent().siblings(".top-search-bar-menu-cover").children(".top-search-bar-menu").animate({right:'0'},300);

                // console.log($(this))
       flag=false;
            }else{
                $(".top-search-menu-btn").parent().siblings(".top-search-bar-menu-cover").children(".top-search-bar-menu").animate({right:'-2.2rem'},300,function(){
                    $(".top-search-bar-menu-cover").css({width:'0%'});
                });
                flag=true;
                
            }
       })
   }
   init()
   //总结 首相点击让蒙版迅速出现再让小块做一个动画出现;之后二次点击 让小块做一个动画消失后 执行一个回调函数 再让蒙版消失
   //搜索框
function init1(){
    var  flag=true;
    // console.log($(".top-search-menu-btn1"));
    $(".top-search-menu-btn").eq(1).bind("touchstart",function(event){
         if(flag){
             $(this).parent().parent().siblings(".top-search-bar-menu-cover").css({width:'100%'});
             $('.top-search-menu-btn').parent().parent().siblings(".top-search-bar-menu-cover").children(".top-search-bar-menu").animate({right:'0'},300);
             $('.top-search-menu-btn').parent().siblings(".top-search-bar-menu-cover").css({top:'0.87rem'});
             console.log($(this))
    flag=false;
         }else{
             $(".top-search-menu-btn").parent().parent().siblings(".top-search-bar-menu-cover").children(".top-search-bar-menu").animate({right:'-2.2rem'},300,function(){
                 $(".top-search-bar-menu-cover").css({width:'0%'});
                 $('.top-search-menu-btn').parent().siblings(".top-search-bar-menu-cover").css({top:'1.87rem'});
             });
            
             flag=true;
             
         }
    })
}
init1();
   function search(){
    
    $(".fixed-group-zone").css({
        'zIndex':-10,
        'opacity':0
    });
    $(window).scroll(function(){
        var height=$(window).scrollTop();
        if(height > 180){
            // $(".fixed-group-zone").css('zIndex',10).show(2000);
            $(".fixed-group-zone").animate({
                'zIndex':10,
                'opacity':1
            },1500);
        }else{
            $(".fixed-group-zone").css({
                'zIndex':-10,
                'opacity':0
            });
        }
    });
   }
   search();
   
   //轮播图
   function banner(){
    var banner = $(".c-goods-store-bar"),
        bannerImg=$(".c-goods-store-scroll"),
        imgLi=$(".c-goods-store-item"),
        len=imgLi.size(),
        w=bannerImg.width(),
        sw=imgLi.width(),
        cur=0,
        timer
        function init(){
            var tota=(len+1)*sw;
            bannerImg.width(tota);
            bannerImg.append(imgLi.eq(0).clone());
            bannerImg.append(imgLi.eq(1).clone());
            bannerImg.append(imgLi.eq(2).clone());
            bannerImg.append(imgLi.eq(3).clone());
            bannerImg.append(imgLi.eq(4).clone());
            bannerImg.append(imgLi.eq(5).clone());
            bannerImg.append(imgLi.eq(6).clone());
            bannerImg.append(imgLi.eq(7).clone());
            bannerImg.append(imgLi.eq(8).clone());
            bannerImg.append(imgLi.eq(9).clone());
            bannerImg.append(imgLi.eq(10).clone());
            bannerImg.append(imgLi.eq(11).clone());
            bannerImg.append(imgLi.eq(12).clone());
            bannerImg.append(imgLi.eq(13).clone());
        }
        init();
        function autoplay(){
            timer= setInterval(function(){       
                if(cur == w ){
                    bannerImg.css({
                        left:0
                    })
                    cur = 1;
                }
                bannerImg.animate({
                    left:-cur
                });
                cur++;
            },16.7)
           
        }
        autoplay();   
   }
   banner();
   
   //倒计时
   function daojishi(){
    var h=$('.hour').get(0);
    var m=$('.minitues').get(0);
    var s=$('.seconds').get(0);
    
    var today=new Date();
 	var flag=today.getHours();
 	var t;
    var time;
     
    h.innerHTML="10";
 	m.innerHTML="00";
    s.innerHTML="00";
     
    function dao(){
        var now=new Date();
		var future=new Date("2022-11-3 18:59:59");
        time=future-now;
        var hour=parseInt(time/1000/60/60%24);
		var min=parseInt(time/1000/60%60);
        var sec=parseInt(time/1000%60);
        h.innerHTML=checkTime(hour);
		m.innerHTML=checkTime(min);
		s.innerHTML=checkTime(sec);
 		if(time<=0){
	 		clearInterval(t);
	 		h.innerHTML="00";
			m.innerHTML="00";
			s.innerHTML="00";
         }   
    }
    if(flag>=0){
		t=setInterval(dao,1000);
    }
    function checkTime(i){
        if(i<10){
            i="0"+i;
        }
        return i;
    }
}
daojishi(); 

function click(){
    $(".top-search-bar-inner-box").bind("touchstart",function(){
        location.href="Select.html";
        console.log("======");
    })
    
}
click();

function aaa(){
    $.ajax({
        type:"get",
        url:"php/index.php",
        dataType:"json",
        success:function(data){
            // console.log(data)
            if(data.success == 1){
                var list = data.list;
                fu(list);
                // fuu(list);
                fuu(list);
                fuuu(list);
                fad(list);
                fade(list);
                food(list);
                foods(list);
                baby(list);
                babys(list);
                life(list);
                lifes(list);
                healthy(list);
                healthys(list);
                wiring(list);
                wirings(list);
                goods(list);
                $('.add-cart-btn.c-goods-two-add-cart-btn').tap(function(){
                    var Str = $(this).attr("cur-id");
                    var username=getCookie("userTel");
                    if(handlerCookie()){
                        $.ajax({
                            url:"php/addshopinfo.php",
                            data:{
                                id:Str,
                                count:1,
                                username:username
                            },
                            dataType:"json",
                            success:function(data){
                                // console.log("data");
                            }
                        });
                        fadeInOut("已加入购物袋");
                    }else{
                        location.href="login.html";
                    }
                })
            }
     
        }
      
    })

}
aaa();

function fu(list){
    var cont = '';
for(var i=0;i<3;i++){
    cont += "<a href=\"\" class=\"c-seckill-box c-seckill-box-v2\">";
    cont += "<div class=\"c-seckill-img-box c-seckill-img-box-v2\">";
    cont += "<img src=\"images/"+ list[i].pic +"\" alt=\""+list[i].goods_info+"\">";
    cont += "</div>";
    cont += "<div class=\"c-seckill-goods-price c-seckill-goods-price-v2\">";
    cont += "<div class=\"c-seckill-goods-price-left c-seckill-goods-price-left-v2\">";
    cont += "<p>￥99</p>";
    cont += "<del>￥108</del>";
    cont += "</div>";
    cont += "</div>";
    cont += "<div class=\"c-seckill-title-box\">";
    cont += "<div class=\"c-seckill-goods-name\">"+list[i].goods_info+"</div>";
    cont += "</div>";
    cont += "</a>";
} 
$(".c-seckill-scoller.c-seckill-scoller-v2").html(cont);
}
function fuu(list){
    var cont='';
    for(var i=7;i<10;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.cosmetic").html(cont);
}
function fuuu(list){
    var cont="";
    for(var i=11;i<14;i++){
        cont+="<a href=\"##\"class=\"c-cornfield-goods-1-i\">";
        cont+="<img src=\"images/"+list[i].pic +"\" alt=\"\" ";
        cont=="style=\"width:1.4rem;height:1.4rem\">";
        cont+="</a>";
    }
    $(".c-cornfield-goods-1-3-box").eq(0).append(cont);
}
function fad(list){
    var cont="";
    for(var i=14;i<17;i++){
        cont+="<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right fashion\">";
        cont+="<div class=\"c-cornfield-goods-title\">"+list[i].goods_info +"</div>";
        cont+="<div class=\"c-cornfield-goods-slogan\">"+list[i].goods_name  +"</div>";
        cont+="<img src=\"images/"+list[i].pic+"\" alt=\"\" style=\"width:1.4rem;height: 1.4rem;\">";
        cont+="</a>";
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.fashion").html(cont);
}
function fade(list){
    var cont="";
    for(var i=17;i<19;i++){
        cont+="<a href=\"##\" class=\"c-cornfield-goods-bottom-item c-cornfield-border-right\">";
        cont+="  <div class=\'boxx\'>";
        cont+="<div class=\"c-cornfield-goods-title\">"+list[i].goods_info  +"</div>";
        cont+=" <div class=\"c-cornfield-goods-slogan\">"+list[i].goods_name +"</div>"
        cont+="</div>";
        cont+="<div class=\'boxx\'>"
        cont+="<img src=\"images/"+ list[i].pic+"\" alt=\"\" style=\"width: 1.4rem;height: 1.4rem;box-sizing: border-box!important;\"></div>"
        cont+="</a>";
    }
    $(".c-cornfield-goods-bottom-box.fashion").html(cont);
}
function food(list){
    var cont='';
    for(var i=19;i<22;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.food").html(cont);
}
function foods(list){
    var cont="";
    for(var i=23;i<26;i++){
        cont+="<a href=\"##\"class=\"c-cornfield-goods-1-i\">";
        cont+="<img src=\"images/"+list[i].pic +"\" alt=\"\" ";
        cont=="style=\"width:1.4rem;height:1.4rem\">";
        cont+="</a>";
    }
    $(".c-cornfield-goods-1-3-box.foods").eq(0).append(cont);
}
function baby(list){
    var cont='';
    for(var i=26;i<29;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.baby").html(cont);
}
function babys(list){
    var cont="";
    for(var i=29;i<31;i++){
        cont+="<a href=\"##\" class=\"c-cornfield-goods-bottom-item c-cornfield-border-right\">";
        cont+="  <div class=\'boxx\'>";
        cont+="<div class=\"c-cornfield-goods-title\">"+list[i].goods_info  +"</div>";
        cont+=" <div class=\"c-cornfield-goods-slogan\">"+list[i].goods_name +"</div>"
        cont+="</div>";
        cont+="<div class=\'boxx\'>"
        cont+="<img src=\"images/"+ list[i].pic+"\" alt=\"\" style=\"width: 1.4rem;height: 1.4rem;box-sizing: border-box!important;\"></div>"
        cont+="</a>";
    }
    $(".c-cornfield-goods-bottom-box.babys").html(cont);
}
function life(list){
    var cont='';
    for(var i=31;i<34;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.life").html(cont);
}
function lifes(list){
    var cont="";
    for(var i=34;i<36;i++){
        cont+="<a href=\"##\" class=\"c-cornfield-goods-bottom-item c-cornfield-border-right\">";
        cont+="  <div class=\'boxx\'>";
        cont+="<div class=\"c-cornfield-goods-title\">"+list[i].goods_info  +"</div>";
        cont+=" <div class=\"c-cornfield-goods-slogan\">"+list[i].goods_name +"</div>"
        cont+="</div>";
        cont+="<div class=\'boxx\'>"
        cont+="<img src=\"images/"+ list[i].pic+"\" alt=\"\" style=\"width: 1.4rem;height: 1.4rem;box-sizing: border-box!important;\"></div>"
        cont+="</a>";
    }
    $(".c-cornfield-goods-bottom-box.lifes").html(cont);
}
function healthy(list){
    var cont='';
    for(var i=36;i<39;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.healthy").html(cont);
}
function healthys(list){
    var cont="";
    for(var i=40;i<43;i++){
        cont+="<a href=\"##\"class=\"c-cornfield-goods-1-i\">";
        cont+="<img src=\"images/"+list[i].pic +"\" alt=\"\" ";
        cont=="style=\"width:1.4rem;height:1.4rem\">";
        cont+="</a>";
    }
    $(".c-cornfield-goods-1-3-box.healthys").eq(0).append(cont);
}
function wiring(list){
    var cont='';
    for(var i=43;i<46;i++){
        cont +='<a href=\"#\" class=\"c-cornfield-goods-top c-cornfield-border-right\">';
        cont +='<div class=\"c-cornfield-goods-title\">'+list[i].goods_info+'</div>';
        cont +='<div class=\"c-cornfield-goods-slogan\">'+list[i].goods_name +'</div>';
        cont +='<img src=\"images/'+list[i].pic+'\" alt=\"\" ';
        cont +='style=\"width:1.4rem;height: 1.4rem;\">';
        cont +='</a>';
    }
    $(".c-cornfield-goods-top-box.c-cornfield-border-bottom.wiring").html(cont);
}
function wirings(list){
    var cont="";
    for(var i=46;i<48;i++){
        cont+="<a href=\"##\" class=\"c-cornfield-goods-bottom-item c-cornfield-border-right\">";
        cont+="  <div class=\'boxx\'>";
        cont+="<div class=\"c-cornfield-goods-title\">"+list[i].goods_info  +"</div>";
        cont+=" <div class=\"c-cornfield-goods-slogan\">"+list[i].goods_name +"</div>"
        cont+="</div>";
        cont+="<div class=\'boxx\'>"
        cont+="<img src=\"images/"+ list[i].pic+"\" alt=\"\" style=\"width: 1.4rem;height: 1.4rem;box-sizing: border-box!important;\"></div>"
        cont+="</a>";
    }
    $(".c-cornfield-goods-bottom-box.wirings").html(cont);
}
function goods(list){
    var cont="";
    for(var i=48;i<64;i++){
        cont+=`
        <div class="c-goods-two-cart-item c-goods-two-cart-item-v2" style="background-color:#fafafa;border: 1px solid rgba(230,230,230,.5);">
            <a href="detail.html?data-Id=${list[i]['Id']}">
                <div class="img-box img-box-v2">
                    <img src="images/${list[i]['pic']}" alt="豌豆公主 2019年日历 1本 限量发售 12月24日国内仓发货"
                    style="width:1.51rem;height: 1.51rem">
                    
                        <div class="c-goods-two-cart-corner-left-img">
                            <img src="images/mmq/index120.webp" alt="">
                        </div>
                    
                </div>
            </a>
            <div class="c-goods-two-cart-slogan-box">
                    <strong class="c-goods-two-cart-slogan">${list[i]['goods_info']}</strong>
            </div>
            <div class="goods-name">
                <div>
                    <span style="color:#F45353;" class="c-goods-two-pop-tag">热销</span>
                    ${list[i]['goods_name']}
                </div>
            </div>
            <div class="price-box" style="color:#EA1414;">
                    ￥59
                <span class="c-goods-common-tag">${list[i]['goods_num']}折</span> 
            </div>
            <div class="shopbox">
                <div class="c-goods-two-cart-act-info"> 
                    <span class="c-goods-cart-two-praise">${list[i]['good_news']}</span>        
                </div>
                <div id="addCart" class="add-cart-btn c-goods-two-add-cart-btn" cur-id="${list[i]['Id']}">
                    <img src="img/index15.png" alt="加购"
                    style="width:0.42rem;height:0.42rem">
                </div>
            </div>
    </div>
        `
    }
    // $('.add-cart-btn').tap(function(){
    //     console.log(1232)
    // })
    $(".c-item.c-goods-two-cart.c-goods-two-cart-v2").append(cont); 
   
}
function fadeInOut(txt) {
    $(".coll-hid-box").css({
      display: 'block'
    }).animate({
      opacity: 1
    },1000).html(txt);
    setTimeout(function () {
      $(".coll-hid-box").animate({
          opacity: 0
        },2000,function(){
          $(".coll-hid-box").css({
            display: 'none'
          });
        })
    },2000);
  }
  function handlerCookie(){
	var userCookie=getCookie("userTel");
	var pwCookie=getCookie("psw");
	if (!(userCookie==null||pwCookie==null)) {
        console.log("有CookiSe");
        return true;
	}else{
        location.href="login.html";
        console.log("没有cookies");
        return false;
	}
}
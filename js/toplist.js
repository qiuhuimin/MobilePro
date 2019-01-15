$(function(){
    $(window).scroll(function(){
        var goodsT=$(".top-three"),
            t = $(window).scrollTop(),
            e=t/100;
            // console.log(t);
        // 背景图片的滤镜
        $(".bg-top").css({
            filter:"blur(0.1rem)"
        });
        if(e<0.01){
            $(".bg-top").css({
                filter: "blur(0px)"
            }) 
        }
        // console.log(t);
        // top-three的高度
        if(t>=295){
            goodsT.css({
                height:'0.88rem',
                zIndex:18
            });   
        }else{
            goodsT.css({
                height:'6.67rem',
                zIndex:13
            });
        }
        $(".selected-logo img").css({
           opacity: 1-0.25*e
        });    
    })
})
// 页面数据渲染
var str = location.href;
var index = str.indexOf("=")+1;

var Id = str.substring(index);
// console.log(typeid);
;(function(){
    $.ajax({
        type:"get",
        url:"php/toplist.php",
        data:"Id="+Id,
        dataType:"json",
        success:function(data){
           if(data.success=="1"){
                var goodlist=data.list;
                
                console.log(goodlist.length-1);
                var oldHtml="";
                for(var i=goodlist.length-1;i>2;i--){
                    oldHtml+=`
                        <li class="items">
                            <div class="list-index">${13-i}</div>
                            <div class="list-cont">
                                <div class="list-img">
                                    <img src="images/${goodlist[i]['pic']}" class='top-img' data-Id=${goodlist[i]['Id']}>
                                </div>
                                <div class="list-info">
                                    <a href="javascript:;">
                                        <p class="info-name">${goodlist[i]['goods_name']}</p>
                                        <p class="info-desc">${goodlist[i]['goods_info']}</p>
                                        <div class="list-price">
                                            <p class="info-price">￥${goodlist[i]['price']}</p>
                                            <div class="info-shopbag" cur-id='${goodlist[i]['Id']}'>
                                                <img src="img/shopbag.png" alt="">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                    `
                  
                }
                $(".cont-ul").html(oldHtml);
                var dataId=$(".top-img").attr("data-Id");
                $(".top-img").tap(function(){
                    location.href="detail.html?data-Id="+dataId;
                });

                $(".info-shopbag").tap(function(){
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
                        fade("已加入购物袋");
                    //    console.log("===");
                    }else{
                        location.href="login.html";
                    }
                });


                var second = "",first = "",third = "",allStr;
                second=`
                    <div class="hot-second">
                        <div class="hot-second-img">
                            <img src="images/${goodlist[1]['pic']}" alt="">
                        </div>
                        <div class="hot-second-font">
                            <p>${goodlist[1]['goods_name']}</p>
                            <p>￥${goodlist[1]['price']}</p>
                        </div>
                        <div class="hot-second-shop buy" buy-id='${goodlist[1]['Id']}'>
                            立即购买
                        </div>
                    </div>
                `
                first=`
                    <div class="hot-first">
                        <div class="hot-first-img">
                            <img src="images/${goodlist[0]['pic']}" alt="">
                        </div>
                        <div class="hot-first-font top-move-first">
                            <p>${goodlist[0]['goods_name']}</p>
                            <p>￥${goodlist[0]['price']}</p>
                        </div>
                        <div class="hot-first-shop buy" buy-id='${goodlist[0]['Id']}'>
                            立即购买
                        </div>
                    </div>
                `
                third=`
                    <div class="hot-third">
                        <div class="hot-third-img">
                            <img src="images/${goodlist[2]['pic']}" alt="">
                        </div>
                        <div class="hot-third-font top-move-third">
                            <p>${goodlist[2]['goods_name']}</p>
                            <p>￥${goodlist[2]['price']}</p>
                        </div>
                        <div class="hot-third-shop buy" buy-id='${goodlist[2]['Id']}'>
                            立即购买
                        </div>
                    </div>
                `
                allStr=second+first+third;
                $(".top-cont").html(allStr);
                $(".buy").tap(function(){
                    var buyId = $(this).attr("buy-id");
                    // console.log(buyId);
                    location.href="detail.html?Id="+buyId;
                });
               
           }
        }
    });
    
})()
// 加入购物袋
function fade(txt) {
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



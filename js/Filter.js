var type;//type为1就是新品为2 就是推荐
var serTitle=$(".close-ser");
var closeft=$(".cl-serft");
serTitle.hide();

// callBack函数
function dataCallBack(data){
    var oldHtml="";
    var num;
    var data=JSON.parse(data);
    if(data.success=="1"){
        var goodsList=data.list;
        num=goodsList.length;
        if(goodsList.length%2!=0){
            num = goodsList.length - 1;
        }
        for(var i=0;i<num;i+=2){
                oldHtml+=" <li class='goods-list'>";
                oldHtml+="<div>";
                oldHtml+="<a class='shopId' href='detail.html?data-Id="+goodsList[i].Id+"'>";
                oldHtml+="<div class='goods-img'>";
                oldHtml+=" <img src='images/"+goodsList[i].pic+"'>";
                oldHtml+="</div>";
                oldHtml+="<p class=\"goods-font1\">"+goodsList[i].goods_name+"</p>";  
                oldHtml+="<p class=\"goods-font2\">"+goodsList[i].goods_info+"</p>";  
                oldHtml+="<p class=\"goods-font3\">"+"￥"+goodsList[i].price+"</p>"; 
                oldHtml+="<div class=\"goods-font4\">"; 
                oldHtml+="<p>"+goodsList[i].good_news+"好评"+"</p>"; 
                oldHtml+="<p class='shopbag'><a href=\"javascript:;\"><img src=\"img/shopbag.png\"></a> </p>";           
                oldHtml+="</div>";
                oldHtml+="</a>";
                oldHtml+="</div>";

                oldHtml+="<div>";
                oldHtml+="<a class='shopId' href='detail.html?data-Id="+goodsList[i+1].Id+"'>";
                oldHtml+="<div class=\"goods-img\">";
                oldHtml+=" <img src='images/"+goodsList[i+1].pic+"'>";
                oldHtml+="</div>";
                oldHtml+="<p class=\"goods-font1\">"+goodsList[i+1].goods_name+"</p>";  
                oldHtml+="<p class=\"goods-font2\">"+goodsList[i+1].goods_info+"</p>";  
                oldHtml+="<p class=\"goods-font3\">"+"￥"+goodsList[i+1].price+"</p>"; 
                oldHtml+="<div class=\"goods-font4\">"; 
                oldHtml+="<p>"+goodsList[i+1].good_news+"好评"+"</p>"; 
                oldHtml+="<p class='shopbag'><a href=\"javascript:;\"><img src=\"img/shopbag.png\"></a> </p>";
                oldHtml+="</div>";
                oldHtml+="</a>";
                oldHtml+="</div>";
                oldHtml+="</li>";
        }
        $(".goods>ul").append(oldHtml);
        $(".shopbag").tap(function(){
            var Str= $(this).parent().find(".shopId").attr("href");
            var idx = Str.indexOf("=")+1;
            var shopId = Str.substr(idx);
            var username=getCookie("userTel");
            if(handlerCookie()){
                $.ajax({
                    url:"php/addshopinfo.php",
                    data:{
                        id:shopId,
                        count:1,
                        username:username

                    },
                    dataType:"json",
                    success:function(data){
                        // console.log("data");
                        
                    }
                });
                fade("已加入购物袋");
            }else{
                location.href="login.html";
            }
           
        });
    }
}
// 加入购物车
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
// 获取URL后面的参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  unescape(r[2]);
    return null;
}
// 获取到的搜索框的值
var keyVal=GetQueryString("key");
// 跳转页面的数据渲染
;(function(){ 
    $.ajax({
        type:"get",
        url:"php/Filter-getData.php",
        data:"key="+keyVal,
        datatype:"json",
        success:dataCallBack
    });
    serTitle.show();
    closeft.text(keyVal);
    $(".cl-img").tap(function(){
        location.href="Select.html"
    });
    // $(".shopbag").tap(function(){
    //     fade();
    //     }
    // );
})()
// 价格小箭头上下切换
;(function(){
    var sort = $(".intro-first div:last-child");
    var navbars2=$(".nav>div>span");//全部 公主说 视频  
    var option=$(".facet-list div:last-child");
    var price;
    var flag=true; 
    // 价格升序降序排列
    sort.tap(function(){
        if(flag){
             $(this).children("i").removeClass("desc").addClass("asc");
             price=0;//升序
             console.log(price);
             flag=false;
        }else{
            $(this).children("i").removeClass("asc").addClass("desc");
            price=1;
            flag=true;
        }
        $(".goods ul").html("");
        $.ajax({
            type:"get",
            url:"php/Filter-price.php",
            data:{
                price:price,
                key:keyVal
            },
            datatype:"json",
            success:dataCallBack
        });    
    });
    // 销量 推荐 新品 点击样式
    $(".intro-first").on("tap","span",function(e){
        if(!$(e.target).hasClass("weight")){
            $(e.target).addClass("weight").parent().siblings().children().removeClass("weight");
        }
    });
    // 公主说 全部 视频点击样式
    $(".nav").on("tap",navbars2,function(e){
        if(!$(e.target).hasClass("sp-border")){
            $(e.target).addClass("sp-border").parent().siblings().children().removeClass("sp-border");
        }
    });
    //活动 自营 品牌直销点击样式
    $(".facet-list").on("tap","span",function(e){
        if(!$(e.target).hasClass("it-after")){
            $(e.target).addClass("it-after").parent().siblings().children().removeClass("it-after");
        }
    });
    // 背景遮罩层
    $(".option").hide();
    $(".mask").hide();
    var flag2=true;
    option.tap(function(){
        if(flag2){
            $(".option").show();
            $(".mask").show();
            $("body").addClass("facet-visibel");
            $(this).children().addClass("expand");
            console.log($(this).children());
            flag2=false;
        }else{
            $(".option").hide();
            $(".mask").hide();
            $("body").removeClass("facet-visibel");
            $(this).children().removeClass("expand");
            flag2=true;
        }
    });
    // option的item
    var flag3=true;
    $(".option-item").on("tap","p",function(e){
        if(!$(e.target).hasClass("op-active")&&flag3){
            $(e.target).parent().addClass("op-active");
            flag3=false;
        }else{
            $(e.target).parent().removeClass("op-active");
            flag3=true;
        }
    });
})()
// 点击销量进行筛选===销量由高到低
;(function(){
    var sales=$(".intro-first div:nth-child(2)");
    sales.tap(function(){
        $(".goods ul").html("");
        $.ajax({
            type:"get",
            url:"php/Filter-num.php",
            datatype:"json",
            success:dataCallBack
        });  
    });
})()
// 点击推荐进行筛选
;(function(){
    var advise=$(".intro-first div:nth-child(1)");    
    advise.tap(function(){
        type=2;
        $(".goods ul").html("");
        $.ajax({
            type:"get",
            url:"php/Filter-advise.php",
            data:"type="+type,
            datatype:"json",
            success:dataCallBack
        }); 

    });
})()
// 点击新品进行新品筛选
;(function(){
    var newpro=$(".intro-first div:nth-child(3)");
    console.log(newpro);
    newpro.tap(function(){
        type=1;
        $(".goods ul").html("");
        $.ajax({
            type:"get",
            url:"php/Filter-advise.php",
            data:"type="+type,
            datatype:"json",
            success:dataCallBack
        });  
    });
})()
;(function(){
    $(".car-btn").tap(function(){
        location.href="shopcart.html";
        console.log("====");
    });
})()

    





























// 滚动加载
// ;(function(){
//     var winH=window.screen.availHeight;
//     var goods=$(".all-goods");
//     var flag=true;
//     var page=0;
//     // 窗口高度+滚动条滚动高度>goods底部高度到网页顶部的距离，就加载下一页
//     $(window).scroll(function(){
//         let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);//获取滚动条的滚动距离
//         var goodsTop=goods.height()+goods.offset().top-800;
//         console.log(goodsTop-200);
//         if(goodsTop<=winH+scrollTop&&flag){
//             page++;
//             flag=false;
//             $.ajax({
//                 type:"get",
//                 url:"../php/Filter-getData.php",
//                 data:"page="+page,
//                 datatype:"json",
//                 success:function(data){
//                     var oldHtml="";
//                     var data=JSON.parse(data);
//                     if(data.success=="1"){
//                         var goodsList=data.list;
//                         console.log(goodsList);
//                         for(var i=0;i<goodsList.length;i+=2){
//                            oldHtml+=" <li class='goods-list'>";
//                            oldHtml+="<div>";
//                            oldHtml+="<a href='#'>";
//                            oldHtml+="<div class='goods-img'>";
//                            oldHtml+=" <img src='images/"+goodsList[i].pic+"'>";
//                            oldHtml+="</div>";
//                            oldHtml+="<p class=\"goods-font1\">"+goodsList[i].goods_name+"</p>";  
//                            oldHtml+="<p class=\"goods-font2\">"+goodsList[i].goods_info+"</p>";  
//                            oldHtml+="<p class=\"goods-font3\">"+goodsList[i].price+"</p>"; 
//                            oldHtml+="<div class=\"goods-font4\">"; 
//                            oldHtml+="<p>"+goodsList[i].good_news+"</p>"; 
//                            oldHtml+="<p></p>";
//                            oldHtml+="</div>";
//                            oldHtml+="</a>";
//                            oldHtml+="</div>";

//                            oldHtml+="<div>";
//                            oldHtml+="<a href='#'>";
//                            oldHtml+="<div class=\"goods-img\">";
//                            oldHtml+=" <img src='images/"+goodsList[i+1].pic+"'>";
//                            oldHtml+="</div>";
//                            oldHtml+="<p class=\"goods-font1\">"+goodsList[i+1].goods_name+"</p>";  
//                            oldHtml+="<p class=\"goods-font2\">"+goodsList[i+1].goods_info+"</p>";  
//                            oldHtml+="<p class=\"goods-font3\">"+goodsList[i+1].price+"</p>"; 
//                            oldHtml+="<div class=\"goods-font4\">"; 
//                            oldHtml+="<p>"+goodsList[i+1].good_news+"</p>"; 
//                            oldHtml+="<p></p>";
//                            oldHtml+="</div>";
//                            oldHtml+="</a>";
//                            oldHtml+="</div>";
//                            oldHtml+="</li>";
//                         }
//                         $(".goods>ul").append(oldHtml);
//                         flag=true;
//                     }
//                 }
//             });
//         }
//     });
// })()


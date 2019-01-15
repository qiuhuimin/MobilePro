(function ren(){
    var conts = $(".new-cheap"),
        goodsUl = $(".new-cheap ul"),
        flag = true,
        page = 0,
        winH = $(window).height();

    // conts本身的高度 + conts头部上的高度
    // var contsTop = conts.clientHeight+conts.offsetTop;
    // var contsTop = conts.offset().top+conts.height();
    $(function(){
        $.ajax({
            url:"php/beauty.php",
            type:"get",
            data:"page="+page,
            dataType:"json",
            success:function(data){
                if(data.success == "1"){
                    var goodsList = data.list;
                    var str = "";
                    for(var i = 0;i<6;i++){
                        str += "<li>"
                        str += "<a href='detail.html?Id="+goodsList[i].Id+"' class='cheap-main'>";
                        str += "<div class='new-img-box'>";
                        str += "<div class='new-img'>";
                        str += "<img src='images/"+goodsList[i].pic+"' alt=''>"
                        str += "</div>";
                        str += "<div class='top-ico'>";
                        str += "<img src='images/lz/top-ico.jpg' alt=''>";
                        str += "</div>";
                        str += "<div class='bottom-ico'>";
                        str += "<img src='images/lz/bottom-ico.png' alt=''>";
                        str += "</div>";
                        str += "</div>";
                        str += "<div class='cheap-tit'>"+goodsList[i].goods_info+"</div>";
                        str += " <div class='cheap-pri-box'>";
                        str += " <span class='cheap-pri'>￥"+parseInt(goodsList[i].price)+"</span>";
                        str += "<span class='cheap-box'>新人价</span>";
                        str += "</div>";
                        str += '</a>';
                        str += "<div class='cheap-car'>";
                        str += "<div class='car-txt'>加入购物车</div>";
                        str += "<div class='car-img'>"
                        str += "<img src='images/lz/shop-car.png' alt=''>"
                        str += "</div>";
                        str += "</div>";
                        str +='</li>';
                    }
                    goodsUl.append(str);
                     
                    // flag= true;
                    $(".cheap-cont li").on("touchstart",".cheap-car",function(e){
                        e.stopImmediatePropagation();
                        if($(e.target)){
                            e.stopImmediatePropagation();
                            var t=$(this).parent("li").find(".cheap-main").attr("href");
                            var num=t.indexOf("=")+1;
                            var dataId = t.substring(num);
                            console.log(dataId);
                            var username = getCookie("userTel");
                            console.log(username);
                            handlerCookie();
                            if(handlerCookie()){
                                $.ajax({
                                    url:"php/addshopinfo.php",
                                    data:{
                                        id:dataId,
                                        count:1,
                                        username:username
                                    },
                                    dataType:"json",
                                    success:function(data){
                                        console.log("data");

                                    }
                                });
                                $(".noc-box").css({
                                    display: 'block'
                                  }).animate({
                                    opacity: 1
                                  },2000);
                                
                                setTimeout(function () {
                                $(".noc-box").animate({
                                    opacity: 0
                                    },3000,function(){
                                    $(".noc-box").css({
                                        display: 'none'
                                    });
                                    })
                                },3000);
                              

                            }else{
                                console.log("没有cookie");
                            }
                          
                        }
                    })
                }
                else{       
                    console.log("拿不到数据");
                }
            }
        });
    })

    scro();

})();

// 滚动加载
function scro(){
    var conts = $(".new-cheap"),
    goodsUl = $(".new-cheap ul"),
    flag = true,
    page = 0,
    winH = $(window).height();

    $(window).scroll(function(){
        var contsTop = conts.offset().top+conts.height();
        var sTop = $(window).scrollTop();
        if((winH+sTop> contsTop) && flag){
            console.log("====");
            flag = false;
            page++;
            console.log(page);
            $.ajax({
                url:"php/beauty.php",
                type:"get",
                data:"page="+page,
                dataType:"json",
                success:function(data){
                    console.log(data.success);
                    if(data.success == "1"){
                        var goodsList = data.list;
                        var str = "";
                        for(var i = 0;i<goodsList.length;i++){
                            str += "<li>"
                            str += "<a href='detail.html?Id="+goodsList[i].Id+"' class='cheap-main'>";
                            str += "<div class='new-img-box'>";
                            str += "<div class='new-img'>";
                            str += "<img src='images/"+goodsList[i].pic+"' alt=''>"
                            str += "</div>";
                            str += "<div class='top-ico'>";
                            str += "<img src='images/lz/top-ico.jpg' alt=''>";
                            str += "</div>";
                            str += "<div class='bottom-ico'>";
                            str += "<img src='images/lz/bottom-ico.png' alt=''>";
                            str += "</div>";
                            str += "</div>";
                            str += "<div class='cheap-tit'>"+goodsList[i].goods_info+"</div>";
                            str += " <div class='cheap-pri-box'>";
                            str += " <span class='cheap-pri'>￥"+parseInt(goodsList[i].price)+"</span>";
                            str += "<span class='cheap-box'>新人价</span>";
                            str += "</div>";
                            str += '</a>';
                            str += "<div class='cheap-car'>";
                            // str += "<div class='cheap-car' data-id='"+goodsList[i].type_id+"'>";
                            str += "<div class='car-txt'>加入购物车</div>";
                            str += "<div class='car-img'>"
                            str += "<img src='images/lz/shop-car.png' alt=''>"
                            str += "</div>";
                            str += "</div>";
                            str +='</li>';
                        }
                        
                        goodsUl.append(str);
                        flag= true;
                        $(".cheap-cont li").on("touchstart",".cheap-car",function(e){
                            e.stopImmediatePropagation();
                            if($(e.target)){
                                e.stopImmediatePropagation();
                                var t=$(this).parent("li").find(".cheap-main").attr("href");
                                var num=t.indexOf("=")+1;
                                var dataId = t.substring(num);
                                console.log(dataId);
                                handlerCookie();
                                var username = getCookie("userTel");
                                
                                console.log(username);
                                if(handlerCookie()){
                                    $.ajax({
                                        url:"php/addshopinfo.php",
                                        data:{
                                            id:dataId,
                                            count:1,
                                            username:username
                                        },
                                        dataType:"json",
                                        success:function(data){
                                            console.log(data);

                                        }
                                    });
                                    $(".noc-box").animate({
                                        opcity:1
                                    },1000,function(){
                                        $(".noc-box").animate({
                                            opcity:0
                                        },1000)
                                    })

                                }else{
                                    console.log("没有cookie");
                                }
                              
                            }
                        })
                    }
                    else{       
                        console.log("拿不到数据");
                    }
                }
            });
        }

    })
}
// 判断cookie有无
function handlerCookie(){
	var userCookie=getCookie("userTel");
	var pwCookie=getCookie("psw");
	if (!(userCookie==null||pwCookie==null)) {
        // console.log("有CookiSe");
        return true;

	}else{
        location.href="login.html";
        // console.log("没有cookies");
        return false;


	}
}

// 购物车点击事件
function car(ob,loca){
    ob.tap(function(){
        // console.log("事件触发");
        // handlerCookie();
        if(handlerCookie()){
            location.href=loca;
        }else{
            console.log("hhhhhhhhh");
        }

    })
}
car($(".me"),"person.html");
car($(".shop"),"shopcart.html");
var allgoods=$('.sc-goods-item');
//请求数据
var user = getCookie("userTel");
// console.log(user);
//判断是否有用户登录
if(!user){
    location.href='./login.html';
}else{
    Ajax(user);
}
var  hellocar=$('.hellocar'),  //广告
     helloback= hellocar.children('.helloback');  //广告btn
 // *头部广告*
    helloback.click(function(){
    hellocar.remove();
    })
function shopcart(){
    // ***************购物车************
    var checkAll=$('.sc-hcheck'),   //全选按钮，
    itemcheck=$('.sc-goods-checked input'),  //商品按钮
    len=itemcheck.size(), //商品按钮的数量
    edit=$('.s-edit-btn'), //编辑 
    metabl=$('.sc-metabl'),
    inpchecked=$("[type=checkbox]"),
    sdel=$('.scdel'),
    size1=$('.sc-goods').size(),
    flag=true;
   
    edit.click(function(){
    metabl.toggleClass('metablhide');
    sdel.toggleClass('sc-del');
    if(flag){
        flag=false;
        edit.html('完成');
    }else{
        flag=true;
        edit.html('编辑');
    }

    })
    // ===============按钮区============
    //*购物车初始化默认全选*
    ;(function(){
        $('input[type=checkbox]').prop('checked',true);
        tocount();
        allmoney();
    })();
    //*一级按钮*
    checkAll.click(function(){
        itemcheck.prop('checked',$(this).prop("checked"));
        tocount();
        allmoney();
    })
    //*二级按钮*
    itemcheck.click(function(){
    var cur=0;
    itemcheck.each(function(index,demEle){
        if($(demEle).prop('checked')){
            cur++;
        }
    })
    if(cur==len){
        checkAll.prop("checked",true)
    }else{
        checkAll.prop("checked",false)
    }
    tocount();
    allmoney();
    })
    //=================购物车功能区============= */

    var 
    carbg=$(".scqhide"),                     //弹框背景
    scdbox=$(".scd-box"),                   //弹框 
    adel=scdbox.find(".sc-godel"),     //弹框删除键
    acancal=scdbox.find(".sc-goback"),  //弹框返回键
    itemdel=$(".itemdel"),             //
    minus=$(".sc-count-box .minus"),    //商品数量减
    add= $(".sc-count-box .add");       //商品数量
    // *购物车为空执行的代码*
    // *单件删除功能*  
    sdel.click(function(){
        var goodste=$(this).parents('.sc-goods'),
            size1=0,
            size1=$('.sc-goods').size(),
            goodsId=$(this).attr('data-id');
            carbg.addClass('scshow');
            scdbox.addClass('scdshow');
        adel.click(function(){
            size1--;
            goodste.remove();
            itemdel();
            enptycar();
        });
        acancal.click(function(){
            carbg.removeClass('scshow');
            scdbox.removeClass('scdshow');
        })
        //删除商品请求的ajax
        function itemdel(){
            $.ajax({
                type:'GET',
                url:'php/shopdel.php',
                data:{
                    Id:goodsId
                },
                dataType:"json",
                success:function(data){
                    if(data.success=='1'){
                        carbg.removeClass('scshow');
                        scdbox.removeClass('scdshow');
                        tocount();
                        allmoney();
                        enptycar();
                    }
                }
            });
        }

    })
    //增减商品数量
    ;(function(){
        minus.click(function(){
            var sinum=$(this).parent().children(".txt"),
                ipt=$(this).parents('.sc-goods').find('.sc-goods-checked input'),
                cor=parseInt(sinum.html());
                if(cor!=1){
                    cor--;
                };
                sinum.html(cor);
                ipt.attr('data-scount',cor);
                tocount();
                allmoney();
        });
        add.click(function(){
            var sinum=$(this).parent().children(".txt"),
                ipt=$(this).parents('.sc-goods').find('.sc-goods-checked input'),
                cor=parseInt(sinum.html());
                cor++;
                sinum.html(cor);
                ipt.attr('data-scount',cor);
                allmoney();
                tocount();
        });
    })();
  
    //总价
    function allmoney(){
    var money=0;
        itemcheck.each(function(){
            if($(this).prop('checked')){
                var count = $(this).attr('data-scount');
                var price = $(this).attr('data-num');
                money+=parseFloat(count)*parseFloat(price);
            }
        });
        $('.zmoney').html(money);
        $('.sp-facount .fnum b').html(money);
        $('.enforce b').html(money);
    };
    // *总数*
    function tocount(){
    var total_count = 0;    //zongshu
        itemcheck.each(function(index,demEle){
            if($(demEle).prop("checked")){
                var num =  parseInt($(this).parents('.sc-goods').find('.txt').html());
                    total_count+=num;
            }
        });
        $(".counter-btn").html('结算郑州保税（'+total_count+')');
        $(".sp-count").html('郑州保税仓共'+total_count+'件商品');

    }
    //++++++++结算页+++++++++
    var counter=$('.counter-btn'); //购物车结算按钮；
        
        counter.click(function(){
                var num=0;
                inpchecked.each(function(index,dem){
                    if($(dem).prop('checked')){
                        num++;
                    }
                })
                if(num>=1){
                    goodsIdAjax();
                    
                };
                
        });
    // 返回购物车
    var paygocar=$('.s-goblack');

    paygocar.click(function(e){
        e.preventDefault();
        delpayinfo();
    })

}
// 购物车页面请求ajax函数
function Ajax(user){
    $.ajax({
        type:'GET',
        url:"./php/shopcart.php",
        data: {username:user},
        dataType:"json",
        success:function(data){
            var datas=data.list;
            if(data.success=='1'){
                var str="";
                for(var i=0;i<datas.length;i++){  
                    str+=`
                    <div class="sc-goods">
                        <div class="sc-goods-checked">
                            <input type="checkbox" data-num=${datas[i]['price']} data-scount=${datas[i]['goodscount']} data-id=${datas[i]['Id']}> 
                        </div>
                        <div class="sc-goods-main">
                            <a href="###" class="sc-goodsimg"><img src="images/${datas[i]['pic']}" alt="" ></a>
                            <div class="sc-goods-info">
                                <a href="###" class="sc-goods-name">${datas[i]['goods_info']}</a>
                                <div class="sc-goods-row">
                                    <div class="sc-chands-info">郑州报税仓</div>
                                </div>
                                <div class="sc-meta-box">
                                    <div class="sc-metabl">
                                        <div class="sc-price">￥<span>${datas[i]['price']}</span></div>
                                    </div>
                                    <div class="sc-metabr">
                                        <div class="sc-count-box">
                                            <span class="minus">-</span>
                                            <span class="txt">${datas[i]['goodscount']}</span>
                                            <span class="add">+</span>
                                        </div>
                                    </div>
                                    <div class="scdel sc-del" data-id=${datas[i]['Id']}>删除</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` 
                } 
                allgoods.html(str);
                  shopcart();
            }else{
                enptycar();
            }    
        }
    });
}
 // 当购物车为空时，执行的代码
function enptycar(){ 
    console.log('购物车为空');
    var size1=$('.sc-goods').size(),
        edit=$('.s-edit-btn'),
        sclist=$('.sc-list'),
        enshow=$('.sc-enpty');
    if(size1==0){
        enshow.addClass('enptyshow');
        sclist.addClass('sclisthide');
        edit.html('');
    } 
};  
//点击结算将商品Id保存到数据库paygoods表里
function goodsIdAjax(){
    var itemcheck=$('.sc-goods-checked input');
    itemcheck.each(function(index,dem){
        if($(dem).prop('checked')){
            var goodsId=$(this).attr('data-id'),
                count=$(this).attr('data-scount');
            $.ajax({
                type:'GET',
                url:"php/paygoods.php",
                data:{
                    Id:goodsId,
                    count:count,
                    username:user
                },
                dataType:"json",
                success:function(data){
                    if(data.success=="1"){
                    }else{
                    }
                }
            })
        }
    })
    topayAjax();
}
 // 结算页面请求数据库paygoods表里的数据
 function topayAjax(){
    var  product=$('.sp-product-wrapper');
         checkpay=$('.checkpay'),   //点击结算显示的付款页面；
         gouwu=$(".gouwu");
            $.ajax({
                type:'GET',
                data:{username:user},
                url:"php/getpayinfo.php",
                dataType:"json",
                success:function(data){
                    var str="";
                    for(var i=0;i<data.length;i++){ 
                        str+=`
                            <div class="sp-product">
                                <div class="sp-pro-img">
                                <img src="images/${data[i]['pic']}" alt="">
                                </div>
                                <div class="sp-pro-desc">
                                    <div class="sp-pro-title">
                                        ${data[i]['goods_info']}
                                    </div>
                                    <div class="sp-pro-price">
                                        <san class="sp-dj">￥<b>${data[i]['price']}</b></san>
                                        <san class="sp-num"> x <b> ${data[i]['goodscount']} </b></san>
                                    </div>
                                </div>
                            </div>  
                        ` 
                    }
                    product.html(str);
                    gouwu.css({display:"none"});
                    checkpay.addClass('checkpayshow');
                }
            });
        
    } 
// 点击支付界面的返回键删除支付界面中的商品
function delpayinfo(){
    $.ajax({
        type:"GET",
        url:"php/delpayinfo.php",
        data:{
            username:user
        },
        dataType:'json',
        success:function(data){
            if(data=='1'){
                location.href="shopcart.html";
            }
            
        }
    })
}
// 地址代码
!function () {
	var $target = $('#J_Address2');
	$target.citySelect({
		provance: '北京',
		city: '朝阳区',
		area: '管庄'
	});

	$target.on('click', function (event) {
		event.stopPropagation();
		$target.citySelect('open');
	});

	$target.on('done.ydui.cityselect', function (ret) {
		$(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
	});
}();
//确认支付显示的页面
var fixbtn=$('.sp-fixbtn');  //确定支付按钮
var paymonery=$('.sz-paymonery'); //支付页面
fixbtn.click(function(){ 
    var itemcheck=$('.sc-goods-checked input'); //购物车选中的商品
    paymonery.removeClass("sz-payshow");
    $.ajax({
        type:"GET",
        url:"php/selfcenter.php",
        data:{
            username:user
        },
        dataType:'json',
        success:function(data){
            itemcheck.each(function(index,dem){
                if($(dem).prop('checked')){
                    var goodsId=$(this).attr('data-id');
                    $.ajax({
                        type:'GET',
                        url:"php/shopAlldel.php",
                        data:{
                            Id:goodsId,
                            username:user
                        },
                        dataType:"json",
                        success:function(data){

                        }
                    })   
                }
            })
        }
    })
    
})   
//点击修改地址
var address=$('.sp-address'), //付款页面显示的地址；
    addressbox=$('.sp-addressbox'),
    checkadd=$('.checkadd'),   //付款页点击添加地址显示的页面
    lefticon=$('.sa-lefticon'), //点击修改地址显示的修改地址页面
    addaddr=$('.add-addr'),  //点击添加地址显示的页面
    flexview=$('.g-flexview'), // 修改地址的页面
    flexviewhidebtn=$('.flexviewhide'),
    cellinput=$('.cell-input'),
    checkaddhidebtn=$('.checkaddhide'), //点击添加地址显示的页面隐藏
    saveaddrbtn=$('.saveaddrbtn'), // 地址保存按钮
    sywaddressbox=$('.syw-addressinfo'); //添加地址页面数据渲染的盒子
    // *点击付款页的修改地址，显示添加地址页面
    addressbox.click(function(){
        xunranaddresscount();
    })
    checkaddhidebtn.click(function(){
        checkadd.addClass('checkaddshow');
    })
    //*添加地址
    addaddr.click(function(){
        var id='999';
        flexview.removeClass('updatashow');
        cellinput.val("");
        addressAjax(id); 
    })
    flexviewhidebtn.click(function(){
        flexview.addClass('updatashow')
    })
    // 地址保存按钮 将数据从数据库渲染到页面点击付款显示的页面
     // ++++++++点击保存将修改的地址或者添加的地址保存到数据库，
    // 在请求数据渲染到添加页面上的函数。
    function addressAjax(id){
        var saveaddrbtn=$('.saveaddrbtn'),
            flexview=$('.g-flexview');
        saveaddrbtn.click(function(){
            var truename=$('.cell-input').eq(0).val(),
                userTel=$('.cell-input').eq(1).val(),
                userrigion =$('.cell-input').eq(2).val(),
                datailaddr=$('.cell-input').eq(3).val();
            $.ajax({
                type:"GET",
                url:"php/setaddr.php",
                data:{
                    truename:truename,
                    userTel:userTel,
                    userrigion:userrigion,
                    datailaddr:datailaddr,
                    username:user,
                    Id:id
                },
                // dataType:'json',
                success:function(data){
                    if(data.success!= 0){
                        xunranaddresscount();
                        flexview.addClass('updatashow');
                    }
                    
                }
            })  
        })
            
    }
    // 点击保存或者点击支付页的地址将数据渲染到添加地址页面上；
    function xunranaddresscount(){
        var sywaddressbox=$('.syw-addressinfo'),
            flexview=$('.g-flexview'); // 修改地址的页面
        $.ajax({
            type:"GET",
            url:"php/getaddr.php",
            data:{
                username:user,
            },
            dataType:'json',
            success:function(data){
                if(data.success=='1'){ 
                    var datas=data.list;
                    var str='';
                    for(var i=0;i<datas.length;i++){
                    str+=`
                        <div class="info-meta">
                            <div class="sa-lefticon" data-id="${datas[i]['Id']}">
                            </div>
                            <div class="sa-edit">
                                <span>${datas[i]['truename']}</span>
                                <span>${datas[i]['userTel']}</span>
                                <p class="weaken">
                                    <span>${datas[i]['userregion']}</span> <span>${datas[i]['detailaddr']}</span>
                                </p>
                            </div> 
                            <div class="sa-checked" data-id="${datas[i]['Id']}">
                                    <input type="radio" name="radio" value="1" class="adr-radio" data-id="${datas[i]['Id']}">
                            </div>
                        </div> 
                       `
                    }
                    sywaddressbox.html(str);
                    flexview.addClass('updatashow');
                    andaddress();
                }
                
            }
        })
        checkadd.removeClass('checkaddshow');

    }
    // *******8当数据渲染到添加地址页面时，对渲染的数据做处理的函数====+++_____
    // ++++++++++修改当前地址处理函数++++++++++=
    function andaddress(){
        var saredio=$('.adr-radio'),
            longbtn=$(".long-btn"),
            address=$('.sp-address'),
            checkadd=$('.checkadd'),   //付款页点击添加地址显示的页面
            addressbox=$('.sp-addressbox'),
            lefticon=$('.sa-lefticon');
            saredio.click(function(){
                $(this).addClass('sa-rading').parents('.info-meta').siblings().find('.adr-radio').removeClass('sa-rading');
            })
            //*修改地址*
            lefticon.click(function(){
               var  id=$(this).attr('data-id');
                    flexview.removeClass('updatashow');
                    addressAjax(id);
            })
            longbtn.click(function(){
                checkadd.addClass('checkaddshow');
                saredio.each(function(index,dem){
                    if($(dem).prop('checked')){
                        var  id=$(this).attr('data-id');
                        console.log(id);
                        $.ajax({
                            type:'GET',
                            url:'php/getaddrzf.php',
                            data:{Id:id,username:user},
                            dataType:'json',
                            success:function(data){
                                if(data.success=='1'){
                                    var str='';
                                    var list=data.list;
                                    str=`
                                    <div class="sp-address" data-id="${list[0]['Id']}">
                                        <div class="sp-ad-icon">
                                            <img src="img/sad1.png" alt="">
                                        </div>
                                        <div class="sp-ad-cont">
                                            <div class="sp-username">
                                                <span>${list[0]['truename']}</span>
                                                <span>${list[0]['userTel']}</span>
                                            </div>
                                            <div class="sp-userad">
                                                <span>${list[0]['userregion']}</span> 
                                                <span>${list[0]['detailaddr']}</span> 
                                            </div>
                                        </div>
                                        <div class="sp-aicon-rig">
                                            <img src="img/sadr.png" alt="">
                                        </div>
                                    </div>
                                    `
                                    addressbox.html(str); 
                                }
                            }
                        })
                    }
                })
            })
    }
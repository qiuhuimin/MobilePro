
(function () {
    // 获取http传过来的索引
    var name, value;
    var str = location.href; //获取到整个地址
    var num = str.indexOf("#")
    str = str.substr(num + 1); //取得num+1后所有参数
    // tab切换
    var navs = $('.tab nav div'),
        orderbox = $('.orderbox .order-info');

    // 把接受过来的索引放进去
    navs.eq(str).addClass('active');
    orderbox.eq(str).show().siblings().hide();

    // 点击标题tab切换
    navs.tap(function () {
        $(this).addClass('active').siblings().removeClass('active');
        orderbox.eq($(this).index()).show().siblings().hide();
        location.hash = $(this).index();
    })
})()
// 渲染的商品数据
;
(function () {
    var username = getCookie('userTel');
    if(username){
        $.ajax({
            url: '../php/selfcenterinfo.php',
            type: 'get',
            data: {
                username: username
            },
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data.success == '1') {
                    var cont = '';
                    var list = data.list;
                        for (var i = 0; i < list.length; i++) {
                            cont += `<li>
                            <div class="list-head">
                                <div>${list[i].goods_name}旗舰店</div>
                                <div>待付款</div>
                            </div>
                            <div class="list-info">
                                <div class="list-info-left">
                                    <img src="../images/${list[i].pic}" alt="">
                                </div>
                                <div class="list-info-right">
                                    <p>
                                        <span>${list[i].goods_info}</span>
                                        <span>￥${list[i].price}</span>
                                    </p>
                                    <p>
                                        <span>100g</span>
                                        <span>x${list[i].goodscount}</span>
                                    </p>
                                    <p>
                                        <span>豌豆无忧购</span>
                                        <span>七天退换</span>
                                    </p>
                                </div>
                            </div>
                            <div class="list-zj">
                                <div>
                                    <span>共${list[i].goodscount}件商品</span>
                                    <p>
                                        <span>合计：￥${list[i].goodscount * list[i].price}</span>
                                        <span>(含运费￥8.00)</span>
                                    </p>
                                </div>
                            </div>
                            <div class="list-sh">
                                <div>更多</div>
                                <div>取消订单</div>
                            </div>
                        </li>`;
                        }
                        $('.fk ul').append(cont);
                        $('.fk .empty-order').hide();
                }else{
                    console.log('没数据');
                }
            }
        })
    }
})()
// 全部订单
;
(function () {
    var username = getCookie('userTel');
    // var username = 'cs';
    if(username){
        $.ajax({
            url: '../php/dq.php',
            type: 'get',
            data: {
                username: username
            },
            dataType: 'json',
            success: function (data) {
                if (data.success = '1') {
                    var cont = '';
                    var list = data.list;
                    
                    for (var i = 0; i < 5; i++) {
                        var num = parseInt(Math.random()*10);
                        cont += `<li>
                        <div class="list-head">
                            <div>${list[i].goods_name}旗舰店</div>
                            <div>交易成功</div>
                        </div>
                        <div class="list-info">
                            <div class="list-info-left">
                                <img src="../images/${list[i].pic}" alt="">
                            </div>
                            <div class="list-info-right">
                                <p>
                                    <span>${list[i].goods_info}</span>
                                    <span>￥${list[i].price}</span>
                                </p>
                                <p>
                                    <span>100g</span>
                                    <span>x${num}</span>
                                </p>
                                <p>
                                    <span>豌豆无忧购</span>
                                    <span>七天退换</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-zj">
                            <div>
                                <span>共${num}件商品</span>
                                <p>
                                    <span>合计：￥${num * list[i].price}</span>
                                    <span>(含运费￥8.00)</span>
                                </p>
                            </div>
                        </div>
                        <div class="list-sh">
                            <div>更多</div>
                            <div>查看物流</div>
                            <div>卖了换钱</div>
                            <div>追加评价</div>
                        </div>
                    </li>`;
                    }
                    $('.qd ul').append(cont);
                    $('.qd .empty-order').hide();
                }
            }
        })
    }
    
})()
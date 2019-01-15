'use strict';

(function () {
    // 获取http传过来的索引
    var name, value;
    var str = location.href; //获取到整个地址
    var num = str.indexOf("#");
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
    });
})()
// 渲染的商品数据
;
(function () {
    var username = getCookie('userTel');
    if (username) {
        $.ajax({
            url: '../php/selfcenterinfo.php',
            type: 'get',
            data: {
                username: username
            },
            dataType: 'json',
            success: function success(data) {
                console.log(data);
                if (data.success == '1') {
                    var cont = '';
                    var list = data.list;
                    for (var i = 0; i < list.length; i++) {
                        cont += '<li>\n                            <div class="list-head">\n                                <div>' + list[i].goods_name + '\u65D7\u8230\u5E97</div>\n                                <div>\u5F85\u4ED8\u6B3E</div>\n                            </div>\n                            <div class="list-info">\n                                <div class="list-info-left">\n                                    <img src="../images/' + list[i].pic + '" alt="">\n                                </div>\n                                <div class="list-info-right">\n                                    <p>\n                                        <span>' + list[i].goods_info + '</span>\n                                        <span>\uFFE5' + list[i].price + '</span>\n                                    </p>\n                                    <p>\n                                        <span>100g</span>\n                                        <span>x' + list[i].goodscount + '</span>\n                                    </p>\n                                    <p>\n                                        <span>\u8C4C\u8C46\u65E0\u5FE7\u8D2D</span>\n                                        <span>\u4E03\u5929\u9000\u6362</span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class="list-zj">\n                                <div>\n                                    <span>\u5171' + list[i].goodscount + '\u4EF6\u5546\u54C1</span>\n                                    <p>\n                                        <span>\u5408\u8BA1\uFF1A\uFFE5' + list[i].goodscount * list[i].price + '</span>\n                                        <span>(\u542B\u8FD0\u8D39\uFFE58.00)</span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class="list-sh">\n                                <div>\u66F4\u591A</div>\n                                <div>\u53D6\u6D88\u8BA2\u5355</div>\n                            </div>\n                        </li>';
                    }
                    $('.fk ul').append(cont);
                    $('.fk .empty-order').hide();
                } else {
                    console.log('没数据');
                }
            }
        });
    }
})()
// 全部订单
;
(function () {
    var username = getCookie('userTel');
    // var username = 'cs';
    if (username) {
        $.ajax({
            url: '../php/dq.php',
            type: 'get',
            data: {
                username: username
            },
            dataType: 'json',
            success: function success(data) {
                if (data.success = '1') {
                    var cont = '';
                    var list = data.list;

                    for (var i = 0; i < 5; i++) {
                        var num = parseInt(Math.random() * 10);
                        cont += '<li>\n                        <div class="list-head">\n                            <div>' + list[i].goods_name + '\u65D7\u8230\u5E97</div>\n                            <div>\u4EA4\u6613\u6210\u529F</div>\n                        </div>\n                        <div class="list-info">\n                            <div class="list-info-left">\n                                <img src="../images/' + list[i].pic + '" alt="">\n                            </div>\n                            <div class="list-info-right">\n                                <p>\n                                    <span>' + list[i].goods_info + '</span>\n                                    <span>\uFFE5' + list[i].price + '</span>\n                                </p>\n                                <p>\n                                    <span>100g</span>\n                                    <span>x' + num + '</span>\n                                </p>\n                                <p>\n                                    <span>\u8C4C\u8C46\u65E0\u5FE7\u8D2D</span>\n                                    <span>\u4E03\u5929\u9000\u6362</span>\n                                </p>\n                            </div>\n                        </div>\n                        <div class="list-zj">\n                            <div>\n                                <span>\u5171' + num + '\u4EF6\u5546\u54C1</span>\n                                <p>\n                                    <span>\u5408\u8BA1\uFF1A\uFFE5' + num * list[i].price + '</span>\n                                    <span>(\u542B\u8FD0\u8D39\uFFE58.00)</span>\n                                </p>\n                            </div>\n                        </div>\n                        <div class="list-sh">\n                            <div>\u66F4\u591A</div>\n                            <div>\u67E5\u770B\u7269\u6D41</div>\n                            <div>\u5356\u4E86\u6362\u94B1</div>\n                            <div>\u8FFD\u52A0\u8BC4\u4EF7</div>\n                        </div>\n                    </li>';
                    }
                    $('.qd ul').append(cont);
                    $('.qd .empty-order').hide();
                }
            }
        });
    }
})();
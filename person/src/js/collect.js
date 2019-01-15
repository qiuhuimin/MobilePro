// 我的收藏Tab切换
;
(function () {
    var spans = $('nav div span'),
        cont = $('.tab').children(); //收藏的商品内容
    spans.eq(0).addClass('ac');
    $('nav div').tap(function () {
        spans.removeClass('ac');
        spans.eq($(this).index()).addClass('ac');
        cont.eq($(this).index()).show().siblings().hide();
        console.log($(this).index());
    })
})();
(function () {
    $.ajax({
        url: '../php/seleshop.php',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var list = data.list;
            var cont = '';
            for (var i = 0; i < list.length; i++) {
                cont += `<section>
                <div class="list-left">
                    <img src="../images/${list[i].pic}" alt="">
                </div>
                <div class="list-right">
                    <div class="list-info">
                        <p>${list[i].goods_info}</p>
                        <span>￥${list[i].price}</span>
                    </div>
                    <div class="addshopcar">
                        <button>加入购物车</button>
                    </div>
                </div>
            </section>`;
            }
            $('.listbox').html(cont);
        }
    })
})()
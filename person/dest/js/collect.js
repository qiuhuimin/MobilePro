'use strict';

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
    });
})();
(function () {
    $.ajax({
        url: '../php/seleshop.php',
        type: 'get',
        dataType: 'json',
        success: function success(data) {
            var list = data.list;
            var cont = '';
            for (var i = 0; i < list.length; i++) {
                cont += '<section>\n                <div class="list-left">\n                    <img src="../images/' + list[i].pic + '" alt="">\n                </div>\n                <div class="list-right">\n                    <div class="list-info">\n                        <p>' + list[i].goods_info + '</p>\n                        <span>\uFFE5' + list[i].price + '</span>\n                    </div>\n                    <div class="addshopcar">\n                        <button>\u52A0\u5165\u8D2D\u7269\u8F66</button>\n                    </div>\n                </div>\n            </section>';
            }
            $('.listbox').html(cont);
        }
    });
})();
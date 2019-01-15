'use strict';

// 爆款黑科技
;
(function () {
  $.ajax({
    url: 'php/dq.php',
    typt: 'get',
    dataType: 'json',
    success: function success(data) {
      iscrkj(data, 0, 5, '.kj');
      iscrkj(data, 5, 10, '.xk');
      iscrkj(data, 10, 15, '.cd');
      myswi(data, 15, 19, '.newshop', {
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.new .pagination',
          type: 'fraction'
        }
      });
      $('.swiper-slide .moods-cont').eq(0).html(hot(data, 19, 24));
      $('.swiper-slide .moods-cont').eq(2).html(hot(data, 19, 24));
      $('.swiper-slide .moods-cont').eq(1).html(hot(data, 24, 29));
      $('.swiper-slide .moods-cont').eq(3).html(hot(data, 24, 29));
      // sellshop(data);
    }
  });
})()

// 搜索框
;
(function () {
  $(window).scroll(function () {
    var h = $(window).scrollTop();
    var sH = parseInt($('.search').css('height'));
    if (h > sH) {
      $('.fsearch').show();
    } else {
      $('.fsearch').hide();
    }
  });
})();
//轮播图
function fun(clname, opt) {
  var clname = new Swiper(clname, opt);
}
// 顶部轮播图
fun('.banner', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.bannerbox .swiper-pagination',
    clickable: true
  }
});
// 人气榜
fun('.moodsbanner', {
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.moods-title .pagination',
    type: 'fraction'
  }
});
// 新奇体验
fun('.newness-banner', {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  pagination: {
    el: '.newness .pagination',
    type: 'fraction'
  }
})

//滚动加载
;
(function () {
  var shopcont = $('.sell-shops'),
      winH = $(window).height(),
      flag = true,
      page = 1;
  $(window).scroll(function () {
    var scrH = $(window).scrollTop();
    var shopH = parseInt(shopcont.offset().top + shopcont.height());
    if (scrH + winH >= shopH && flag) {
      page++;
      flag = false;
      $.ajax({
        url: 'php/dq.php',
        type: 'get',
        data: {
          page: page
        },
        dataType: 'json',
        success: function success(data) {
          var cont = "";
          if (data.success == "1") {
            var list = data.list;
            for (var i = 0; i < list.length; i++) {
              cont += '<div class="sell-item">\n      <a href="detail.html?data-id=' + list[i].Id + '">\n          <div class="sell-item-img">\n              <img src="images/' + list[i].pic + '" alt="">\n          </div>\n          <div class="sell-item-info">\n              <p>' + list[i].goods_name + '</p>\n              <p>' + list[i].goods_info + '</p>\n          </div>\n      </a>\n      <div class="sell-item-bottom">\n          <div class="sell-item-bottom-left">\n              <p>\uFFE5' + list[i].price + '</p>\n              <p>' + list[i].good_news + '\u597D\u8BC4</p>\n          </div>\n          <div class="sell-addshopcar" data-id=' + list[i].Id + '>\n              <img src="images/dq/jdq-12.png" alt="">\n          </div>\n      </div>\n  </div>';
            }
          }
          shopcont.append(cont);
          addshop();
          flag = true;
        }
      });
    }
  });
})();

// 左右回弹效果
function myscroll(cla, opt) {
  var len = $('.hot-cont ul').eq(0).children().length;
  var liw = parseInt($('.hot-cont ul li').css('width'));
  var ulw = liw * len;
  $('.hot-cont ul').css({
    width: ulw
  });
  var cla = new IScroll(cla, {
    scrollX: true,
    scrollY: false
  });
};

function iscrkj(data, qnum, jnum, cla) {
  var cont = "";
  if (data.success == "1") {
    var list = data.list;
    for (var i = qnum; i < jnum; i++) {
      // var price = parseInt(${list[i].price});
      cont += '<li>\n          <div class="hot-items">\n              <a href="detail.html?data-id=' + list[i].Id + '">\n                  <div class="hot-img">\n                      <img src="images/' + list[i].pic + '" alt="">\n                  </div>\n                  <div class="hot-text">\n                      <p class="hot-info">' + list[i].goods_name + '</p>\n                      <p class="hot-desc">' + list[i].goods_info + '</p>\n                      <p class="hot-price">\xA5' + list[i].price + '</p>\n                  </div>\n              </a>\n          </div>\n      </li>';
    }
    $(cla).find('ul').html(cont);
    myscroll(cla);
  }
}

function myswi(data, qnum, jnum, cla, opt) {
  var cont = "";
  if (data.success == "1") {
    var list = data.list;
    for (var i = qnum; i < jnum; i++) {
      cont += '<div class="swiper-slide">\n      <a href="detail.html?data-id=' + list[i].Id + '">\n          <div class="new-img">\n              <img src="images/' + list[i].pic + '" alt="">\n          </div>\n          <div class="new-text">\n              <p>' + list[i].goods_name + '</p>\n              <p>' + list[i].goods_info + '</p>\n              <p>\uFFE5' + list[i].price + '</p>\n          </div>\n      </a>\n  </div>';
    }
    $(cla).find('.swiper-wrapper').html(cont);
    fun(cla, opt);
  }
}

function hot(data, qnum, jnum) {
  var cont = "";
  if (data.success == "1") {
    var list = data.list;
    var num = 0;
    for (var i = qnum; i < jnum; i++) {
      num++;
      cont += '<li>\n    <a href="detail.html?data-id=' + list[i].Id + '">\n        <div class="moods-pm">' + num + '</div>\n        <div class="moods-img">\n            <img src="images/' + list[i].pic + '" alt="">\n        </div>\n        <div class="moods-info">\n            <h2>' + list[i].goods_info + '</h2>\n            <div class="moods-info-bottom">\n                <span>' + list[i].price + '\u5143</span>\n                <div class="addshop">\n                    <img src="images/dq/jdq-12.png" alt="">\n                </div>\n            </div>\n        </div>\n    </a>\n</li>';
    }
  }
  return cont;
}

function sellshop(data) {
  var cont = "";
  if (data.success == "1") {
    var list = data.list;
    var num = 0;
    for (var i = 0; i < 4; i++) {
      num++;
      cont += '<div class="sell-item">\n      <a href="detail.html?data-id=' + list[i].Id + '">\n          <div class="sell-item-img">\n              <img src="images/' + list[i].pic + '" alt="">\n          </div>\n          <div class="sell-item-info">\n              <p>' + list[i].goods_name + '</p>\n              <p>' + list[i].goods_info + '</p>\n          </div>\n      </a>\n      <div class="sell-item-bottom">\n          <div class="sell-item-bottom-left">\n              <p>\uFFE5' + list[i].price + '</p>\n              <p>' + list[i].good_news + '\u597D\u8BC4</p>\n          </div>\n          <div class="sell-addshopcar data-id=' + list[i].Id + '">\n              <img src="images/dq/jdq-12.png" alt="">\n          </div>\n      </div>\n  </div>';
    }
  }
  $('.sell-shops').append(cont);
}
function addshop() {
  $('.sell-shops').on('tap', '.sell-addshopcar', function (e) {
    $('.shoptx').show();
    var username = getCookie('userTel');
    e.stopImmediatePropagation();
    var shopid = $(this).attr('data-id');
    $.ajax({
      url: 'php/addshopinfo.php',
      type: 'get',
      data: {
        id: shopid,
        num: 1,
        username: username
      },
      dataType: 'json',
      success: function success(data) {
        if (data.success != '0') {
          setTimeout(function () {
            $('.shoptx').hide();
          }, 1000);
        }
      }
    });
  });
}
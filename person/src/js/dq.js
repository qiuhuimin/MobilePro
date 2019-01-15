// 爆款黑科技
;
(function () {
  $.ajax({
    url: 'php/dq.php',
    typt: 'get',
    dataType: 'json',
    success: function (data) {
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
          disableOnInteraction: false,
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
  })
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
  })
})()
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
    disableOnInteraction: false,
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
        success: function (data) {
          var cont = "";
          if (data.success == "1") {
            var list = data.list;
            for (var i = 0; i < list.length; i++) {
              cont += `<div class="sell-item">
      <a href="detail.html?data-id=${list[i].Id}">
          <div class="sell-item-img">
              <img src="images/${list[i].pic}" alt="">
          </div>
          <div class="sell-item-info">
              <p>${list[i].goods_name}</p>
              <p>${list[i].goods_info}</p>
          </div>
      </a>
      <div class="sell-item-bottom">
          <div class="sell-item-bottom-left">
              <p>￥${list[i].price}</p>
              <p>${list[i].good_news}好评</p>
          </div>
          <div class="sell-addshopcar" data-id=${list[i].Id}>
              <img src="images/dq/jdq-12.png" alt="">
          </div>
      </div>
  </div>`;
            }
          }
          shopcont.append(cont);
          addshop();
          flag = true;
        }
      })
    }
  })
})()



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
      cont += `<li>
          <div class="hot-items">
              <a href="detail.html?data-id=${list[i].Id}">
                  <div class="hot-img">
                      <img src="images/${list[i].pic}" alt="">
                  </div>
                  <div class="hot-text">
                      <p class="hot-info">${list[i].goods_name}</p>
                      <p class="hot-desc">${list[i].goods_info}</p>
                      <p class="hot-price">¥${list[i].price}</p>
                  </div>
              </a>
          </div>
      </li>`;
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
      cont += `<div class="swiper-slide">
      <a href="detail.html?data-id=${list[i].Id}">
          <div class="new-img">
              <img src="images/${list[i].pic}" alt="">
          </div>
          <div class="new-text">
              <p>${list[i].goods_name}</p>
              <p>${list[i].goods_info}</p>
              <p>￥${list[i].price}</p>
          </div>
      </a>
  </div>`;
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
      cont += `<li>
    <a href="detail.html?data-id=${list[i].Id}">
        <div class="moods-pm">${num}</div>
        <div class="moods-img">
            <img src="images/${list[i].pic}" alt="">
        </div>
        <div class="moods-info">
            <h2>${list[i].goods_info}</h2>
            <div class="moods-info-bottom">
                <span>${list[i].price}元</span>
                <div class="addshop">
                    <img src="images/dq/jdq-12.png" alt="">
                </div>
            </div>
        </div>
    </a>
</li>`;
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
      cont += `<div class="sell-item">
      <a href="detail.html?data-id=${list[i].Id}">
          <div class="sell-item-img">
              <img src="images/${list[i].pic}" alt="">
          </div>
          <div class="sell-item-info">
              <p>${list[i].goods_name}</p>
              <p>${list[i].goods_info}</p>
          </div>
      </a>
      <div class="sell-item-bottom">
          <div class="sell-item-bottom-left">
              <p>￥${list[i].price}</p>
              <p>${list[i].good_news}好评</p>
          </div>
          <div class="sell-addshopcar data-id=${list[i].Id}">
              <img src="images/dq/jdq-12.png" alt="">
          </div>
      </div>
  </div>`;
    }
  }
  $('.sell-shops').append(cont);
  
}
function addshop(){
  $('.sell-shops').on('tap','.sell-addshopcar',function(e){
    $('.shoptx').show();
    var username = getCookie('userTel');
    e.stopImmediatePropagation();
    var shopid = $(this).attr('data-id');
    $.ajax({
      url:'php/addshopinfo.php',
      type:'get',
      data:{
        id:shopid,
        num:1,
        username:username
      },
      dataType:'json',
      success:function(data){
        if(data.success != '0'){
          setTimeout(function(){
            $('.shoptx').hide();
          },1000)
        }
      }
    })
  })
}
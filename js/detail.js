//================详情页跳转：每个商品详细信息
;
(function () {
  var dataid = location.href;
  var num = dataid.indexOf("=");
  var Id = dataid.substr(num + 1);
  var user=getCookie('userTel');
  var flag = true;
  var collect = $('.coll-inn-box').children();
  collect.eq(1).hide();
  //===========收藏
  $(".collect-box").tap(function () {
        if(flag){
          collect.eq(1).show().siblings().hide();
        }else{
          collect.eq(0).show().siblings().hide();
        }
        flag =! flag;
    $.ajax({
      url: 'php/addshops.php',
      type: 'get',
      data: {
        Id: Id
      },
      dataType: 'json',
      success: function (data) {
        console.log(123)
      }
    })
  })
  //============传递购物车Id
  $(".addSure").tap(function(){
    var count=$(".ipt").val();

    if(handlerCookie()){
        $.ajax({
          url: 'php/addshopinfo.php',
          type: 'get',
          data: {
            id: Id,
            count:count,
            username:user
          },
          dataType: 'json',
          success: function (data) {
            if(data.success!="0"){
              shopFade();
              console.log(1)
            }
          }
        })
    }
  })

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
  //=========查看更多

  $(".rank-head .rank-cont2").tap(function(){
    location.href="toplist.html?Id="+Id;
  })

  //  =========评论区图片渲染
  $.ajax({
    url: 'php/detail2.php',
    type: 'get',
    data: {
      Id: Id
    },
    dataType: 'json',
    success: function (data) {
      if (data.success == "1") {
        var goodsDetail = data.list;
        var typeId = goodsDetail[0].type_id;
        
        //排行版内容前五名信息图片
        $.ajax({
          url: 'php/detail3.php',
          type: 'get',
          dataType: 'json',
          data: 'typeId=' + typeId,
          success: function (data) {
            // console.log($(".rank-pic"));
            if (data.success == "1") {
              var rankPic = "";
              var goodslist = data.list;
              for (var i = 0; i < 5; i++) {
                rankPic += "<li><img src='images/" + goodslist[i].pic + "' alt=''></li>";
              }
              $(".rank-pic").append(rankPic);
            }
          }
        })

        //===========swiper部分随机拿数据
        var swiperHtml = "";
        var htmlCont = "";
        for (var i = 0; i < 3; i++) {
          swiperHtml += "<div class='swiper-slide'>";
          swiperHtml += "<div class='detail-swiper-img'>";
          swiperHtml += "<img src='images/" + goodsDetail[0].pic + " ' alt=''>";
          swiperHtml += "</div></div>";
        }
        $(".swiper-wrapper").html(swiperHtml);
        detailSwiper();

        //===========价格 介绍部分随机拿数据

        htmlCont += "<p class='goods_slogan'>" + goodsDetail[0].goods_name + "</p>";
        htmlCont += "<h1 class='goods_name'>" + goodsDetail[0].goods_info + "</h1>";

        htmlCont += "<div class='price-box'>";
        htmlCont += "<span class='final_price'>￥" + goodsDetail[0].price + "</span>";
        htmlCont += "<span class='origin_price'>￥" + goodsDetail[0].sale + "</span>";
        htmlCont += "<span class='discont_tag'>新人价</span>";
        htmlCont += "</div>";

        $(".goods_box").html(htmlCont);

        // ============用户名评论图片信息
      } else {
        console.log(0)
      }
    }
  });

})()



//===========ajax:大家都在逛:
function back(num, obj) {
  $(function () {
    $.ajax({
      url: "php/detail.php",
      type: 'get',
      dataType: 'json',
      data: "size=" + num,
      success: callback
    });
  })

  function callback(data) {
    if (data.success == "1") {
      var goodslist = data.list;

      var htmlStr = "";
      for (var i = 0; i < goodslist.length; i++) {
        htmlStr += "<li>";
        htmlStr += "<a href='detail.html?Id=" + goodslist[i].Id + "'>";
        htmlStr += "<div class='brand-item'>";

        htmlStr += "<div class='list-img' id='like-img'>";
        htmlStr += "<img src= 'images/" + goodslist[i].pic + "' alt=''>";
        htmlStr += "</div>";

        htmlStr += "<div class='list-cont'>";
        htmlStr += "<p>" + goodslist[i].goods_info + "</p>";
        htmlStr += "<div id='like-price'>";
        htmlStr += "<span class='price'>￥" + goodslist[i].price + "</span>";
        htmlStr += "<span class='disTag'>新人价</span>";
        htmlStr += "</div>";

        htmlStr += "<div class='guess-goods-act-info'>";
        htmlStr += "<p>" + goodslist[i].good_news + "好评</p>";
        htmlStr += "<div>";
        htmlStr += "<img src='images/details/goods-like1.png' alt=''>";
        htmlStr += "</div></div>";

        htmlStr += "<div class='new'><img src='images/details/detail_new1.png' alt=''></div>";
        htmlStr += "</div>";

        htmlStr += "</div></a></li>"
      }
      obj.append(htmlStr);
    }
  }
}
back(20, $(".allList"));

//==============ajax：品牌 同类
function call(num, obj) {
  $(function () {
    $.ajax({
      url: "php/detail.php",
      type: 'get',
      dataType: 'json',
      data: "size=" + num,
      success: callback
    });
  })

  function callback(data) {
    if (data.success == "1") {
      var goodslist = data.list;
      var htmlStr = "";
      for (var i = 0; i < goodslist.length; i++) {
        htmlStr += "<li>";
        htmlStr += "<a href='detail.html?id=" + goodslist[i].Id + "'>";
        htmlStr += "<div class='brand-item'>";

        htmlStr += "<div class='list-img' id='like-img'>";
        htmlStr += "<img src= 'images/" + goodslist[i].pic + "' alt=''>";
        htmlStr += "</div>";

        htmlStr += "<div class='list-cont'>";
        htmlStr += "<p>" + goodslist[i].goods_info + "</p>";
        htmlStr += "<div id='like-price'>";
        htmlStr += "<span class='price'>￥" + parseInt(goodslist[i].price) + "</span>";
        htmlStr += "<span class='disTag'>新人价</span>";
        htmlStr += "</div>";

        htmlStr += "</div></a></li>"
      }
      obj.prepend(htmlStr);
    }
  }
}

call(3, $('.choose-tab-inn1'));
// call(3, $('.choose-tab-inn2'));
call(4, $('.brand-rank-cont'));

//===============评论区
function talk(num){
  $.ajax({
    url: 'php/detail.php',
    type: 'get',
    dataType: 'json',
    data: "size=" + num,
    success: function (data) {
      // console.log($(".rank-pic"));
      if (data.success == "1") {
        console.log(1)
        var postHtml = "";
        var goodslist = data.list;
        for (var i = 0; i < 5; i++) {
          postHtml += "<li class='post-item'><a href='#'><div>";
          postHtml += "<div class='post-pic'><img src='images/" + goodslist[i].pic + "'alt=''></div>";
          postHtml += "<div class='user-pic'><img src='images/" + goodslist[i].pic + "' alt=''><span>哎呀草莓</span></div>";
          postHtml += "  </div></a></li>";
        }
        $(".post-box .post-list").append(postHtml);
        detailIscroll('.wapper');
      }
    }
  })


}
talk(5)

//=============swiper
function detailSwiper() {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}
// detailSwiper();

//==============tab Iscroll：品牌 同类
function detailIscroll(val) {
  var myscroll = new IScroll(val, {
    scrollX: true,
    snap: 'li'
  })
}

detailIscroll('.brand-wapper');
detailIscroll('.video-wapper');


//==========评论
function showTalk() {
  var talkBut = $(".post-talk .talk-show-but"),
    talkCont = $(".post-talk .talk-cont"),
    talkList = $(".talk-cont-item");

  talkCont.children().hide();
  talkList.eq(0).show();
  talkList.eq(1).show();

  talkBut.tap(function () {
    var val = talkBut.html();
    // console.log(val)
    if (val == '收起评论') {
      talkCont.children().hide();
      talkList.eq(0).show();
      talkList.eq(1).show();
      talkBut.html("展开评论");
    } else {
      talkCont.children().show();
      talkBut.html("收起评论");
    }
  });

}
showTalk();

// ===============品牌入口
function brandChoose(val, tab, fn) {
  var choDot = $(val).children(),
    choTab = $(tab).children();

  choDot.eq(0).addClass("choActive");
  choTab.eq(0).show().siblings().hide();

  choDot.tap(function () {
      choDot.eq($(this).index()).addClass("choActive").siblings().removeClass("choActive");
      choTab.eq($(this).index()).show().siblings().hide();
      if(fn){
        fn();
      }
  })
}

brandChoose(".choose-dot", ".choose-tab", call(3, $('.choose-tab-inn2'))); //用户选择
brandChoose(".goods-dot", ".goods-tab"); //详情

// ============新人活动
function hasHid() {
  var activeBox = $(".detail .active-box");
  var hasHidBox = $(".has-hid-box");
  var back = $(".has-hid-box .back");

  activeBox.tap(function () {
      hasHidBox.css({
        display: 'block'
      }).animate({
        opacity: 1
      },1000);

    $("body").css("overflow", "hidden")
  })
  back.tap(function () {
    hasHidBox.animate({
      opacity: 0
    },1000,function(){
      hasHidBox.css({
        display: 'none'
      });
    })
    $("body").css("overflow", "auto")
  })
}
hasHid();


//收藏淡入淡出效果

function fade(txt) {
  $(".coll-hid").css({
    display: 'block'
  }).animate({
    opacity: 1
  },2000).html(txt);

  setTimeout(function () {
    $(".coll-hid").animate({
        opacity: 0
      },3000,function(){
        $(".coll-hid").css({
          display: 'none'
        });
      })
  },3000);
}

function shopFade(){
    $(".shop-hid").css({
      display: 'block'
    }).animate({
      opacity: 1
    },2000);

    setTimeout(function () {
      $(".shop-hid").animate({
          opacity: 0
        },3000,function(){
          $(".shop-hid").css({
            display: 'none'
          });
        })
    },3000);
}

//===========购物车加减

function shopCarNum(){                 
  var reduce=$(".reduce"),
      add=$(".add"),
      ipt=$(".ipt"),
      num=ipt.val();

      $(".shopCar").tap(function(){
        $(".shopcar-hid").show();
        $(".addbody").show();
       
      })
      $(".shopcar-back").tap(function(){
        $(".shopcar-hid").hide();
        $(".addbody").hide();
      })
      //=========加减功能
      reduce.tap(function(){
        ipt.removeAttr("disabled","disabled");
        ipt.val(num--);

        ipt.attr("value",num)
        if(num<1){
          num=1;
          ipt.attr("disabled","disabled");
          alert("不能在少了");
        }
      });
      add.tap(function(){
        ipt.removeAttr("disabled","disabled");
        ipt.val(num++);
        ipt.attr("value",num)
        if(num>21){
          num=20;
          ipt.attr("disabled","disabled");
          alert("每人限购20件");
        }
      })
}
shopCarNum();




 
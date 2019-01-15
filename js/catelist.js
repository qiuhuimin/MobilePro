var app = new IScroll('.app', {
    mouseWheel: false
});
// var contentL = new IScroll('.content-L', {

//    mouseWheel:false
// });
// var contentR = new IScroll('.content-R', {

//     mouseWheel:true
//  });
var app1 = new IScroll('.app-1', {

    mouseWheel: true
});
var flagship = new IScroll('.flagship', {

    mouseWheel: true
});
var brand = new IScroll('.brand', {

    mouseWheel: true
});
//  va  r content = new IScroll('.content', {
//     // probeType: 2,
//     mouseWheel:true
//  });
// content.on('scroll',function(){
//     contentR = new IScroll('.content-R', {

//         mouseWheel:true
//      });
//      console.log(123)
// })

// tab
;
(function () {
    $('.content-L li').eq(0).css("borderLeft", "5px solid red").siblings().css({
        "borderLeft": "5px solid transparent"
    });
    $('.content-L li').eq(0).children("p").eq(1).css({
        "color": "red",
        "fontWeight": 550
    })
    $('.content-L').on('tap', 'li', function () {
        var index = $(this).index();
        $(this).css("borderLeft", "5px solid red").siblings().css({
            "borderLeft": "5px solid transparent"
        });
        $(this).children(".pp").css({
            "color": "red",
            "fontWeight": 550
        });
        $(this).siblings("li").children(".pp").css({
            "color": "black",
            "fontWeight": 400
        });

        $('.content-R>li').eq($(this).index()).show().siblings().hide();
        // $('.content-R').children("li").eq(index).index()).show().siblings().hide();
        // $(this).show().siblings().hide();
    })
})();;
(function () {
    $(".head-nav li").eq(0).css({
        "borderBottom": "2px solid black"
    }).siblings().css({
        "borderBottom": "2px solid transparent"
    });

    $('.head-nav').on('tap', 'li', function () {
        var index = $(this).index();
        $('.cont>div').eq($(this).index()).show().siblings().hide();

        $(this).css({
            "borderBottom": "2px solid black"
        }).siblings().css({
            "borderBottom": "2px solid transparent"
        });

        var flagship = new IScroll('.flagship', {

            mouseWheel: true
        });
        var brand = new IScroll('.brand', {

            mouseWheel: true
        });
    })
})();



//   ajax
;
(function () {
    $.ajax({
        url: 'php/catelist.php',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            if (data.success == "1") {
                var list = data.list;
                fu(list, 32, 43, 0)
                fu(list, 43, 54, 1)
                fu(list, 54, 70, 2)
                fu(list, 70, 78, 3)
                fu(list, 78, 82, 4)
                fu(list, 82, 100, 5)
                fu(list, 100, 103, 6)
                fu(list, 103, 110, 7)
                fu(list, 110, 117, 8)
                fu(list, 117, 122, 9)
                fu(list, 122, 129, 10)
                fu(list, 129, 135, 11)
                fu(list, 135, 142, 12)
                fu(list, 142, 145, 13)
                fu(list, 145, 150, 14)
                fu(list, 150, 155, 15)
                fu(list, 155, 159, 16)
                fu(list, 159, 161, 17)
                fu(list, 161, 164, 18)
                fu(list, 164, 172, 19)
                fu(list, 172, 183, 20)
                fu(list, 183, 192, 21)
                fu(list, 192, 203, 22)
                fu(list, 203, 209, 23)
                fu(list, 209, 217, 24)
                fu(list, 217, 224, 25)
                fu(list, 224, 226, 26)
                fu(list, 226, 229, 27)
                fu(list, 229, 233, 28)
                fu(list, 233, 235, 29)
                fu(list, 235, 236, 30)
                fun(list, 0, 32)
            }
        }
    })
})()

function fu(list, snum, endnum, q) {
    var cont = " ";
    for (var i = snum; i < endnum; i++) {
        cont += `
     <div>
         <a href="###">
     <img src="images/${list[i].img}" alt="">
        <p>${list[i].goodsname}</p>
        </a>
     </div>`;
    }
    $('.goods-item').eq(q).append(cont);
}

function fun(list, snum, endnum) {
    var cont = " ";
    for (var i = snum; i < endnum; i++) {
        cont += `
        <div>
           <div>
              <img src="images/${list[i].img}" alt="">
              </div>
                <div>
                       <p>${list[i].goodsname}</p>
                <p><span>热销</span>${list[i].explain}</p>
                <p>${list[i].price}</p>
                <p>${list[i].reputably}</p>
            </div>
        </div>`;
    }
    $('.dp-shops').append(cont);
}
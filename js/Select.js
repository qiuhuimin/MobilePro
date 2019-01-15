// 点击关闭按钮清空搜索
;(function(){
    var res=$(".result");
    var ipt=$(".ser-ipt");
    var serBtn=$(".btn-ser button");
    var oldStr;
    var flag=true;
    res.hide();
    ipt.focus(function(){
        res.show();
        // ipt.val(" ");
    });
    // $(".clear-all").tap(function(){
    //     ipt.text(" ");
    // });
    ipt.keyup(function(){
        var val=ipt.val();
        if(val.length==0){
            res.html(" ");
            flag=false;
            return;
        }else{
            flag=true;
        }
        if(val==oldStr){
            return;
        }
        oldStr=val;
        function serAjax(){
            $.ajax({
                type:"get",
                url:"php/Select.php",
                data:"key="+val,
                success:function(data){
                    var data=JSON.parse(data);
                    if(data.success=="1"&&flag){
                        res.html("");
                        var list=data.list;
                        var htmlStr=" ";
                        for(var i=0;i<list.length;i++){
                            htmlStr+="<li>";
                            htmlStr+="<a href='Filter.html?key="+escape(val)+"'>" +list[i].goods_info+"</a>";
                            htmlStr+="</li>";
                        }
                        res.html(htmlStr);
                    }
                }
            });
        }
        serAjax();
        serBtn.tap(function(){
            location.href="Filter.html?key="+escape(val); 
        });
    });
})()
// 热卖中的商品随机5个是红色
;(function(){
   var hot=$(".hot-box");
   var items=hot.children();
   function RandomNum(){
       var a = Math.floor(Math.random()*10);
       return a;
   }
    for(var i=0;i<6;i++){
        items.eq(RandomNum()).css({
            color:"#EE1414"
        });
        }
})()
$(".back").tap(function(){
    // location.href=""
    history.back();
});



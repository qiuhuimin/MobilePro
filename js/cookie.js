// 写入cookie
function setCookie(name,value,days){
	if (days) {
		var Days=days;
		var exp=new Date();//当前日期
		exp.setTime(exp.getTime()+Days*24*60*60*1000);//设置cookie的保存时间
		document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();
	}else{
		document.cookie=name+"="+escape(value);
	}
}
// 读取cookies
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if (arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
	
}
// 删除cookies
function delCookie(name){
	var exp=new Date();
	exp.setTime(exp.getTime()-1);
	var cval=getCookie(name);
	if (cval!=null) {
		document.cookie=name+"="+cval+";expires="+exp.toGMTString();
	}
}
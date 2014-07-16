// JavaScript Document// JavaScript Document
$d=function(d){return document.getElementById(d);}
function jsnull(){return;}
var diag=null;
var myid=0;
var myname='';
var hdid=0;
var page=1;
function getXhr(){var x;try{x=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{x=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){x=false}}if(!x&&typeof XMLHttpRequest!='undefined'){x=new XMLHttpRequest()}return x}
function ajax(b,s,f){var x=getXhr();var a=[],m='';if(b=='get'){if(s.indexOf('?')>-1){m=s+"&t="+new Date().getTime()}else{m=s+"?t="+new Date().getTime()}x.open("get",m)}else{a=s.split('?');s=a[0],m=a[1];x.open("post",s,true)}x.setRequestHeader("Content-Type","application/x-www-form-urlencoded");x.setRequestHeader("charset","utf-8");if(b=='post'){x.send(m)}else{x.send(null)}x.onreadystatechange=function(){if(x.readyState!=4)return;var p=x.responseText;if(p!=""){f(p)}}}
function clw(){
	if($d('w').value=='点击输入关键字'){
		$d('w').value='';
		$d('w').style.color='#000000';
	}
	$d('w').onblur=blw;
}
function blw(){
	if($d('w').value=='' || $d('w').value.length<1){
		$d('w').value='点击输入关键字';
		$d('w').style.color='#999';
	}
}
function outlogin(){
	ajax('get','outlogin.php',function(s){
		$d('user').innerHTML='<div class="user"><a href="javascript:jsnull();" onclick="asw()">登录</a>&nbsp;|&nbsp;<a href="http://www.ckplayer.com/bbs/member.php?mod=register" target="_blank">注册</a></div>';
		myid=0,myname='';
	});
}
function closeDiag(){
    diag.close();
}
function addDiag(t,d){
	diag = new Dialog();
	diag.Width = 800;
	diag.Height = 360;
	if(t!=''){
		diag.Title = t;
	}
	diag.URL=d;
	diag.show();
	
}
function showDrag(t,s,g,u){//标题，正文，是否有关闭按钮，延时多长时间关闭
	if(!t){t='系统提示';}
	diag = new Dialog();
	diag.Width = 600;
	diag.Height = 300;
	diag.Title = t;
	diag.InnerHtml ='<div style="line-height: 300px;">'+s+'</div>';
	diag.ShowCloseButton=g;
	if(g){
		diag.OKEvent = function(){diag.close();};//点击确定后调用的方法
	}
	if(u>0){
		diag.AutoClose=u;
	}
	diag.show();
}
function asw(h){
	if(!myname){
		var d='login.htm';
		addDiag('',d);
	}
	else{
		var t='提问题，请针对该文章里不明白的地方进行提问！';
		var d='asw.htm';
		if(h>0){
			t='回答问题！';
			hdid=h;
		}
		addDiag(t,d);
	}
}
function newuser(uid,uname){
	if(uid>0 && uname!=''){
		$d('user').innerHTML='欢迎您，'+uname+'&nbsp;|&nbsp;<a href="javascript:jsnull()" onclick="outlogin()">退出</a>';
		closeDiag();
		hdid=0;
		myid=uid,myname=uname;
	}
}
function aswok(){
	closeDiag();
	hdid=0;
	pageto(page);
}
function getwid(){
	return wid;
}
function gethdid(){
	return hdid;
}
function getht(d){
	var s='您准备回答 '+$d('yh_'+d).innerHTML+' 提出的有关于<span style="color:#F60;">"'+$d('wd_'+d).innerHTML.substr(0,50)+'"</span>的问题';
	return s;
}
function pageto(t){
	ajax('get','wt6.4.php?id='+wid+'&page='+t,function(s){
		$d('asw').innerHTML=s;
		page=t;
	});
}// JavaScript Document
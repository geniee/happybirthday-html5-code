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
	if($d('w').value=='�������ؼ���'){
		$d('w').value='';
		$d('w').style.color='#000000';
	}
	$d('w').onblur=blw;
}
function blw(){
	if($d('w').value=='' || $d('w').value.length<1){
		$d('w').value='�������ؼ���';
		$d('w').style.color='#999';
	}
}
function outlogin(){
	ajax('get','outlogin.php',function(s){
		$d('user').innerHTML='<div class="user"><a href="javascript:jsnull();" onclick="asw()">��¼</a>&nbsp;|&nbsp;<a href="http://www.ckplayer.com/bbs/member.php?mod=register" target="_blank">ע��</a></div>';
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
function showDrag(t,s,g,u){//���⣬���ģ��Ƿ��йرհ�ť����ʱ�೤ʱ��ر�
	if(!t){t='ϵͳ��ʾ';}
	diag = new Dialog();
	diag.Width = 600;
	diag.Height = 300;
	diag.Title = t;
	diag.InnerHtml ='<div style="line-height: 300px;">'+s+'</div>';
	diag.ShowCloseButton=g;
	if(g){
		diag.OKEvent = function(){diag.close();};//���ȷ������õķ���
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
		var t='�����⣬����Ը������ﲻ���׵ĵط��������ʣ�';
		var d='asw.htm';
		if(h>0){
			t='�ش����⣡';
			hdid=h;
		}
		addDiag(t,d);
	}
}
function newuser(uid,uname){
	if(uid>0 && uname!=''){
		$d('user').innerHTML='��ӭ����'+uname+'&nbsp;|&nbsp;<a href="javascript:jsnull()" onclick="outlogin()">�˳�</a>';
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
	var s='��׼���ش� '+$d('yh_'+d).innerHTML+' ������й���<span style="color:#F60;">"'+$d('wd_'+d).innerHTML.substr(0,50)+'"</span>������';
	return s;
}
function pageto(t){
	ajax('get','wt6.4.php?id='+wid+'&page='+t,function(s){
		$d('asw').innerHTML=s;
		page=t;
	});
}// JavaScript Document
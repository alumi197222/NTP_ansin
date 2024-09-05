
/** 
* 偵測螢幕判斷是否轉至手機版用
********/
	//螢幕寬度:screen.width
	//螢幕高度:screen.height
	//可瀏覽頁面寬度:screen.availWidth
	//可瀏覽頁面高度:screen.availHeight
	 // alert('寬:'+$(window).width()+' 高:'+$(window).height());
var ua;
$(document).ready(function() {   
	var url=window.location.toString();
	var str="";
	var mode="w";
	
	var page=location.pathname;
	
	if(page!="/"&& page!="/yellowpage/" && page!="/index.html"  && page!="/yellowpage/index.html"){
		mode = 'm'; //只有首頁需要轉 
	}
	
	if(url.indexOf("?")!=-1){
	   var ary=url.split("?")[1].split("&");
	   for(var i in ary){
		 if(ary[i].split("=")[0]=='m' && ary[i].split("=")[1]) {
			mode = 'm';  // 不轉 
		 }
	  }
	}	 
	/*
	if($(window).width() < 800 && $(window).height() < 600 && mode =='w'){ 
	 location.href = {/literal}'{$mob_href}'{literal};
	}
	*/

	ua = navigator.userAgent.toLowerCase();
	if( use_redirect=='Y' && mode =='w' && (ua.match("iphone") || ua.match("ipod") || ua.match("android")|| ua.match("symbianos")|| ua.match("ios") || ua.match("blackberry")) && !ref_mob){
		 location.href = mob_href; // 手機版
	}  
	
	if (lock_mouse=='Y'){ 
		document.oncontextmenu = function (event) { 
				if (document.all)
						window.event.returnValue = false; // for IE
				else
						event.preventDefault();
		};
		document.onselectstart = function (event) { 
				if (document.all)
						window.event.returnValue = false; // for IE
				else
						event.preventDefault();
		};
		document.onpaste = function (event) { 
				if (document.all)
						window.event.returnValue = false; // for IE
				else
						event.preventDefault();
		};
		document.oncopy = function (event) { 
				if (document.all)
						window.event.returnValue = false; // for IE
				else
						event.preventDefault();
		};
		document.oncut = function (event) { 
				if (document.all)
						window.event.returnValue = false; // for IE
				else
						event.preventDefault();
		};
	}
	
	

  // 公司介紹地圖
	$('#tipx').click(function(){	$('#maptip').hide();	});
	$('#corp').click(	function(){	$('#maptip').toggle();}); 
	 var max_w = $('.Content-body').width();

	$(".Content-body img").load(function() {
        if( this.width > max_w){
            $(this).css({"max-width":max_w+"px","height":"auto"});
        }
    }).each(function(){
        if(this.complete) $(this).trigger('load');
    });
 

	if( window.location.href.indexOf("?fb=1")!=-1){
 
	$("html").css('background','#FFFFFF');
	$("body").css('overflow-x','hidden');
	$("body").css('background-color','#FFFFFF');
	$('body').css('background-image','none');
	$("#Tbody,#header,#container,#mainContent,#innermainContent").css('width','780px');
	$("#sidebar").hide();

	$('a').each(function() {
			 var href = this.href;
			 if(href.indexOf("?fb=1")==-1){
							$(this).attr('href', href.replace(".html",".html?fb=1") );
			}
	});
	FB.Canvas.setDoneLoading( function(response) {
			FB.Canvas.setAutoGrow();
	});
}
	
});

function gotoMOB(i){	
	if ((ua.match("iphone") || ua.match("ipod") || ua.match("android")|| ua.match("symbianos")|| ua.match("ios") || ua.match("blackberry")) && !ref_mob){
		location.href = mob_href;
	}else{
	 if(i) alert( alert_mob + org_href );
	}
} 
	
	
/** 
* 調整畫面高度用
********/	
$( document ).ready(function() {
        init();
        setTimeout(function(){ init(); }, 2000);
		window.addEventListener('scroll', function(){ init();}, true);
});
function init() { 
 if(document.getElementById("innermainContent")&& document.getElementById("sidebar") ){
	 document.getElementById("sidebar").style.height="";
	 document.getElementById("mainContent").style.height="";
	 if( document.getElementById("innermainContent").clientHeight > document.getElementById("sidebar").clientHeight){
			document.getElementById("sidebar").style.height = document.getElementById("innermainContent").clientHeight+'px';
	 }else{
			document.getElementById("mainContent").style.height = document.getElementById("sidebar").clientHeight+'px';
	 }
 }
} 

function nowinit() {
	if(document.getElementById("cglist") && document.getElementById("cglist").style.display=="none") document.getElementById("cglist").style.display="block";
	else  document.getElementById("cglist").style.display="none";
	init();//調整sidebar&mainContent高度
}
function nowinitenews() {
	if(document.getElementById("subenews") && document.getElementById("subenews").style.display=="none") document.getElementById("subenews").style.display="block";
	else  document.getElementById("subenews").style.display="none";
	init();//調整sidebar&mainContent高度
}
function nowinithot() {
	if(document.getElementById("hotlist") && document.getElementById("hotlist").style.display=="none") document.getElementById("hotlist").style.display="block";
	else  document.getElementById("hotlist").style.display="none";
	init();//調整sidebar&mainContent高度
}



/** 
* 訂閱電子報用
********/

// 檢查欄位
function checkSubFields() {
   var labels = {
      subemail:   "Email" 
   };

   var fmts = {
      sbuemail:   /.+@.+/ 
   };

   var message = "";
   var f = document.forms['sub'];

 

   for(k in fmts) {
        
      if(!fmts[k].test( f.elements[k].value)) {  
         message += labels[k]+"格式不對喔";  
      }
   } 
   
   return message;
   
}

function clickSub(){
var message = checkSubFields();

   if(message){ alert(message); return false;}
   else{ 
     alert('認證信已寄到您的信箱，請在24小時內確認!!'); 
     return true;
   }
}

function clickDesub(){
var message = checkSubFields();
   if(message){ alert(message); return false;}
   else{ 
     alert('已取消訂閱電子報!!');  
     return true;
   }
}
 

///////////////////////join////////////////////////////
$('input').focus(function() {  //join text
   $(this).next('span').removeAttr('hidden');
});

$('input').blur(function(){
	$(this).next('span').attr('hidden','hidden');
});

function submitAction(){ //join-submit
	var answer = confirm("제출하시겠습니까?"); //confirm : 메시지와 확인/취소 버튼을 가진 다이얼로그 출력.
	return answer;
}

function resetAction(){ //join-reset
	var answer = confirm("리셋하시겠습니까?");
	return answer;
}

function checkFilled(obj){
	if(obj.value==""){
		alert("fill the blank!");
		obj.focus();
	}
}

////////////////////tips 밑으로 내리기////////////////
$("#tips").click(function() {
  $("#content").slideToggle(1000);
});

/////////////////////////home 이미지/////////////////////////
var files = ["background5.jpg", "background1.jpg", "background2.jpg", "background3.jpg",
"background4.jpg", "background7.jpg","background8.jpg"];
var imgs = new Array();
for (var i=0; i<files.length; i++){
	imgs[i] = new Image(); //이미지 객체 생성
	imgs[i].src = files[i];
}
var next = 1;
function change(img){
	img.src = imgs[next].src;
	next++;
	next %= imgs.length;
}

/////////////////home 타이틀 크게//////////////////
$("#title").click(function(){
  $("#title").animate({fontSize:"20px"}, 800);
});

/////////////////home 메뉴바 slide///////////////////
function toCourse(){
	 $('html, body').animate({
	 	scrollTop : $('#course').offset().top
	 },900);
}

function toTips(){
	 $('html, body').animate({
	 	scrollTop : $('#tips').offset().top
	 },900);
}

function toJoin(){
	 $('html, body').animate({
	 	scrollTop : $('#join').offset().top
	 },900);
}

///////////////////course 지도 투명도////////////////
$(document).ready(function(){
    $("#map").mouseenter(function(){
    	$("#map").animate({ opacity: 1},500);
    });
    $("#map").mouseleave(function(){
    	$("#map").animate({ opacity: 0.4},500);
    });
})   



//////////////////이미지/////////////////////
function bigger(x) //이미지 크게
{
   x.style.height="480px";
   x.style.width = "750px";
}

////////////////////////////내용보이기/////////////////////////////
$(document).ready(function(){
  $("#infomation1").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation2").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation3").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation4").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation5").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation6").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation7").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation8").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation9").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation9").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation10").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation11").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation12").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation13").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation14").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation15").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation16").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation17").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation18").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation19").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation20").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation21").animate({left:"150px"}, 2000);
});

$(document).ready(function(){
  $("#infomation22").animate({left:"150px"}, 2000);
});
     
/////////////////////비행기 이동/////////////////////

var test1 = $('#airplane1');
test1.offset({top:27, left:23});
$("#airplane1").click(function(){
  $("#airplane1").animate({left:370, top:15}, 1000);
});

var test2 = $('#airplane2');
test2.offset({top:27, left:23});
$("#airplane2").click(function(){
  $("#airplane2").animate({left:200, top:10}, 1000);
});

var test3 = $('#airplane3');
test3.offset({top:27, left:23});
$("#airplane3").click(function(){
  $("#airplane3").animate({left:250, top:10}, 1000);
});

var test4 = $('#airplane4');
test4.offset({top:27, left:23});
$("#airplane4").click(function(){
  $("#airplane4").animate({left:180, top:10}, 1000);
});

var test5 = $('#airplane5');
test5.offset({top:27, left:23});
$("#airplane5").click(function(){
  $("#airplane5").animate({left:220, top:10}, 1000);
});

var test6 = $('#airplane6');
test6.offset({top:27, left:23});
$("#airplane6").click(function(){
  $("#airplane6").animate({left:180, top:10}, 1000);
});

var test7 = $('#airplane7');
test7.offset({top:27, left:23});
$("#airplane7").click(function(){
  $("#airplane7").animate({left:170, top:10}, 1000);
});

 ///////////////////처음 fadein 효과/////////////////////
setTimeout( $('.page').animate({ opacity : "1"},1000),3000);

//////////////////텍스트 회전//////////////////////
var word=document.getElementById("rotate");
var timer=setInterval("rotate()",700);

function rotate(){
  var str = word.innerHTML;
  var firstChar = str.substr(0,1);
  var remains=str.substr(1,str.length-1);
  str = remains+firstChar;
  word.innerHTML=str;
}
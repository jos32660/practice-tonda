var html = '';
var now = 0;
// var end = mains.length -1;
var minSpeed = 1000;
var minGap = 4000;
var minInterval;



//navi-wrap

$(".n-line").addClass("d-none");
$(".n-line").eq(0).removeClass("d-none");

$(".navi-wrap > li").mouseenter(function(){
	$(this).eq(0).find(".n-line").removeClass("d-none");
	$(this).find(".n-line").stop().animate({"width":"3rem","opacity":1},minSpeed/2);
	$(this).children(".navi-sub,.navi-sub2,.navi-sub3").stop().slideDown(300);
});
$(".navi-wrap > li").mouseleave(function(){
	$(this).eq(0).find(".n-line").removeClass("d-none");
	$(this).find(".n-line").stop().animate({"width":0,"opacity":0},minSpeed/2);
	$(this).children(".navi-sub,.navi-sub2,.navi-sub3").stop().slideUp(300);
});


//mains
var mains = [
	{
		src : "../img/h1-slide-1-1.jpg",
		title : "POTTERY<br>MADE WITH LOVE",
		desc : "Every item created in our studio is carefully crafted with a focus on the smallest detail.The art of pottery is our inspiration and passion.",
		position: "left"
	},
	{
		src : "../img/h1-slide-2-1.jpg",
		title : "MODERNCERAMIC<br>DESIGN",
		desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor",
		position: "left"
	},
	{
		src : "../img/h1-slide-3-1.jpg",
		title : "HANDMADE<br>UNIQUE PIECES",
		desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor",
		position: "left"
	}
]

for(var i in mains){
	html  = '<img src="'+mains[i].src+'" class="min-img mw-100 position-absolute z-index: 99;">';
	html += '<div class="main-cont position-absolute" style="top: 20%;z-index: 999; opacity: 0;';
	if(mains[i].position == "left")html +=' left: 0; ">';
	html += '<li class="pt-serif display-3 my-2">'+mains[i].title+'</li>';
	html += '<ul class="d-flex my-2">';
	html += '<li class="m-line mx-2 my-2"></li>';
	html += '<li class="f-125 text-secondary col-md-6">'+mains[i].desc+'</li>';
	html += '</ul>';
	html += '<ul class="d-flex mt-4">';
	html += '<li class="pt-serif mr-4 f-075 bt-m">PURCHASE</li>';
	html += '<li class="pt-serif mr-4 f-075 bt-m">LEARN MORE</li>';
	html += '</ul>';
	html += '</div>';
	$(".main").append(html);
}
$(".main").append($(".main > .min-img, .main-cont").eq(0).clone());

$(window).resize(function(){
	$(".main").outerHeight($(".min-img").eq(0).outerHeight());
});
$(".min-img").imagesLoaded(function(){
	$(window).trigger("resize");
});

function minAni(){
	//main-cont
	$(".main-cont").stop().animate({"opacity":0}, minSpeed/2, function(){
		$(this).css({"top":"20%", "display": "none"});
	});
	if(mains[now].position == "left"){
		$(".main-cont").eq(now).css({"left":0, "display":"block"});
		$(".main-cont").eq(now).stop().animate({"left":"15%", "opacity":1}, minSpeed/2);
	}

	//image slide
	$(".min-img").stop().animate({"opacity":0}, minSpeed);
	$(".min-img").eq(now).stop().animate({"opacity":1}, minSpeed, function(){
		if(now == mains.length - 1) now = 0;
		else now++;
	});
}

minInterval = setInterval(minAni, minGap);

$(".main").mouseenter(function(){
	clearInterval(minInterval);
});
$(".main").mouseleave(function(){
	minInterval = setInterval(minAni, minGap);
});
$(".pager .page").click(function(){
	now = $(this).index();
	minAni();
});

//product
for(var i = 0; i<3; i++) $(".prts").append($(".prt").eq(0).clone());

$(".prt-imgs").mouseenter(function(){
	$(this).children(".prt-icon").css({"opacity":1,"display":"block"});
	$(this).children(".prt-img").css({"opacity":"0.2"});
});
$(".prt-imgs").mouseleave(function(){
	$(this).children(".prt-icon").css({"opacity":0,"display":"none"});
	$(this).children(".prt-img").css({"opacity":1});
});





// WOW 시동
new WOW().init();

// tooltip시동
$(".tooltip-bt").tooltip();

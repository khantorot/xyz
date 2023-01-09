window.onload = function(){	
	document.querySelector('.background').classList.add('background_show');
	setTimeout(function() {
		document.querySelector('header').classList.add('header_active');
		document.querySelector('.mainSide').classList.add('mainSide_show');
	}, 500);
	setTimeout(function() {
		menu_btn.classList.add('menu_btn_show');
		document.querySelector('.cube').classList.add('cube_start');
	}, 1000);
};


//menu-btn
var menu_btn = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

menu_btn.onclick = function() {
	this.classList.toggle('active');
	menu.classList.toggle('menu_active');
	document.querySelector('html').classList.toggle('scrolling');
}


$(document).ready(
	function scroll(){
		if(document.documentElement.clientWidth>=730){
			$('html').niceScroll({cursorcolor: '#4e4e4e'});
		}
	}
);

var scrollH = document.querySelector('.scrollH');
window.onscroll = function(){
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
 		if(scrolled >= 50){
 			scrollH.style.transform = 'translateY(-40%)';
	 	}
	 	if(scrolled >= 100){
 			scrollH.style.transform = 'translateY(-55%)';
	 	}
	 	if(scrolled >= 150){
 			scrollH.style.transform = 'translateY(-70%)';
	 	}
 		if(scrolled >= 200){
 			document.querySelector('.aboutus').classList.add('aboutus_show');
 			scrollH.style.transform = 'translateY(-85%)';
	 	}
	 	if(scrolled >= 880){
	 		document.querySelector('.slogan').classList.add('slogan_show');
	 	}
	 	if(scrolled >= 1100){
	 		document.querySelector('.work').classList.add('work_show');
	 	}
	 	if(scrolled >= 1600){
	 		document.querySelector('.boxlink').classList.add('boxlink_show');
	 	}
	 	if(scrolled >= 2300){
	 		document.querySelector('.newsroom').classList.add('newsroom_show');
	 	}
 	}else{
 		if(scrolled >= 50){
 			scrollH.style.transform = 'translate(0%, -40%)';
	 	}
	 	if(scrolled >= 100){
 			scrollH.style.transform = 'translate(0%, -55%)';
	 	}
	 	if(scrolled >= 150){
 			scrollH.style.transform = 'translate(0%, -70%)';
	 	}
	 	if(scrolled >= 200){
 			scrollH.style.transform = 'translate(0%, -85%)';
	 	}
	 	if(scrolled >= 350){
 			document.querySelector('.aboutus').classList.add('aboutus_show');
	 	}
	 	if(scrolled >= 350){
 			document.querySelector('.aboutus').classList.add('aboutus_show');
	 	}
 		if(scrolled >= 350){
 			document.querySelector('.aboutus').classList.add('aboutus_show');
	 	}
	 	if(scrolled >= 1000){
	 		document.querySelector('.slogan').classList.add('slogan_show');
	 	}
	 	if(scrolled >= 1650){
	 		document.querySelector('.work').classList.add('work_show');
	 	}
	 	if(scrolled >= 2000){
	 		document.querySelector('.boxlink').classList.add('boxlink_show');
	 	}
	 	if(scrolled >= 2450){
	 		document.querySelector('.newsroom').classList.add('newsroom_show');
	 	}
 	}
}



var x1 = document.querySelector('.x1');
var x2 = document.querySelector('.x2');
var y1 = document.querySelector('.y1');
var y2 = document.querySelector('.y2');
var z1 = document.querySelector('.z1');
var z2 = document.querySelector('.z2');
logomove()
function logomove() {
	setTimeout(autoLogoX, 0);
	setTimeout(autoLogoY, 4000);
	setTimeout(autoLogoZ, 8000);

	function autoLogoX(){
		x1.style.right = 0+'%';
		x2.style.left = 0+'%';
		y1.style.right = -100+'%';
		y2.style.left = -100+'%';
		z1.style.right = -100+'%';
		z2.style.left = -100+'%';
	}
	function autoLogoY(){
		x1.style.right = -100+'%';
		x2.style.left = -100+'%';
		y1.style.right = 0+'%';
		y2.style.left = 0+'%';
		z1.style.right = -100+'%';
		z2.style.left = -100+'%';
	}
	function autoLogoZ(){
		x1.style.right = -100+'%';
		x2.style.left = -100+'%';
		y1.style.right = -100+'%';
		y2.style.left = -100+'%';
		z1.style.right = 0+'%';
		z2.style.left = 0+'%';
		setTimeout(logomove, 4000);
	}
};


var newsCursor = document.querySelector('.newsroom span');
var newsBox = document.querySelectorAll('.newsroom a');

newsBox[0].onmouseover = function(){
	newsCursor.style.left = 10+'%';
}
newsBox[1].onmouseover = function(){
	newsCursor.style.left = 30+'%';
}
newsBox[2].onmouseover = function(){
	newsCursor.style.left = 50+'%';
}
newsBox[3].onmouseover = function(){
	newsCursor.style.left = 70+'%';
}
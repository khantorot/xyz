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
 		if(scrolled >= 250){
	 		document.querySelector('.imgbox').classList.add('imgbox_show');
	 	}
	 	if(scrolled >= 450){
	 		document.querySelector('.contactbox h1').classList.add('elem_show');
	 	}
	 	if(scrolled >= 700){
	 		document.querySelector('.contactbox').classList.add('elem_show');
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
 		if(scrolled >= 500){
	 		document.querySelector('.imgbox').classList.add('imgbox_show');
	 	}
	 	if(scrolled >= 800){
	 		document.querySelector('.contactbox h1').classList.add('elem_show');
	 	}
	 	if(scrolled >= 1000){
	 		document.querySelector('.contactbox').classList.add('elem_show');
	 	}
 	}	
}


var letters = document.querySelectorAll('.letters h1');
setTimeout(autoLetter, 500);
function autoLetter(){
	setTimeout(function(){
		letters[0].style.opacity = 0;
		letters[3].style.opacity = 0;
	}, 300);
	setTimeout(function(){
		letters[1].style.opacity = 1;
		letters[4].style.opacity = 1;
	}, 400);
	setTimeout(function(){
		letters[0].style.opacity = 1;
		letters[3].style.opacity = 1;
	}, 800);
	setTimeout(function(){
		letters[1].style.opacity = 0;
		letters[4].style.opacity = 0;
	}, 900);
	setTimeout(autoLetter, 3500);
}


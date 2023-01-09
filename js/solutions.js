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


var solutions = document.querySelectorAll('.solutions div');
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
	 		document.querySelector('.introduction').classList.add('introduction_show');
	 	}
	 	if(scrolled >= 800){
	 		document.querySelector('.tech').classList.add('tech_show');
	 	}
	 	if(scrolled >= 1600){
	 		document.querySelector('.solutions h1').classList.add('solutions_show');
	 	}
 		if(scrolled >= 1800){
	 		solutions[0].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 2300){
	 		solutions[1].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 2700){
	 		solutions[2].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 3100){
	 		solutions[3].classList.add('solutions_show');
	 	}
 		if(scrolled >= 3600){
	 		document.querySelector('.boxlink').classList.add('boxlink_show');
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
	 		document.querySelector('.introduction').classList.add('introduction_show');
	 	}
	 	if(scrolled >= 900){
	 		document.querySelector('.tech').classList.add('tech_show');
	 	}
	 	if(scrolled >= 1400){
	 		document.querySelector('.solutions h1').classList.add('solutions_show');
	 	}
 		if(scrolled >= 1600){
	 		solutions[0].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 2000){
	 		solutions[1].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 2350){
	 		solutions[2].classList.add('solutions_show');
	 	}
	 	if(scrolled >= 2700){
	 		solutions[3].classList.add('solutions_show');
	 	}
 		if(scrolled >= 3100){
	 		document.querySelector('.boxlink').classList.add('boxlink_show');
	 	}
 	} 	
}

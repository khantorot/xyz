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
var  products = document.querySelectorAll('.products div');

window.onscroll = function(){
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 	if(document.documentElement.clientWidth <= 730){
 		if(scrolled >= 50){
 			scrollH.style.transform = 'translate(0%, -40%)'
	 	}
	 	if(scrolled >= 100){
 			scrollH.style.transform = 'translate(0%, -55%)'
	 	}
	 	if(scrolled >= 150){
 			scrollH.style.transform = 'translate(0%, -70%)'
	 	}
	 	if(scrolled >= 200){
 			scrollH.style.transform = 'translate(0%, -85%)'
	 	}
 		if(scrolled >= 200){
	 		document.querySelector('.introduction').classList.add('introduction_show');
	 	}
	 	if(scrolled >= 700){
	 		document.querySelector('.products').classList.add('products_show');
	 	}
	 	if(scrolled >= 1000){
	 		products[0].classList.add('block_show');
	 	}
	 	if(scrolled >= 1400){
	 		products[1].classList.add('block_show');
	 	}
	 	if(scrolled >= 1800){
	 		products[2].classList.add('block_show');
	 	}
	 	if(scrolled >= 2200){
	 		products[3].classList.add('block_show');
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
	 		document.querySelector('.introduction').classList.add('introduction_show');
	 	}
	 	if(scrolled >= 800){
	 		document.querySelector('.products').classList.add('products_show');
	 	}
	 	if(scrolled >= 1100){
	 		products[0].classList.add('block_show');
	 	}
	 	if(scrolled >= 1400){
	 		products[1].classList.add('block_show');
	 	}
	 	if(scrolled >= 1700){
	 		products[2].classList.add('block_show');
	 	}
	 	if(scrolled >= 2000){
	 		products[3].classList.add('block_show');
	 	}
	}	
}
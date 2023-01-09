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
var blocks = document.querySelectorAll('.newsbox a');

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
 			scrollH.style.transform = 'translateY(-85%)';
	 		blocks[0].classList.add('show_block');
	 	}
	 	if(scrolled >= 450){
	 		blocks[1].classList.add('show_block');
	 	}
	 	if(scrolled >= 700){
	 		blocks[2].classList.add('show_block');
	 	}
	 	if(scrolled >= 950){
	 		blocks[3].classList.add('show_block');
	 	}
	 	if(scrolled >= 1200){
	 		blocks[4].classList.add('show_block');
	 	}
	 	if(scrolled >= 1450){
	 		blocks[5].classList.add('show_block');
	 	}
	 	if(scrolled >= 1700){
	 		blocks[6].classList.add('show_block');
	 	}
	 	if(scrolled >= 1950){
	 		blocks[7].classList.add('show_block');
	 	}
	 	if(scrolled >= 2200){
	 		blocks[8].classList.add('show_block');
	 	}
	 	if(scrolled >= 2450){
	 		blocks[9].classList.add('show_block');
	 	}
	 	if(scrolled >= 2700){
	 		document.querySelector('.contactbox').classList.add('contactbox_show')
	 	}
 	}else{
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
 			scrollH.style.transform = 'translateY(-85%)';
	 	}
 		if(scrolled >= 300){
	 		blocks[0].classList.add('show_block');
	 		blocks[1].classList.add('show_block');
	 	}
	 	if(scrolled >= 700){
	 		blocks[2].classList.add('show_block');
	 		blocks[3].classList.add('show_block');
	 	}
	 	if(scrolled >= 1200){
	 		blocks[4].classList.add('show_block');
	 		blocks[5].classList.add('show_block');
	 	}
	 	if(scrolled >= 1550){
	 		blocks[6].classList.add('show_block');
	 		blocks[7].classList.add('show_block');
	 	}
	 	if(scrolled >= 2000){
	 		blocks[8].classList.add('show_block');
	 		blocks[9].classList.add('show_block');
	 	}
	 	if(scrolled >= 2350){
	 		document.querySelector('.contactbox').classList.add('contactbox_show')
	 	}
 	}	
}
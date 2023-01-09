window.onload = function(){	
	document.querySelector('.background').classList.add('background_show');
	setTimeout(logomove, 500);

	setTimeout(function() {
		menu_btn.classList.add('menu_btn_show');
		music_btn.classList.add('music-btn_show');
	}, 1000);

	setTimeout(function() {
		mainSide.classList.add('mainSide_show');
		cards.classList.add('cards_show');
	}, 1500);

	setTimeout(function() {
		document.querySelector('.news').classList.add('news_show');	
	}, 2000);
};


//menu-btn
var menu_btn = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

menu_btn.onclick = function() {
	this.classList.toggle('active');
	menu.classList.toggle('menu_active');
	document.querySelector('html').classList.toggle('scrolling');
}


var news = document.querySelector('.news');
var newsBtn = document.querySelectorAll('.news span');
var newsPage = document.querySelectorAll('.news div');
newsPage[0].classList.add('news_active');
newsBtn[0].onclick = ShowNews1;
newsBtn[1].onclick = ShowNews2;
newsBtn[2].onclick = ShowNews3;
function ShowNews1(){
	newsPage[0].classList.add('news_active');
	newsPage[1].classList.remove('news_active');
	newsPage[2].classList.remove('news_active');
}
function ShowNews2(){
	newsPage[1].classList.add('news_active');
	newsPage[0].classList.remove('news_active');
	newsPage[2].classList.remove('news_active');
}
function ShowNews3(){
	newsPage[2].classList.add('news_active');
	newsPage[1].classList.remove('news_active');
	newsPage[0].classList.remove('news_active');
}

setTimeout( autoNews, 3000);
function autoNews(){
	setTimeout(function(){ 	ShowNews2()		}, 10000);
	setTimeout(function(){ 	ShowNews3	()	}, 20000);
	setTimeout(function(){ 	ShowNews1	()	}, 30000);
	setTimeout( autoNews, 30000);
}


var x1 = document.querySelector('.x1');
var x2 = document.querySelector('.x2');
var y1 = document.querySelector('.y1');
var y2 = document.querySelector('.y2');
var z1 = document.querySelector('.z1');
var z2 = document.querySelector('.z2');

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




var vol = 0;
var playAudio = document.querySelector('#playAudio');
var music_btn = document.querySelector('.music-btn');
var music_anim = document.querySelector('.music-anim');
var video_bg = document.querySelector('.video-bg');
var cards = document.querySelector('.cards');
var mainSide = document.querySelector('.mainSide');
var background = document.querySelector('.background');
var logo = document.querySelector('.logo');
var cube = document.querySelector('.cube');

music_btn.onclick = function(e) {
	if(vol == 0){
		music_anim.style.opacity = 1;
		playAudio.load();
		playAudio.play();	
		vol = 0.5;
		playAudio.volume = vol;
		document.querySelector('video').play();
			music_btn.classList.add('music-btn_style');
			video_bg.classList.add('video_style');
			cards.classList.add('cards_style');
			mainSide.classList.add('mainSide_style');
			background.classList.add('background_style');
			logo.classList.add('logo_style');
			news.classList.add('news_style');
			cube.classList.add('cube_style');
			menu.classList.add('menu_style');
			menu_btn.classList.add('menu_btn_style');
				document.querySelector('body').style.background = '#000';
	}else{
		music_anim.style.opacity = 0;
		playAudio.pause();
		vol = 0;
			document.querySelector('video').pause();
			music_btn.classList.remove('music-btn_style');
			video_bg.classList.remove('video_style');
			cards.classList.remove('cards_style');
			mainSide.classList.remove('mainSide_style');
			background.classList.remove('background_style');
			logo.classList.remove('logo_style');
			news.classList.remove('news_style');
			cube.classList.remove('cube_style');
			menu.classList.remove('menu_style');
			menu_btn.classList.remove('menu_btn_style');
			document.querySelector('body').style.background = '#fff';
	}
}


music_btn.onmouseover = function(){
	music_anim.classList.add('music-anim_active');
}
music_btn.onmouseleave = function(){
	music_anim.classList.remove('music-anim_active');
}
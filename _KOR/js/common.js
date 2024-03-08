$(document).ready(function(){
	//  main_v_sd
	$('.main_v_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {			 
				adaptiveHeight: true
			  }
			}
		  ]	
	});
	//  main_event_sd
	$('.main_event_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 520,
			  settings: {
			   centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
	});

	//  main_gall_sd
	$('.main_gall_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 640,
			  settings: {
			   centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]
	});

	//  main_ban_sd
	$('.main_ban_sd').slick({
		autoplay: true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
		responsive: [

			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});

	
	$('.main_v_sd').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		$('.main_v_sd .item').removeClass('active');
		$('.main_v_sd .slick-current .item').addClass('active');
	});

	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});

	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

// -------------------------- 메인 탭 --------------------------
	$('.board_tabs > li > a.tablink').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').addClass('active');		
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
		$(this).parent('li').find('a.more').css('display','inline-flex');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});
// -------------------------- 관련사이트 --------------------------
	$(".footlink").click(function(){
		$(this).parent().toggleClass("cur").siblings().removeClass("cur");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).siblings().children("ul").stop().slideUp();
	});

	$("#container,.b_logo").on('focusin',function(){
		$(".related_site").children("ul").fadeOut()
	});

// -------------------------- Gnb 열기/닫기 --------------------------
    $(".gnb_dep1").mouseenter(function(){
		$(".gnb_dep2").stop().animate({height: 420}, 300);
		$(".tmnBg").stop().animate({height: 420}, 300);
		$(".tmnBg").addClass("on");
		
	}).mouseleave(function(){
		$(".gnb_dep2").stop().animate({height: 0}, 300);
		$(".tmnBg").stop().animate({height: 0}, 300);
		$(".tmnBg").removeClass("on");
	});
	
	/*gnb tabkey focusin/focusout*/
	$(".gnb_dep1 > li").focusin(function(){
		$(".gnb_dep2").stop().animate({height: 420}, 300);
		$(".tmnBg").stop().animate({height: 420}, 300);
	}).focusout(function(){
		$(".gnb_dep2").stop().animate({height: 0}, 300);
		$(".tmnBg").stop().animate({height: 0}, 300);
	});
// -------------------------- mGnb 열기 --------------------------
	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);
	});

// -------------------------- mGnb 메뉴 열기닫기  --------------------------
	$(".mDepth1 > li > a").click(function(){
		$(".mDepth1 > li > a").removeClass("active");
		$(".mDepth2 li").removeClass("active");
		var mDepth2 = $(this).siblings("ul").css("display");
		if( mDepth2 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth2").slideUp(300);
			$(this).siblings("ul").slideDown(300);
		}
	});
	/*mGnb menu*/
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});
//  -------------------------- 모바일 메뉴 토글 --------------------------
	$('html').click(function(e) {
        if($(e.target).hasClass("navAcrtive")) {
        }else{
			$("#nav .depth1 > li:last-child > a").removeClass("navActive");
			$("#nav .depth2").slideUp(300);
        }
    });

// -------------------------- gotop top bottom --------------------------

	$(".loca_nav .top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});
	$('.loca_nav .bottom').click(function() {
	    $('body,html').animate({scrollTop: $(document).height()}, 500);
    return false;
	});

// -------------------------- 스킵네비 포커스잡아주기--------------------------
    $("#skipNavi > a").click(function(){
    $($(this).attr("href"))
      .attr("tabindex","0")
      .css("outline","0")
      .focus();
    });

	// a태그 hash 스무스하게
	$('a.smooth[href*="#"]')	  
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {		
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		 
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  
		  if (target.length) {
			
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) {
				return false;
			  } else {
				$target.attr('tabindex','-1'); 
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });

  // img태그로 넣은 svg inline 랜더링
  $('.svginline').each(function() {
      
      var $img = $(this),
          imgURL = $img.attr('src'),
          imgID  = $img.attr('id');
    
      $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
        
          $svg = $svg.removeAttr('xmlns:a');
          $img.replaceWith($svg);
      }, 'xml');
    });

	// map 오버시 클래스 추가
	$(".link_list a").on('click mouseenter',function (){
		var $this = $(this);
		$this.addClass('active');
		$this.siblings('.active').removeClass('active');
		
		var $index = $(this).index();
		var $mapBox = $(this).closest('.area_wp');
		
		$mapBox.find(' > .img_list > div.active').removeClass('active');
		$mapBox.find(' > .img_list > div').eq($index).addClass('active');
	});


});

// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-80%"}, 300);
	$("#mGnb").fadeOut(300);
	$("#dimed").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
}

//  -------------------------- mGnb display --------------------------
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1024) {
		mGnbClose();
		} else {
		mGnbClose();
		}
});


// -------------------------- 상단으로 나타나기 --------------------------
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 360 ) {
		$( '.loca_nav' ).fadeIn(500);
	} else {
		$( '.loca_nav' ).fadeOut(500);
	}

} );


function choiceFocus(arrId){
	var menuH = document.querySelector("#gnb").offsetHeight;
	var div_location = document.querySelector("#year"+arrId).offsetTop;
	window.scrollTo({top:div_location + 350, behavior:'smooth'});
}


// -------------------------- 화면확대축소 --------------------------

$(function(){

	var zoom = 1;
	$(".btn-zoomup").click(function() {
		var T = Number('1e'+1);
		if(zoom == 1.5){
			alert("최대 화면 크기 입니다.\n더 이상 확대하실 수 없습니다");
			return false;
		}
		zoom = Math.round((zoom+0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".btn-zoomdown").click(function() {
		var T = Number('1e'+1);
		if(zoom == .8) {
			alert("최소 화면 크기 입니다.\n더 이상 축소하실 수 없습니다.");
			return false;
		}
		zoom = Math.round((zoom-0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".btn-zoom100").click(function() {
		zoom = 1;
		$("body").attr("style",'');
	});
});	


// -------------------------- 설문조사 결과 의견보기 --------------------------

$(function(){
	$(".ect_more").on("click", function(){
		$(".ect_box").slideToggle(300);
	})
})

// -------------------------- 설문조사 폼 기타의견작성 --------------------------

function Textbox(checkbox) {
	const textbox_elem = document.getElementById('eOpinion');
	textbox_elem.disabled = checkbox.checked ? false : true;
	if(textbox_elem.disabled) {
		textbox_elem.value = null;
	}else {
		textbox_elem.focus();
	}
}

function toggleTextbox(checkbox) {
	const textbox_elem = document.getElementById('mOpinion');
	textbox_elem.disabled = checkbox.checked ? false : true;
	if(textbox_elem.disabled) {
		textbox_elem.value = null;
	}else {
		textbox_elem.focus();
	}
}
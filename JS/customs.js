// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	jQuery(".fancybox").fancybox();

	
	var slid = jQuery('#carousel-reviews');
		
	slid.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			767:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			991:{
				items: 1,
				mouseDrag: true,
				dots: true
			},
			1099:{
				items: 1,
				mouseDrag: true,
				dots: true
			}
		}
	});
	});

	// Burger
	jQuery(document).ready(($)=>{
		$('.header__burger').on('click',function(e){
			$(this).toggleClass('active');
			$('.header__menu').toggleClass('active');
		})
	})

	// Scrolling header
	window.addEventListener('scroll', e => {
		let header = document.getElementById('header').classList
		let active_class = "header_scrolled_1201px"
		
		if(scrollY > 5) header.add(active_class)
		else header.remove(active_class)
	})
	window.addEventListener('scroll', e => {
		let header = document.getElementById('header').classList
		let active_class = "header_scrolled_576px"
		
		if(scrollY > 650) header.add(active_class)
		else header.remove(active_class)
	})



	// Scrolling menu
	document.querySelectorAll('a.yacor').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault()

			const href = this.getAttribute('href').substring(1)

			const scrolltarget = document.getElementById(href)
			
			const topOffset = 100
			const elementposition = scrolltarget.getBoundingClientRect().top
			const offsetposition = elementposition - topOffset

			window.scrollBy({
				top: offsetposition,
				behavior: 'smooth'
			})
		})
	})









	// function scrollTo(element) {
	// 	window.scroll({
	// 		left: 0,
	// 		top: element.offsetTop,
	// 		behavior: 'smooth'
	// 	})
	// }

	// let button = document.querySelectorall('');
	
	// button.addEventListener('click', () => {
	// 	console.log('Вы кликнули по кнопке')
	// }) 

	// let anchors = document.querySelectorAll('header a[href*="#"]');

	// for (anchor of anchors) {
	// 	if (anchor) {
	// 		anchor.addEventListener('click', function(e){
	// 			e.preventDefault();
	// 			anchorId = this.getAttribute('href');
	// 			console.log(anchorId);
	// 			document.querySelector(anchorId).scrollIntoWiew({
	// 				behavior: 'smooth', block: 'start'
	// 			})
	// 		}) 
	// 	}
	// }

	// var elem = $('.header, .separator');
	// 	var doc = $(document);
	// 	function scrolled() {
  //  		var threshold = doc.scrollTop() > 50;
  //  		elem.toggleClass('scrolled', threshold);
  //  		}
	// 	$(window).on({ scroll: scrolled });


	
	// const menuLinks = Document.queryselectorall('.header__link[data-goto]');
	// if (menuLinks.length > 0) {
	// 	menuLinks.forEach(menuLink => {
	// 		menuLink.addEventListener("click", onMenuLinkClick);
	// 	});
	// 	function onMenuLinkClick(e) {
	// 		const menuLink = e.target;
	// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
	// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
	// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

	// 			window.scrollTo({
	// 				top: gotoBlockValue,
	// 				behavior: "smooth"
	// 			});
	// 			e.preventDefault();
	// 		}
	// 	}
	// }
	
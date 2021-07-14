const countDown = function () {
	current = new Date();
	firstOfNextMonth = new Date(current.getFullYear(), current.getMonth() + 1, 1);
	// Unix timestamp (in seconds) to count down to
	var timeCount = (firstOfNextMonth.getTime() / 1000) - 1;
	// Set up FlipDown
	var flipdown = new FlipDown(timeCount)
		// Start the countdown
		.start()
		// Do something when the countdown ends
		.ifEnded(() => {
			console.log('The countdown has ended!');
		});
}

const ecm_cta = function () {
	let pageScroll = 0;
	document.addEventListener('scroll', function (e) {
		pageScroll = window.scrollY;
		
		if (pageScroll > 400) {
			document.getElementsByClassName('ecm-cta')[0].classList.add('show');
		} else {
			document.getElementsByClassName('ecm-cta')[0].classList.remove('show');
		}
	});
	
	let returnTop = document.getElementById('returnTop');
	returnTop.addEventListener('click', function (e) {
		scrollTop();
	})
}

function callMenu() {
	if ($('.ecm-header').hasClass('toggle-navigation')) {
		$('.ecm-header').removeClass('toggle-navigation');
	} else {
		$('.ecm-header').addClass('toggle-navigation');
	}
}

$(function () {
	ecm_cta();
	
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".ecm-header .ecm-header_bottom .header-menu > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
			
			if ($(this).find('ul').length > 0) {
				$(this).find('ul').each(function (index_child, elm_child) {
					$(elm_child).prev().attr({
						"href": "#subMenu_child" + index_child,
						"data-toggle": "collapse"
					});
					$(elm_child).attr({
						"id": "subMenu_child" + index_child,
						"class": "collapse list-unstyled mb-0",
						"data-parent": "#subMenu" + index
					});
				})
			}
		});
		
		
		$('.ecm-header .ecm-header_bottom .header-menu > ul > li > a').click(function () {
			if ($(this).next('ul').hasClass('show')) {
				let _ul = $(this).next('ul');
				_ul.find('ul.show').removeClass('show');
				_ul.find('a[aria-expanded]').attr('aria-expanded', false);
			} else {
				$(this).closest('#hasMenu').find('.show').removeClass('show');
				$(this).closest('#hasMenu').find('a[aria-expanded]').attr('aria-expanded', false);
			}
		});
	}
	
	$(document).on("click", "#hamburger, #close-navigation, .header-overlay", function () {
		callMenu();
	});
	
	$('#countdown_product-1').countdown({
		date: '07/24/2021 23:59:59', // day-month-year
		day: 'Ngày',
		days: 'Ngày',
		hour: 'Giờ',
		hours: 'Giờ',
		minute: 'Phút',
		minutes: 'Phút',
		second: 'Giây',
		seconds: 'Giây',
	}, function () {
		alert('Hết thời gian khuyến mãi!');
	});
	
	$('#countdown_product-2').countdown({
		date: '07/24/2021 23:59:59', // day-month-year
		day: 'Ngày',
		days: 'Ngày',
		hour: 'Giờ',
		hours: 'Giờ',
		minute: 'Phút',
		minutes: 'Phút',
		second: 'Giây',
		seconds: 'Giây',
	}, function () {
		alert('Hết thời gian khuyến mãi!');
	});
	
	$('#countdown_product-3').countdown({
		date: '07/24/2021 23:59:59', // day-month-year
		day: 'Ngày',
		days: 'Ngày',
		hour: 'Giờ',
		hours: 'Giờ',
		minute: 'Phút',
		minutes: 'Phút',
		second: 'Giây',
		seconds: 'Giây',
	}, function () {
		alert('Hết thời gian khuyến mãi!');
	});
	
	const bannerHome = new Swiper('#ecm-banner .swiper-container', {
		loop: true,
		speed: 1000,
		effect: 'fade',
		navigation: {
			nextEl: '#ecm-banner .swiper-button-next',
			prevEl: '#ecm-banner .swiper-button-prev',
		},
		pagination: {
			el: "#ecm-banner .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 100000,
			disableOnInteraction: false,
		}
	});
	
	const categoryHome = new Swiper('#ecm-category .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#ecm-category .swiper-button-next",
			prevEl: "#ecm-category .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 4.3,
				spaceBetween: 30,
			},
			1199: {
				slidesPerView: 6,
				spaceBetween: 30,
			}
		}
	});
	
	const articleHome = new Swiper('#ecm-article .swiper-container', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#ecm-article .swiper-button-next",
			prevEl: "#ecm-article .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 2.3,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	
	const sidebarProduct = new Swiper('#sidebar-product .swiper-container', {
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: "#sidebar-product .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}
	});
	
	const relatedProduct = new Swiper('#related-product .swiper-container', {
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: "#related-product .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}
	});
	
	const newArticle = new Swiper('#new-article .swiper-container', {
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: "#new-article .swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}
	});
	
	const imageNav = new Swiper('#preview-images-nav', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	const imageAvatar = new Swiper('#preview-images-avatar', {
		thumbs: {
			swiper: imageNav,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	
	$('.change-quantity').click(function () {
		changeQuantity($(this), $(this).parent().find('input[name=quantity]'));
	});
	
	$('input[name=quantity]').change(function () {
		changeQuantity("", $(this));
	});
	
	var beforeChangeQuantity = 1;
	var changeQuantity = function (button = '', input = '') {
		let minimum = input.attr('data-minimum'), // Số lượng đặt tối thiểu
			maximum = input.attr('data-maximum'), // Số lượng đặt tối đa
			valueQuantity = parseInt(input.val()); // Số lượng đặt
		
		if (isNaN(valueQuantity)) {
			valueQuantity = beforeChangeQuantity;
		}
		
		if (button != '') {
			let type = parseInt(button.attr('data-type')); // type = 0 - giảm, type = 1 tăng
			if (type === 1) {
				valueQuantity += 1;
			} else {
				valueQuantity -= 1;
			}
		}
		
		if (valueQuantity < minimum || valueQuantity > maximum) {
			valueQuantity = beforeChangeQuantity;
			input.val(valueQuantity);
			alert(`Số lượng đặt:\nTối thiểu là ${minimum} sản phẩm\nTối đa là ${maximum} sản phẩm\nVui lòng thử lại!`);
			return false;
		} else {
			input.val(valueQuantity);
		}
		beforeChangeQuantity = valueQuantity;
	}
});
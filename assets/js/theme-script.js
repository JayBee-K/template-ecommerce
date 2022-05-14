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

var callPopupOrder = function (elm) {
	let getQuantity = elm.closest('.ecm-wrap_content').find('input[name=quantity]').val(),
		getLabelOption = elm.closest('.ecm-wrap_content').find('[data-option-label]').attr('data-option-label'),
		getValueOption = elm.closest('.ecm-wrap_content').find('input[name=option]:checked').attr('data-option-value');
	$('#popupOrder #quantity').text(parseInt(getQuantity));
	$('#popupOrder #option').html(`${getLabelOption}: <span>${getValueOption}</span>`);
	$('#popupOrder').modal('show');
}


const rangePrice = function () {
	var rangeSlider = document.getElementById('rangePrice');
	var moneyFormat = wNumb({
		decimals: 0,
		thousand: '.',
		suffix: ' đ',
	});
	noUiSlider.create(rangeSlider, {
		start: [0, 100000],
		step: 1,
		range: {
			'min': [0],
			'max': [1000000]
		},
		format: moneyFormat,
		connect: true
	});
	
	rangeSlider.noUiSlider.on('update', function (values, handle) {
		document.getElementById('rangePrice-min').innerHTML = values[0];
		document.getElementById('rangePrice-max').innerHTML = values[1];
		document.getElementsByName('min-value').value = moneyFormat.from(
			values[0]);
		document.getElementsByName('max-value').value = moneyFormat.from(
			values[1]);
	});
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
	
	if ($('#countdown_product-1').length) {
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
	}
	if ($('#countdown_product-3').length) {
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
	}
	if ($('#countdown_product-3').length) {
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
	}
	
	
	const highlightBanner = new Swiper('#swiper-highlight', {
		loop: false,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: "#swiper-highlight .swiper-button-next",
			prevEl: "#swiper-highlight .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.2,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 2.2,
				spaceBetween: 10,
			},
			991: {
				slidesPerView: 4.2,
				spaceBetween: 10,
			},
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
	
	$('#btnPopupOrder').click(function () {
		callPopupOrder($(this));
	});
	
	// Range Price Proudct
	if ($('#rangePrice').length) {
		$('.noUi-handle').on('click', function () {
			$(this).width(50);
		});
		
		rangePrice();
	}
});

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

function callMenu() {
	if ($('.ecm-header').hasClass('toggle-navigation')) {
		$('.ecm-header').removeClass('toggle-navigation');
	} else {
		$('.ecm-header').addClass('toggle-navigation');
	}
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


let [avatarThumb, avatarPhoto] = [];
const handleSlideProduct = function () {
	avatarThumb = new Swiper('#preview-images-nav', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	avatarPhoto = new Swiper('#preview-images-avatar', {
		thumbs: {
			swiper: avatarThumb,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	handleZoomImageProduct($('#preview-images-avatar [data-fancybox=detailGallery]'), avatarPhoto, avatarThumb);
};
const handleZoomImageProduct = function (elm, avatarPhoto, avatarThumb) {
	let i = 0;
	elm.click(function () {
		i = 0;
	});

	elm.fancybox({
		touch: true,
		beforeShow: function (instance, current) {
			let index = $(`[data-fancybox='detailGallery'][href='${current.src}']`).attr('data-index');
			avatarPhoto.slideTo(index - 1);
			if ($('#preview-images-nav').length > 0) {
				avatarThumb.slideTo(index - 1);
			}
		},
	});
}
const sliderBanner = () => {
	new Swiper('#slider-banner .swiper-container', {
		speed: 1000,
		slidesPerView: 1,
		effect: 'slide',
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: "#slider-banner .swiper-pagination",
			clickable: true,
		},
	});
}

$(function () {
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
			date: '06/24/2022 23:59:59', // day-month-year
			day: 'Ngày',
			days: 'Ngày',
			hour: 'Giờ',
			hours: 'Giờ',
			minute: 'Phút',
			minutes: 'Phút',
			second: 'Giây',
			seconds: 'Giây',
		});
	}
	if ($('#countdown_product-3').length) {
		$('#countdown_product-2').countdown({
			date: '06/24/2022 23:59:59', // day-month-year
			day: 'Ngày',
			days: 'Ngày',
			hour: 'Giờ',
			hours: 'Giờ',
			minute: 'Phút',
			minutes: 'Phút',
			second: 'Giây',
			seconds: 'Giây',
		});
	}
	if ($('#countdown_product-3').length) {
		$('#countdown_product-3').countdown({
			date: '06/24/2022 23:59:59', // day-month-year
			day: 'Ngày',
			days: 'Ngày',
			hour: 'Giờ',
			hours: 'Giờ',
			minute: 'Phút',
			minutes: 'Phút',
			second: 'Giây',
			seconds: 'Giây',
		});
	}

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

	$('#toggleCart').click(function () {
		if ($('#float-cart').hasClass('is-show')) {
			$('#float-cart').removeClass('is-show');
		} else {
			$('#float-cart').addClass('is-show');
		}
	});

	$(document).mouseup(function (e) {
		let elm = $('#float-cart.is-show');
		elm.is(e.target) || 0 !== elm.has(e.target).length || (
			elm.removeClass('is-show')
		)
	})

	sliderBanner();
	handleSlideProduct();
});

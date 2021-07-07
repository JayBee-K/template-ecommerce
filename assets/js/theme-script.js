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

$(function () {
	ecm_cta();
	$('#countdown').countdown({
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
});
import './index.html';
import './index.scss';

const swiper = new Swiper('.swiper', {
	speed: 700,
	spaceBetween: 16,
	slidesPerView: 'auto',
	slidesOffsetAfter: 60,
	pagination: {
		el: '.swiper-pagination', 
		clickable: true, 
	},
	breakpoints: {
		768: {
			enabled: false,
			spaceBetween: 0
		}
	}
});


function elementHideShow(elem) {
	const list = document.querySelector(`.${elem}__list`);
	const buttonShowHidden = document.querySelector(`.${elem}__btn`);
	let changeWordsButton = true;
	buttonShowHidden.addEventListener('click', function () {
		buttonShowHidden.classList.toggle('button-show-hide--active');
		list.classList.toggle(`${elem}__list--show`);
		if (changeWordsButton) {
			buttonShowHidden.textContent = 'Скрыть';
			changeWordsButton = false;
		} else {
			buttonShowHidden.textContent = 'Показать все';
			changeWordsButton = true;
		}
	});
}

function textHideShow() {
	const buttonHideShow = document.querySelector('.info__button');
	const infoText = document.querySelectorAll('.info__text');

	let checkButton = true;
	buttonHideShow.addEventListener('click', function () {
		infoText.forEach(function (elem, index) {
			if (index !== 0) {
				elem.classList.toggle('info__text--hide');
				elem.style.cssText = 'max-height: 200px';
				if (elem.classList.contains('info__text--hide')) elem.style.cssText = 'max-height: 0';
			}
		});
		if (checkButton) {
			buttonHideShow.textContent = 'Скрыть';
			checkButton = false;
		} else {
			buttonHideShow.textContent = 'Читать далее';
			checkButton = true;
		}
		buttonHideShow.classList.toggle('info__button--active');
	});
}

function clickMenu(list, button) {
	const menuList = document.querySelector(`.${list}`);
	menuList.addEventListener('click', function (event) {
		const target = event.target;
		if (target.classList.contains(`${button}`)) {
			const menuLinks = document.querySelectorAll(`.${button}`);
			menuLinks.forEach(elem => elem.classList.remove(`${button}--checked`));
			event.target.classList.add(`${button}--checked`);
		}
	});
}


function menuOpen() {
	const buttonBurgerMenu = document.querySelector('.burger-menu');
	const overlay = document.querySelector('.overlay');
	const body = document.querySelector('body');
	const blockSidebar = document.querySelector('.sidebar');

	function toggleClass() {
		buttonBurgerMenu.classList.toggle('burger-menu--active');
		overlay.classList.toggle('overlay--active');
		blockSidebar.classList.toggle('sidebar--active');
		body.classList.toggle('no-scroll');
	}

	function removeClass() {
		buttonBurgerMenu.classList.remove('burger-menu--active');
		overlay.classList.remove('overlay--active');
		blockSidebar.classList.remove('sidebar--active');
		body.classList.remove('no-scroll');
	}

	buttonBurgerMenu.addEventListener('click', toggleClass);
	overlay.addEventListener('click', removeClass);
}

function modal() {
	const buttonCallHeader = document.querySelector('#call-header');
	const buttonCallSidebar = document.querySelector('#call-sidebar');
	const buttonChatHeader = document.querySelector('#chat-header');
	const buttonChatSidebar = document.querySelector('#chat-sidebar');

	const modalCall = document.querySelector('.modal-call');
	const modalFeedback = document.querySelector('.modal-feedback');
	const overlay = document.querySelector('.overlay');
	const body = document.querySelector('body');
	const modalCallClose = document.querySelector('.modal-call__close');
	const modalFeedbackClose = document.querySelector('.modal-feedback__close');
	const sidebar = document.querySelector('.sidebar');

	function toggleClassCall() {
		modalCall.classList.toggle('modal-call--active');
		overlay.classList.toggle('overlay--active');
		body.classList.toggle('no-scroll');
	}

	function toggleClassChat() {
		modalFeedback.classList.toggle('modal-feedback--active');
		overlay.classList.toggle('overlay--active');
		body.classList.toggle('no-scroll');
	}

	function removeClass() {
		const burgerMenu = document.querySelector('.burger-menu');
		modalCall.classList.remove('modal-call--active');
		modalFeedback.classList.remove('modal-feedback--active');
		overlay.classList.remove('overlay--active');
		body.classList.remove('no-scroll');
		burgerMenu.classList.remove('burger-menu--active');
		sidebar.classList.remove('sidebar--active');
	}

	buttonCallSidebar.addEventListener('click', function () {
		if (window.scrollY > 0) {
			window.scrollTo(0, 0);
		}
		const burgerMenu = document.querySelector('.burger-menu');
		sidebar.classList.remove('sidebar--active');
		burgerMenu.classList.remove('burger-menu--active');
		modalCall.classList.add('modal-call--active');
		body.classList.add('no-scroll');
	});

	buttonChatSidebar.addEventListener('click', function () {
		if (window.scrollY > 0) {
			window.scrollTo(0, 0);
		}
		const burgerMenu = document.querySelector('.burger-menu');
		sidebar.classList.remove('sidebar--active');
		burgerMenu.classList.remove('burger-menu--active');
		modalFeedback.classList.add('modal-feedback--active');
		body.classList.add('no-scroll');
	});


	buttonChatHeader.addEventListener('click', toggleClassChat);
	buttonCallHeader.addEventListener('click', toggleClassCall);
	overlay.addEventListener('click', removeClass);
	modalCallClose.addEventListener('click', removeClass);
	modalFeedbackClose.addEventListener('click', removeClass);

	if (document.documentElement.clientWidth >= 1440) {
		buttonCallSidebar.addEventListener('click', function () {
			overlay.classList.add('overlay--active');
		});
		buttonChatSidebar.addEventListener('click', function () {
			overlay.classList.add('overlay--active');
		});
	}

	document.addEventListener('keydown', function (event) {
		if (event.code == 'Escape') {
			removeClass();
		}
	});

}

elementHideShow('brands');
elementHideShow('devices');
textHideShow();
clickMenu('menu__list', 'menu__link');
clickMenu('page-menu__list', 'page-menu__button');
menuOpen();
modal();

// swiper();
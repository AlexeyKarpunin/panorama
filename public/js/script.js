import $ from 'jquery';

$(document).ready(()=> {
  $('.slider-price3__input--tel').inputmask('+7 (999) - 999 9999');
  $('.measure__input--tel').inputmask('+7 (999) - 999 9999');
});

$(document).ready(()=> {
    $('.page-nav__btn').click(function(){
        $('#menu-top-menu').slideToggle('slow');
        $(this).toggleClass('active');
    });
});

$(() => {
 $('.owl-carousel').owlCarousel({
 	items: 1,
 	nav: true,
 	dots: false
 });
});

const distance = 111;
  const box = $('.portfolio__list');
$('.portfolio__btn').on('click', function() {
  box.stop().animate({
    scrollTop: `+=${  distance * $(this).data('factor')}`
  });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
  anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector(`${  blockID}` ).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
}


function catalogSlider() {
  const img = [
      'https://panorama30.ru/wp-content/themes/panorama/img/full-img1.jpg',
      'https://panorama30.ru/wp-content/themes/panorama/img/full-img22.jpg',
      'https://panorama30.ru/wp-content/themes/panorama/img/full-img3.jpg',
      'https://panorama30.ru/wp-content/themes/panorama/img/full-img2.jpg'];
  const catalog = document.querySelector('.catalog__box');
  const item = catalog.querySelectorAll('.catalog__item');
  const fullImg = catalog.querySelector('.catalog__full-img');

  for (let i = 0; i < item.length; i++) {

    item[i].addEventListener('click', () => {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('active');
      }
      item[i].classList.add('active');
      fullImg.src = img[i];
    });
  }
};

function price() {
  const price = document.querySelector('.price');
  const slide = price.querySelectorAll('.slider-price');
  const next = price.querySelectorAll('.slider-price__link--next');
  const prew = price.querySelectorAll('.slider-price__link--prew');
  const status = price.querySelector('.status-bar');
  const statusText = price.querySelector('.status-bar__text');
  const inputBox = price.querySelectorAll('.slider-price2__item');
  const inputs = price.querySelectorAll('.slider-price2__select');
  const tipCommunication = price.querySelector('.slider-price3__select--communication');
  const inputBox2 = price.querySelectorAll('.slider-price3__item');
  const inputs2 = price.querySelectorAll('.js__input');

  for (let i = 0; i < next.length; i++) {

    next[i].addEventListener('click', () => {

      for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
      }

      slide[i+1].classList.add('active');
      status.classList.add(`status${[i+2]}`);
      statusText.textContent = `Вопрос ${  [i+2]  } из 3`;
    });
  }

  for (let i = prew.length-1; i >= 0; i--) {

    prew[i].addEventListener('click', () => {

      for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
      }

      slide[i].classList.add('active');
      status.classList.remove(`status${[i+2]}`);
      status.classList.add(`status${[i+1]}`);
      statusText.textContent = `Вопрос ${  [i+1]  } из 3`;
    });
  }

  inputs[0].addEventListener('change', () => {

    const selind = inputs[0].options.selectedIndex;
    const txt = inputs[0].options[selind].text;
    const val = inputs[0].options[selind].value;

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    };


    if (val === 'wood') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.remove('slider-price2__item--hide');
          inputBox[5].classList.remove('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val === 'PVH') {
          inputBox[1].classList.remove('slider-price2__item--hide');
          inputBox[3].classList.remove('slider-price2__item--hide');
          inputBox[4].classList.add('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val === 'wood-al') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.remove('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val === 'al') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.add('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.remove('slider-price2__item--hide');
          inputBox[7].classList.remove('slider-price2__item--hide');
    }


    for (let j = 0; j < inputBox.length; j++) {

      if (inputBox[j].classList.contains('slider-price2__item--hide')) {
        inputs[j].disabled = 'disabled';
      };
    };
  });

  tipCommunication.addEventListener('change', () => {

    const ind = tipCommunication.options.selectedIndex;
    const {text} = tipCommunication.options[ind];
    const {value} = tipCommunication.options[ind];

    for (let i = 0; i < inputs2.length; i++) {
      inputs2[i].disabled = false;
    };


    if (value === 'mob') {
          inputBox2[4].classList.remove('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value === 'whats') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.remove('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value === 'vk') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.remove('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value === 'inst') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.remove('slider-price3__item--hide');
    }


    for (let j = 0; j < inputs2.length; j++) {

      if (inputBox2[j+4].classList.contains('slider-price3__item--hide')) {
        inputs2[j].disabled = 'disabled';
      };
    };
  });
};

function geo() {

  const geo = document.querySelector('.header-form__select');
  const adress = document.querySelectorAll('.adres');
  const tel = document.querySelectorAll('.phone');
  const map = document.querySelectorAll('.iframe');
  const sity = document.querySelector('.footer-info__sity');

  geo.addEventListener('change', () => {

    const selind = geo.options.selectedIndex;
    const txt = geo.options[selind].text;
    const val = geo.options[selind].value;


    if (val == 'Astrakhan') {

      adress[0].classList.remove('adres--hide');
      adress[1].classList.add('adres--hide');
      adress[2].classList.remove('adres--hide');
      adress[3].classList.add('adres--hide');
      tel[0].classList.remove('phone--hide');
      tel[1].classList.add('phone--hide');
      tel[2].classList.remove('phone--hide');
      tel[3].classList.add('phone--hide');
      tel[4].classList.remove('phone--hide');
      tel[5].classList.add('phone--hide');
      map[0].classList.remove('iframe--hide');
      map[1].classList.add('iframe--hide');
      sity.innerHTML='Ваш город: Астрахань';
    };

    if (val == 'Atirau') {

      adress[0].classList.add('adres--hide');
      adress[1].classList.remove('adres--hide');
      adress[2].classList.add('adres--hide');
      adress[3].classList.remove('adres--hide');
      tel[0].classList.add('phone--hide');
      tel[1].classList.remove('phone--hide');
      tel[2].classList.add('phone--hide');
      tel[3].classList.remove('phone--hide');
      tel[4].classList.add('phone--hide');
      tel[5].classList.remove('phone--hide');
      map[0].classList.add('iframe--hide');
      map[1].classList.remove('iframe--hide');
      sity.innerHTML='Ваш город: Атырау';
    };
  });
};




geo();

if (document.querySelector('.catalog__box')) {
  catalogSlider();
};

if (document.querySelector('.price')) {
  price();
};

if (document.querySelector('.jaluzi-constructor')) {
  svgColor();
  construstor();
};

if (document.querySelector('.reviews')) {
  audio();
};

if (document.querySelector('.material')) {
  material();
};

if (document.querySelector('.portfolio')) {
  portfolio()
};

// scrit for review.
const reviewBtn = document.querySelector('.review__btn_send');
const modalReviewWindow = document.querySelector('.modal__window__reviews');
const closeBtn = document.querySelector('.reviews__modal__close');
const modalBackGround = document.querySelector('.modal__background');
const body = document.querySelector('body');

reviewBtn.addEventListener('click', () => {
  modalReviewWindow.classList.add('activ__review__window');
  modalBackGround.classList.add('activ__review__window');
	body.classList.add('relative__position');
});

closeBtn.addEventListener('click', () => {
  modalReviewWindow.classList.remove('activ__review__window');
  modalBackGround.classList.remove('activ__review__window');
  body.classList.remove('relative__position');
});

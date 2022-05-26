const swiper1 = new Swiper('.image-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  autoplay: {
    delay: 2000,
   }, 
  loop: true,
  effect: 'fade', 
  fadeEffect: { 
      crossFade: true,
    }      
});

const swiper2 = new Swiper('.about-image-slider', {
pagination: {
  el: '.about__item',
  clickable: true,
},
effect: 'fade',
fadeEffect: { 
    crossFade: true,
  }      
});

function addZero(num){ return (num > 9) ? num : '0' + num; };

const swiper3 = new Swiper('.coin-slider', {
loop: true,
autoplay: {
delay: 1000,
},
slidesPerView: 4,
});

const swiper4 = new Swiper('.download-slider', {
slidesPerView: 1,
centeredSlides: true,
initialSlide: 1,
slideToClickedSlide: true,
allowTouchMove: true,
breakpoints: {
  1050:{
    slidesPerView: 2,
    slideToClickedSlide: false,
    allowTouchMove: false,
  }
},
navigation: {
  nextEl: ".download-slide__next",
  prevEl: ".download-slide__prev",
},
});

if (window.matchMedia("(min-width: 600px").matches) {
} else {
const swiper6 = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },
});

const swiper5 = new Swiper('.why-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero
  },
});
}

const buttonCopy = document.querySelector('#button-copy');
const buttonCopyText = document.querySelector('.copy-button__text');

const clipboard = new ClipboardJS('#button-copy', {
text: function(trigger) {
  return document.getElementById('box').innerText.replace(/\n+/g,'\n');
}
});

function textBack() {
buttonCopyText.innerText = 'Copy snippet';
}

if(buttonCopy) {
buttonCopy.addEventListener('click', () => {
  buttonCopyText.innerText = 'Successfully copied to clipboard';
  setTimeout(textBack, 1500);
});
}
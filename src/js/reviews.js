import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import swiperRev from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/reviews';
const revGallery = document.querySelector('.js-reviews-list');

export async function getReviews() {
  const url = `${BASE_URL}${END_POINT}`;
  const { data } = await axios.get(url);
  return data;
}

function createMarkup(arr) {
  return arr
    .map(obj => {
      const { author, avatar_url, review } = obj;
      return `
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${avatar_url}"
   alt = "${author}"/>
   <h4 class="review-author ">${author}</h4>
   <p class="review-text">${review}</p>
</li>
`;
    })
    .join('');
}

async function renderPage() {
  try {
    const res = await getReviews();
    revGallery.insertAdjacentHTML('beforeend', createMarkup(res));
    reviewSwiper();
  } catch (error) {
    messageFinishedError(error);
    revGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`
    );
  }
}
renderPage();

function reviewSwiper() {
  const swiperReview = new swiperRev('.swiper-reviews', {
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
      forceToAxis: true,
    },
  });
}

const errorMsg = {
  messageSize: '16',
  messageLineHeight: '24',
  backgroundColor: 'rgb(239, 64, 64)',
  messageColor: 'rgb(255, 255, 255)',
  titleColor: 'rgb(255, 255, 255)',
  position: 'topRight',
  close: 'rgb(255, 255, 255)',
  maxWidth: '432px',
};

function messageFinishedError(error) {
  errorMsg.message = `Sorry, ${error} reviews not found!`;
  iziToast.error(errorMsg);
}

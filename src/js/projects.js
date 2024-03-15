import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
];
const swiperWrapper = document.querySelector('.swiper-wrapper');

function imageTemplate(img) {
  return `
    <div class="swiper-slide">
      <img width="311" height="195" src="${img.original}" alt="${img.description}">
    </div>`;
}

function imagesTemplate(array) {
  return array.map(imageTemplate).join('');
}

function imagesCreate(array) {
  const markup = imagesTemplate(array);
  swiperWrapper.innerHTML = markup;
}

imagesCreate(images);

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 10,
});

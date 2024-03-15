import Swiper from 'swiper';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
];

const imageList = document.querySelector('.swiper-wrapper');

images.forEach(image => {
  const listItem = document.createElement('div');
  listItem.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = image.preview;
  img.alt = image.description;
  img.classList.add('gallery-image');

  listItem.appendChild(img);
  imageList.appendChild(listItem);
});

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import './accordion';


const skillsList = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', 'Soft skills', 'TypeScript'];

const aboutSkillsList = document.querySelector('.about-swiper-list')

function addSwiper() {
  const aboutSwiper = new Swiper('.about-swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    speed: 400,
    slidesPerView: 'auto',
    loop: true,
    loopAddBlankSlides: true,
    navigation: {
      nextEl: '.next-btn',
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
      sensitivity: 1,
    },
  });
}

function aboutRender(skillsList, query) {
  const skillsListMarkup = skillsList.map((el) => {
    return `<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${el}</p></li>`
  }).join('')

  query.insertAdjacentHTML("beforeend", skillsListMarkup);
}

aboutRender(skillsList, aboutSkillsList);
addSwiper();
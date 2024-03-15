import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import './accordion';


const skillsList = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', 'Soft skills', 'TypeScript'];

const aboutSkillsList = document.querySelector('.about-swiper-list')


function addSwiper() {
  const aboutNextBtn = document.querySelector('.next-btn')

  const aboutSwiper = new Swiper('.about-swiper', {
  
    speed: 400,
    slidesPerView: 'auto',
    loop: true,
    loopAddBlankSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    modules: [Navigation],
    
  });
  
  aboutNextBtn.addEventListener('click', () => {
    aboutSwiper.slideNext()
  })


}

function aboutRender(skillsList, query) {
  const skillsListMarkup = skillsList.map((el) => {
    return `<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${el}</p></li>`
  }).join('')

  query.insertAdjacentHTML("beforeend", skillsListMarkup);
}

aboutRender(skillsList, aboutSkillsList);
addSwiper();
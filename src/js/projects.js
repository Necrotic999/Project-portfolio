import SwiperProject from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import imgs from './imgs';

const projectsEl = document.querySelector('.project-swiper-wrapper');

const projects = [
  {
    title: 'Project 1',
    skills: ['#react', '#js', '#node&nbsp;js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com/Necrotic999/Project-portfolio',
    image: {
      tell1: imgs.pr1Tell1,
      tell2: imgs.pr1Tell2,
      tab1: imgs.pr1Desk1,
      tab2: imgs.pr1Desk2,
    },
  },
  {
    title: 'Project 2',
    skills: ['#react', '#js', '#node js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com/Necrotic999/Project-portfolio',
    image: {
      tell1: imgs.pr2Tell1,
      tell2: imgs.pr2Tell2,
      tab1: imgs.pr2Desk1,
      tab2: imgs.pr2Desk2,
    },
  },
  {
    title: 'Project 3',
    skills: ['#react', '#js', '#node js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com/Necrotic999/Project-portfolio',
    image: {
      tell1: imgs.pr3Tell1,
      tell2: imgs.pr3Tell2,
      tab1: imgs.pr3Desk1,
      tab2: imgs.pr3Desk2,
    },
  },
];

function createProjectMarkup(project) {
  const skillsList = project.skills
    .map(skill => `<li class="project-card">${skill}</li>`)
    .join('');

  return `
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="cards-container-projects">
     ${skillsList}
    </ul>
    <p class="title-project">${project.description}</p>
      <a href="${project.githubLink}" target="_blank" class="see-project">See project</a>
      </div>

      <div class="container-projects-imgs">
      <picture>
        <source
        media="(min-width: 768px)"
          srcset="${project.image.tab1} 1x,
          ${project.image.tab2} 2x "
           type="image/webp" />
        <img
          class="projects-img"
          loading="lazy"
          src="${project.image.tell1}"
          alt="${project.title}"
          srcset="${project.image.tell2} 2x"
        />
      </picture>
     </div>
     
    </div>
  `;
}

const projectsMarkup = projects.map(createProjectMarkup).join('');

projectsEl.innerHTML = projectsMarkup;

const swiper = new SwiperProject('.project-swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],

  slidesPerView: 1,
  direction: 'horizontal',
  speed: 500,
  spaceBetween: 20,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-btn-next-projects',
    prevEl: '.swiper-btn-prev-projects',
  },
  keyboard: {
    enabled: true,
  },

  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
});
// const projectSwiperContainer = document.querySelector(
//   '.project-button-container'
// );
// projectSwiperContainer.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//   if (event.key === 'Tab') {
//     const prevBtn = document.querySelector('.swiper-btn-prev-projects');
//     const nextBtn = document.querySelector('.swiper-btn-next-projects');
//     if (document.activeElement === prevBtn) {
//       nextBtn.focus();
//     } else if (document.activeElement === nextBtn) {
//       prevBtn.focus();
//     }
//   }
// }

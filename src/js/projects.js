import SwiperProject from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const projectsEl = document.querySelector('.project-swiper-wrapper');

const projects = [
  {
    title: 'Project 1',
    skills: ['#react', '#js', '#node&nbsp;js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com',
    image: '../img/projects/Petlove-tell1@1x.jpg',
  },
  {
    title: 'Project 2',
    skills: ['#react', '#js', '#node js', '#git'],
    description: 'Programming Across Borders: Ideas, Technologies, Innovations',
    githubLink: 'https://github.com',
    image: '../img/projects/ReadJourney-tell 1@1x.jpg',
  },
  {
    title: 'Project 3',
    skills: ['#react', '#js', '#node js', '#git'],
    description: 'Programming Across Borders: Ideas, Technologies, Innovations',
    githubLink: 'https://github.com',
    image: '../img/projects/Register-tell1@1x.jpg',
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
     
      <div class="container-projects-imgs">
      <img class="projects-img" srcset="" src="${project.image}" alt="${project.title}" loading="lazy" >
     </div>
      </div>
    </div>
  `;
}

const projectsMarkup = projects.map(createProjectMarkup).join('');

projectsEl.innerHTML = projectsMarkup;

const swiper = new SwiperProject('.project-swiper-container', {
  loop: true,
  direction: 'horizontal',
  speed: 500,
  spaceBetween: 20,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next-project',
    prevEl: '.swiper-button-prev-project',
  },
  keyboard: {
    enabled: true,
  },

  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
  modules: [Navigation, Keyboard, Mousewheel],

  on: {
    slideChange: function () {
      const prevButton = document.querySelector('.projects-swiper-btn-prev');
      const nextButton = document.querySelector('.projects-swiper-btn-next');
      if (this.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
      }
      if (this.isEnd) {
        nextButton.classList.add('swiper-button-disabled');
      } else {
        nextButton.classList.remove('swiper-button-disabled');
      }
    },
  },
});

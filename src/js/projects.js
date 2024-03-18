import SwiperProject from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const projectsEl = document.querySelector('.project-swiper-wrapper');

const projects = [
  {
    title: 'Project 1',
    skills: ['#react', '#js', '#node&nbsp;js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com',
    image: {
      tell1: '../img/projects/readjourney-tell1@1x.webp',
      tell2: '../img/projects/readjourney-tell2@2x.webp',
      tab1: '../img/projects/readjourney-tab-desk1@1x.webp',
      tab2: '../img/projects/readjourney-tab-desk2@2x.webp',
    },
  },
  {
    title: 'Project 2',
    skills: ['#react', '#js', '#node js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com',
    image: {
      tell1: '../img/projects/petlove-tell1@1x.webp',
      tell2: '../img/projects/petlove-tell2@2x.webp',
      tab1: '../img/projects/petlove-tablet-desck1@1x.webp',
      tab2: '../img/projects/petlove-tablet-desck2@2x.webp',
    },
  },
  {
    title: 'Project 3',
    skills: ['#react', '#js', '#node js', '#git'],
    description:
      'Programming Across<br>Borders: Ideas,<br> Technologies, Innovations',
    githubLink: 'https://github.com',
    image: {
      tell1: '../img/projects/register-tell1@1x.webp',
      tell2: '../img/projects/register-tell2@2x.webp',
      tab1: '../img/projects/register-tablet-desck1@1x.webp',
      tab2: '../img/projects/register-tablet-desck2@2x.webp',
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
  // centeredSlides: true,

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

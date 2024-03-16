import SwiperProject from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  {
    title: 'Project 1',
    skills: ['#react', '#js', '#node js', '#git'],
    description: 'Programming Across Borders: Ideas, Technologies, Innovations',
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
    .map(skill => `<li class="button-project">${skill}</li>`)
    .join('');

  return `
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="buttons-container-projects">
     ${skillsList}
    </ul>
    <p class="title-project">${project.description}</p>
      <a href="${project.githubLink}" target="_blank" class="see-project">See project</a>
      </div>
      <div class=container-projects-imgs>
      <img src="${project.image}" alt="${project.title}" class=projects-img>
     </div>
    </div>
  `;
}

const projectsMarkup = projects.map(createProjectMarkup).join('');

const projEl = document.querySelector('.project-swiper-wrapper');

projEl.innerHTML = projectsMarkup;

new SwiperProject('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination],
});

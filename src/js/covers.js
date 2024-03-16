let images = document.querySelectorAll('.project-item-img');
let observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.isIntersecting
        ? images.forEach(item => item.classList.add('animation'))
        : images.forEach(item => item.classList.remove('animation'));
    });
  },
  {
    threshold: 0.05,
  }
);
const section = document.querySelector('.covers');
observer.observe(section);

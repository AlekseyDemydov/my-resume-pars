document.addEventListener('DOMContentLoaded', () => {
  const projectItem = document.querySelectorAll('.res-content-project-item');

  const scrollAnimation = () => {
    let center = window.innerHeight / 4;
    let projectCenter = center + window.scrollY;
    projectItem.forEach(el => {
      let scrollTop = el.offsetTop + el.offsetHeight;
      if (projectCenter > scrollTop) {
        el.classList.add('animation');
      } else {
        el.classList.remove('animation');
      }
    });
  };
  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
  });
});

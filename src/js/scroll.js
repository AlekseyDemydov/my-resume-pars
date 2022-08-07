document.addEventListener('DOMContentLoaded', () => {
  const projectItem = document.querySelectorAll('.res-content-project-item');

  const scrollAnimation = () => {
    let projectCenter = window.innerHeight / 2 + window.scrollY;
    projectItem.forEach(el => {
      let scrollTop = el.offsetTop + el.offsetHeight;
      if (projectCenter >= scrollTop) {
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

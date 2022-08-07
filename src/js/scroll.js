document.addEventListener('DOMContentLoaded', () => {
  const projectItem = document.querySelectorAll('.res-content-project-item');
  const photo = document.querySelector('.photo');

  const scrollAnimationPhoto = () => {
    let scrollPh = window.scrollY;
    console.log(scrollPh);
    let photoCenter = 0;
    console.log(photoCenter);
    if (scrollPh === photoCenter) {
      photo.classList.add('active');
    } else {
      photo.classList.remove('active');
    }
  };
  const scrollAnimationProject = () => {
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

  window.addEventListener('scroll', () => {
    scrollAnimationProject();
    scrollAnimationPhoto();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectItem = document.querySelectorAll('.res-content-project-item');
  const photo = document.querySelector('.photo');
  const contacts = document.querySelector('.contacts');

  let photoCenter = photo.offsetHeight;
  let scrollPh = window.scrollY + photoCenter;

  if (scrollPh === photoCenter) {
    photo.classList.add('activeLeft');
    contacts.classList.add('activeRight');
  }
  const scrollAnimationPhoto = () => {
    let photoCenter = photo.offsetHeight;
    let scrollPh = window.scrollY;
    if (scrollPh <= photoCenter) {
      photo.classList.add('activeLeft');
      contacts.classList.add('activeRight');
    } else {
      photo.classList.remove('activeLeft');
      contacts.classList.remove('activeRight');
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

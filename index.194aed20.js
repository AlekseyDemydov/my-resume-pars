document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".item"),e=document.querySelector(".photo"),i=document.querySelector(".contacts"),s=document.querySelector(".tech-skills"),a=document.querySelector(".soft-skills"),c=e.offsetHeight;window.scrollY+c===c&&(e.classList.add("activeLeft"),i.classList.add("activeRight"),s.classList.add("activeLeft"),a.classList.add("activeRight"));var o=window.innerHeight/4+window.scrollY;t.forEach((function(t){var e=t.offsetTop+t.offsetHeight;o>e&&t.classList.add("animation")})),window.addEventListener("scroll",(function(){var c;c=window.innerHeight/4+window.scrollY,t.forEach((function(t){var e=t.offsetTop+t.offsetHeight;c>e?t.classList.add("animation"):t.classList.remove("animation")})),function(){var t=window.scrollY,c=s.offsetHeight;(t+c)/5<=c?(e.classList.add("activeLeft"),i.classList.add("activeRight"),s.classList.add("activeLeft")):(e.classList.remove("activeLeft"),i.classList.remove("activeRight"),s.classList.remove("activeLeft"));var o=a.offsetHeight,n=t+o;n>o&&a.classList.add("activeRight"),n>1e3&&a.classList.remove("activeRight")}()}))}));
//# sourceMappingURL=index.194aed20.js.map

document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".item"),e=document.querySelector(".photo"),s=document.querySelector(".contacts"),i=document.querySelector(".tech-skills"),o=document.querySelector(".soft-skills");let c=e.offsetHeight;window.scrollY+c===c&&(e.classList.add("activeLeft"),s.classList.add("activeRight"),i.classList.add("activeLeft"),o.classList.add("activeRight"));let l=window.innerHeight/4+window.scrollY;t.forEach((t=>{let e=t.offsetTop+t.offsetHeight;l>e&&t.classList.add("animation")}));window.addEventListener("scroll",(()=>{(()=>{let e=window.innerHeight/4+window.scrollY;t.forEach((t=>{let s=t.offsetTop+t.offsetHeight;e>s?t.classList.add("animation"):t.classList.remove("animation")}))})(),(()=>{let t=window.scrollY,c=i.offsetHeight;(t+c)/5<=c?(e.classList.add("activeLeft"),s.classList.add("activeRight"),i.classList.add("activeLeft")):(e.classList.remove("activeLeft"),s.classList.remove("activeRight"),i.classList.remove("activeLeft"));let l=o.offsetHeight;console.log("softSkilsCenter",l);let a=t+l;console.log("scrollSoft",a),a>l&&o.classList.add("activeRight"),a>1e3&&o.classList.remove("activeRight")})()}))}));
//# sourceMappingURL=index.f08ed95c.js.map
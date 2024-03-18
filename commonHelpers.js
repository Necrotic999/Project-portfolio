import{A as m,S as g,N as v,K as b,M as w}from"./assets/vendor-e47d4a2a.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const h=document.querySelector(".header-burger"),u=document.querySelector(".modal"),j=document.querySelector(".menu-link");h.addEventListener("click",t=>{u.classList.add("active")});j.addEventListener("click",t=>{u.classList.toggle("active")});u.addEventListener("click",t=>{t.target!==t.currentTarget&&u.classList.remove("active")});new m(".accordion-container-first",{openOnInit:[0]});const y=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],S=document.querySelector(".about-swiper-list");function E(){const t=document.querySelector(".next-btn"),i=new g(".about-swiper",{speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".swiper-button-next"},modules:[v]});t.addEventListener("click",()=>{i.slideNext()})}function k(t,i){const n=t.map(a=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${a}</p></li>`).join("");i.insertAdjacentHTML("beforeend",n)}k(y,S);E();const q=document.querySelector(".project-swiper-wrapper"),A=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/Petlove-tell1@1x.jpg"},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across Borders: Ideas, Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/ReadJourney-tell 1@1x.jpg"},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across Borders: Ideas, Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/Register-tell1@1x.jpg"}];function _(t){return`
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="cards-container-projects">
     ${t.skills.map(n=>`<li class="project-card">${n}</li>`).join("")}
    </ul>
    <p class="title-project">${t.description}</p>
      <a href="${t.githubLink}" target="_blank" class="see-project">See project</a>
     
      <div class="container-projects-imgs">
      <img src="${t.image}" alt="${t.title}" class="projects-img">
     </div>
      </div>
    </div>
  `}const x=A.map(_).join("");q.innerHTML=x;new g(".swiper-container",{loop:!0,direction:"horizontal",speed:500,spaceBetween:20,centeredSlides:!0,navigation:{nextEl:".swiper-button-next-project",prevEl:".swiper-button-prev-project"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},modules:[v,b,w]});new m(".faq-list-one",{duration:400,showMultiple:!0});new m(".faq-list-two",{duration:400,showMultiple:!0});let f=document.querySelectorAll(".project-item-img"),P=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?f.forEach(n=>n.classList.add("animation")):f.forEach(n=>n.classList.remove("animation"))})},{threshold:.05});const I=document.querySelector(".covers");P.observe(I);document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("work-form");t.addEventListener("submit",i);async function i(e){e.preventDefault(),n()===0?d(t.querySelector("._req"),"Success!"):alert("Заполните обязательные поля")}function n(e){let o=0,c=document.querySelectorAll("._req");for(let p=0;p<c.length;p++){const l=c[p];r(l),l.classList.contains("_email")?s(l)&&(a(l,"Invalid email, try again"),o++):l.value===""&&(a(l,"This field is required"),o++)}return o}function a(e,o){e.parentElement.classList.add("_error"),e.classList.add("_error");const c=document.createElement("label");c.textContent=o,c.classList.add("_error"),e.parentElement.append(c)}function r(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error");const o=e.parentElement.querySelector("label._error");o&&o.remove()}function s(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function d(e,o){L(e),e.parentElement.classList.add("_approved"),e.classList.add("_approved");const c=document.createElement("label");c.textContent=o,c.classList.add("_approved"),e.parentElement.append(c)}function L(e){e.parentElement.classList.remove("_approved"),e.classList.remove("_approved");const o=e.parentElement.querySelector("label._approved");o&&o.remove()}});
//# sourceMappingURL=commonHelpers.js.map

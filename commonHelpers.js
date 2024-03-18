import{A as p,S as m,N as g,K as v,M as f,i as k,a as w}from"./assets/vendor-6c23e1b5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const j=document.querySelector(".header-burger"),l=document.querySelector(".modal"),S=document.querySelector(".menu-link");j.addEventListener("click",e=>{l.classList.add("active")});S.addEventListener("click",e=>{l.classList.toggle("active")});l.addEventListener("click",e=>{e.target!==e.currentTarget&&l.classList.remove("active")});new p(".accordion-container-first",{openOnInit:[0]});const E=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],A=document.querySelector(".about-swiper-list");function M(){new m(".about-swiper",{modules:[g,v,f],speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:1}})}function T(e,r){const s=e.map(a=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${a}</p></li>`).join("");r.insertAdjacentHTML("beforeend",s)}T(E,A);M();const B=document.querySelector(".project-swiper-wrapper"),P=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/Petlove-tell1@1x.jpg"},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across Borders: Ideas, Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/ReadJourney-tell 1@1x.jpg"},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across Borders: Ideas, Technologies, Innovations",githubLink:"https://github.com",image:"../img/projects/Register-tell1@1x.jpg"}];function x(e){return`
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="cards-container-projects">
     ${e.skills.map(s=>`<li class="project-card">${s}</li>`).join("")}
    </ul>
    <p class="title-project">${e.description}</p>
      <a href="${e.githubLink}" target="_blank" class="see-project">See project</a>
     
      <div class="container-projects-imgs">
      <img class="projects-img" srcset="" src="${e.image}" alt="${e.title}" loading="lazy" >
     </div>
      </div>
    </div>
  `}const C=P.map(x).join("");B.innerHTML=C;new m(".project-swiper-container",{modules:[g,v,f],slidesPerView:1,direction:"horizontal",speed:500,spaceBetween:20,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}});new p(".faq-list-one",{duration:400,showMultiple:!0});new p(".faq-list-two",{duration:400,showMultiple:!0});let h=document.querySelectorAll(".project-item-img"),q=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?h.forEach(s=>s.classList.add("animation")):h.forEach(s=>s.classList.remove("animation"))})},{threshold:.05});const _=document.querySelector(".covers");q.observe(_);const $="https://portfolio-js.b.goit.study/api",I="/reviews",L=document.querySelector(".js-reviews-list");async function H(){const e=`${$}${I}`,{data:r}=await w.get(e);return r}function O(e){return e.map(r=>{const{author:s,avatar_url:a,review:t}=r;return`
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${a}"
   alt = "${s}"/>
   <h4 class="review-author ">${s}</h4>
   <p class="review-text">${t}</p>
</li>
`}).join("")}async function N(){try{const e=await H();L.insertAdjacentHTML("beforeend",O(e)),R()}catch(e){F(e),L.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}}N();function R(){new m(".swiper-reviews",{modules:[g,v,f],direction:"horizontal",speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}const b={messageSize:"16",messageLineHeight:"24",backgroundColor:"rgb(239, 64, 64)",messageColor:"rgb(255, 255, 255)",titleColor:"rgb(255, 255, 255)",position:"topRight",close:"rgb(255, 255, 255)",maxWidth:"432px"};function F(e){b.message=`Sorry, ${e} reviews not found!`,k.error(b)}const c=document.querySelector(".work-together-form"),n=c.elements.email,o=c.elements.userComment,d=document.querySelector(".modal-container");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";c.addEventListener("submit",z);n.addEventListener("input",V);o.addEventListener("input",K);window.addEventListener("keydown",Q);async function z(e){if(e.preventDefault(),!n.value.trim()||!o.value.trim())return y("Some fields empty...");if(o.value.trim().length<3)return y("fill out the form correctly");const r={email:n.value.trim(),comment:o.value.trim()};try{const s=await D(r);J(),c.reset();const a=G(s);d.innerHTML=a,U()}catch{alert("ooops... something went wrong")}}function y(e){return k.error({title:"",backgroundColor:"#c55f5f",message:e,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function V(){n.validity.valid?n.value.trim()?(n.classList.remove("_error"),n.classList.add("_approved")):n.classList.remove("_error"):(n.classList.add("_error"),n.classList.remove("_approved"))}function K(){o.value.trim().length<3&&o.value.trim().length>0?(o.classList.add("_error"),o.classList.remove("_approved")):o.value.trim()?(o.classList.remove("_error"),o.classList.add("_approved")):o.classList.remove("_error")}async function D(e){return await w.post("/requests",e)}function J(){o.classList.remove("_approved"),n.classList.remove("_approved")}function U(){document.querySelector(".modal-overlay").addEventListener("click",W),document.querySelector(".close").addEventListener("click",X)}function G(e){return`
    <div class="modal-overlay">
      <div class="modal-content">
        <span class="close-btn">
          <svg class="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <h2 class="modal-title">${e.data.title}</h2>
        <p class="modal-message">
         ${e.data.message}
        </p>
      </div>
    </div>
  `}function Q(e){e.key==="Escape"&&(d.innerHTML="")}function W(e){e.currentTarget===e.target&&(d.innerHTML="")}function X(e){e.currentTarget===e.target&&(d.innerHTML="")}
//# sourceMappingURL=commonHelpers.js.map

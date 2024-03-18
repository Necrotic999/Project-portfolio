import{A as m,S as g,N as v,K as f,M as b,i as j,a as w}from"./assets/vendor-6c23e1b5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const k=document.querySelector(".header-burger"),l=document.querySelector(".modal"),S=document.querySelector(".menu-link");k.addEventListener("click",e=>{l.classList.add("active")});S.addEventListener("click",e=>{l.classList.toggle("active")});l.addEventListener("click",e=>{e.target!==e.currentTarget&&l.classList.remove("active")});new m(".accordion-container-first",{openOnInit:[0]});const x=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],E=document.querySelector(".about-swiper-list");function T(){new g(".about-swiper",{modules:[v,f,b],speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:1}})}function M(e,r){const s=e.map(a=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${a}</p></li>`).join("");r.insertAdjacentHTML("beforeend",s)}M(x,E);T();const $=document.querySelector(".project-swiper-wrapper"),B=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/readjourney-tell1@1x.webp",tell2:"../img/projects/readjourney-tell2@2x.webp",tab1:"../img/projects/readjourney-tab-desk1@1x.webp",tab2:"../img/projects/readjourney-tab-desk2@2x.webp"}},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/petlove-tell1@1x.webp",tell2:"../img/projects/petlove-tell2@2x.webp",tab1:"../img/projects/petlove-tablet-desck1@1x.webp",tab2:"../img/projects/petlove-tablet-desck2@2x.webp"}},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/register-tell1@1x.webp",tell2:"../img/projects/register-tell2@2x.webp",tab1:"../img/projects/register-tablet-desck1@1x.webp",tab2:"../img/projects/register-tablet-desck2@2x.webp"}}];function P(e){return`
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="cards-container-projects">
     ${e.skills.map(s=>`<li class="project-card">${s}</li>`).join("")}
    </ul>
    <p class="title-project">${e.description}</p>
      <a href="${e.githubLink}" target="_blank" class="see-project">See project</a>
      </div>

      <div class="container-projects-imgs">
      <picture>
        <source
        media="(min-width: 768px)"
          srcset="${e.image.tab1} 1x,
          ${e.image.tab2} 2x "
           type="image/webp" />
        <img
          class="projects-img"
          loading="lazy"
          src="${e.image.tell1}"
          alt="${e.title}"
          srcset="${e.image.tell2} 2x"
        />
      </picture>
     </div>
     
    </div>
  `}const C=B.map(P).join("");$.innerHTML=C;new g(".project-swiper-container",{modules:[v,f,b],slidesPerView:1,direction:"horizontal",speed:500,spaceBetween:20,navigation:{nextEl:".swiper-btn-next-projects",prevEl:".swiper-btn-prev-projects"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}});new m(".faq-list-one",{duration:400,showMultiple:!0});new m(".faq-list-two",{duration:400,showMultiple:!0});let h=document.querySelectorAll(".project-item-img"),q=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?h.forEach(s=>s.classList.add("animation")):h.forEach(s=>s.classList.remove("animation"))})},{threshold:.05});const A=document.querySelector(".covers");q.observe(A);const _="https://portfolio-js.b.goit.study/api",I="/reviews",y=document.querySelector(".js-reviews-list");async function H(){const e=`${_}${I}`,{data:r}=await w.get(e);return r}function O(e){return e.map(r=>{const{author:s,avatar_url:a,review:t}=r;return`
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${a}"
   alt = "${s}"/>
   <h3 class="review-author ">${s}</h3>
   <p class="review-text">${t}</p>
</li>
`}).join("")}async function N(){try{const e=await H();y.insertAdjacentHTML("beforeend",O(e)),R()}catch(e){z(e),y.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}}N();function R(){new g(".swiper-reviews",{modules:[v,f,b],direction:"horizontal",speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:1}})}const L={messageSize:"16",messageLineHeight:"24",backgroundColor:"rgb(239, 64, 64)",messageColor:"rgb(255, 255, 255)",titleColor:"rgb(255, 255, 255)",position:"topRight",close:"rgb(255, 255, 255)",maxWidth:"432px"};function z(e){L.message=`Sorry, ${e} reviews not found!`,j.error(L)}const c=document.querySelector(".work-together-form"),n=c.elements.email,o=c.elements.userComment,d=document.querySelector(".modal-container");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";c.addEventListener("submit",V);n.addEventListener("input",K);o.addEventListener("input",D);window.addEventListener("keydown",Q);async function V(e){if(e.preventDefault(),!n.value.trim()||!o.value.trim())return p("Some fields empty...");if(o.value.trim().length<3)return p("fill out the form correctly");const r={email:n.value.trim(),comment:o.value.trim()};try{const s=await F(r);U(),c.reset();const a=J(s);d.innerHTML=a,G()}catch{p("ooops... something went wrong")}}function p(e){return j.error({title:"",backgroundColor:"#c55f5f",message:e,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function K(){n.validity.valid?n.value.trim()?(n.classList.remove("_error"),n.classList.add("_approved")):n.classList.remove("_error"):(n.classList.add("_error"),n.classList.remove("_approved"))}function D(){o.value.trim().length<3&&o.value.trim().length>0?(o.classList.add("_error"),o.classList.remove("_approved")):o.value.trim()?(o.classList.remove("_error"),o.classList.add("_approved")):o.classList.remove("_error")}async function F(e){return await w.post("/requests",e)}function U(){o.classList.remove("_approved"),n.classList.remove("_approved")}function G(){document.querySelector(".modal-overlay").addEventListener("click",W),document.querySelector(".close").addEventListener("click",X)}function J(e){return`
    <div class="modal-overlay">
      <div class="modal-content">
        <span class="close-btn">
          <svg class="close" width="24" height="24">
            <use href="./img/icons/icons.svg#icon-x"></use>
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

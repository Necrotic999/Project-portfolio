import{A as m,S as g,N as v,K as b,M as f,i as j,a as w}from"./assets/vendor-af7de623.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const k=document.querySelector(".header-burger"),l=document.querySelector(".modal"),S=document.querySelector(".menu-link");k.addEventListener("click",e=>{l.classList.add("active")});S.addEventListener("click",e=>{l.classList.toggle("active")});l.addEventListener("click",e=>{e.target!==e.currentTarget&&l.classList.remove("active")});new m(".accordion-container-first",{openOnInit:[0]});const x=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],E=document.querySelector(".about-swiper-list");function T(){new g(".about-swiper",{modules:[v,b,f],speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:1}})}function M(e,r){const t=e.map(a=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${a}</p></li>`).join("");r.insertAdjacentHTML("beforeend",t)}M(x,E);T();const $=new IntersectionObserver(e=>{e.forEach(r=>{const t=document.querySelector(".about-wrapper");if(r.isIntersecting){t.classList.add("about-animate");return}t.classList.remove("about-animate")})});$.observe(document.querySelector(".about-par"));const q=document.querySelector(".project-swiper-wrapper"),B=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/readjourney-tell1@1x.webp",tell2:"../img/projects/readjourney-tell2@2x.webp",tab1:"../img/projects/readjourney-tab-desk1@1x.webp",tab2:"../img/projects/readjourney-tab-desk2@2x.webp"}},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/petlove-tell1@1x.webp",tell2:"../img/projects/petlove-tell2@2x.webp",tab1:"../img/projects/petlove-tablet-desck1@1x.webp",tab2:"../img/projects/petlove-tablet-desck2@2x.webp"}},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:"../img/projects/register-tell1@1x.webp",tell2:"../img/projects/register-tell2@2x.webp",tab1:"../img/projects/register-tablet-desck1@1x.webp",tab2:"../img/projects/register-tablet-desck2@2x.webp"}}];function P(e){return`
    <div class="swiper-slide project-swiper-slide">
    <div class="projects-container-content">
    <ul class="cards-container-projects">
     ${e.skills.map(t=>`<li class="project-card">${t}</li>`).join("")}
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
  `}const C=B.map(P).join("");q.innerHTML=C;new g(".project-swiper-container",{modules:[v,b,f],slidesPerView:1,direction:"horizontal",speed:500,spaceBetween:20,navigation:{nextEl:".swiper-btn-next-projects",prevEl:".swiper-btn-prev-projects"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}});new m(".faq-list-one",{duration:400,showMultiple:!0});new m(".faq-list-two",{duration:400,showMultiple:!0});let h=document.querySelectorAll(".project-item-img"),A=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?h.forEach(t=>t.classList.add("animation")):h.forEach(t=>t.classList.remove("animation"))})},{threshold:.05});const _=document.querySelector(".covers");A.observe(_);const I="https://portfolio-js.b.goit.study/api",O="/reviews",y=document.querySelector(".js-reviews-list");async function H(){const e=`${I}${O}`,{data:r}=await w.get(e);return r}function N(e){return e.map(r=>{const{author:t,avatar_url:a,review:s}=r;return`
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${a}"
   alt = "${t}"/>
   <h3 class="review-author ">${t}</h3>
   <p class="review-text">${s}</p>
</li>
`}).join("")}async function R(){try{const e=await H();y.insertAdjacentHTML("beforeend",N(e)),z()}catch(e){V(e),y.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}}R();function z(){new g(".swiper-reviews",{modules:[v,b,f],direction:"horizontal",speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:1}})}const L={messageSize:"16",messageLineHeight:"24",backgroundColor:"rgb(239, 64, 64)",messageColor:"rgb(255, 255, 255)",titleColor:"rgb(255, 255, 255)",position:"topRight",close:"rgb(255, 255, 255)",maxWidth:"432px"};function V(e){L.message=`Sorry, ${e} reviews not found!`,j.error(L)}const c=document.querySelector(".work-together-form"),n=c.elements.email,o=c.elements.userComment,d=document.querySelector(".modal-container");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";c.addEventListener("submit",K);n.addEventListener("input",D);o.addEventListener("input",F);window.addEventListener("keydown",W);async function K(e){if(e.preventDefault(),!n.value.trim()||!o.value.trim())return p("Some fields empty...");if(o.value.trim().length<3)return p("fill out the form correctly");const r={email:n.value.trim(),comment:o.value.trim()};try{const t=await U(r);G(),c.reset();const a=Q(t);d.innerHTML=a,J()}catch{p("ooops... something went wrong")}}function p(e){return j.error({title:"",backgroundColor:"#c55f5f",message:e,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function D(){n.validity.valid?n.value.trim()?(n.classList.remove("_error"),n.classList.add("_approved")):n.classList.remove("_error"):(n.classList.add("_error"),n.classList.remove("_approved"))}function F(){o.value.trim().length<3&&o.value.trim().length>0?(o.classList.add("_error"),o.classList.remove("_approved")):o.value.trim()?(o.classList.remove("_error"),o.classList.add("_approved")):o.classList.remove("_error")}async function U(e){return await w.post("/requests",e)}function G(){o.classList.remove("_approved"),n.classList.remove("_approved")}function J(){document.querySelector(".modal-overlay").addEventListener("click",X),document.querySelector(".close").addEventListener("click",Y)}function Q(e){return`
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
  `}function W(e){e.key==="Escape"&&(d.innerHTML="")}function X(e){e.currentTarget===e.target&&(d.innerHTML="")}function Y(e){e.currentTarget===e.target&&(d.innerHTML="")}
//# sourceMappingURL=commonHelpers.js.map

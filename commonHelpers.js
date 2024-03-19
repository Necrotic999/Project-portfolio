import{A as y,S as w,N as k,K as h,M as S,i as P,a as L}from"./assets/vendor-500a7ffd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const q=document.querySelector(".header-burger"),l=document.querySelector(".modal"),E=document.querySelector(".menu-link");q.addEventListener("click",e=>{l.classList.add("active")});E.addEventListener("click",e=>{l.classList.toggle("active")});l.addEventListener("click",e=>{e.target!==e.currentTarget&&l.classList.remove("active")});new y(".accordion-container-first",{openOnInit:[0]});const B=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],x=document.querySelector(".about-swiper-list");function I(){new w(".about-swiper",{modules:[k,h,S],speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:1}})}function N(e,r){const t=e.map(c=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${c}</p></li>`).join("");r.insertAdjacentHTML("beforeend",t)}N(B,x);I();const R=new IntersectionObserver(e=>{e.forEach(r=>{const t=document.querySelector(".about-wrapper");if(r.isIntersecting){t.classList.add("about-animate");return}t.classList.remove("about-animate")})});R.observe(document.querySelector(".about-par"));const C="/Project-portfolio/assets/readjourney-tell1@1x-567e5cd9.webp",H="/Project-portfolio/assets/readjourney-tell2@2x-f35c47c4.webp",M="/Project-portfolio/assets/readjourney-tab-desk1@1x-bcdfb875.webp",F="/Project-portfolio/assets/readjourney-tab-desk2@2x-1beadf96.webp",O="/Project-portfolio/assets/petlove-tell1@1x-44032472.webp",V="/Project-portfolio/assets/petlove-tell2@2x-7a49c9e7.webp",z="/Project-portfolio/assets/petlove-tablet-desck1@1x-c1356b51.webp",Y="/Project-portfolio/assets/petlove-tablet-desck2@2x-fda8c9d6.webp",D="data:image/webp;base64,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",Z="/Project-portfolio/assets/register-tell2@2x-30f2b0b5.webp",W="/Project-portfolio/assets/register-tablet-desck1@1x-101099d1.webp",X="/Project-portfolio/assets/register-tablet-desck2@2x-63427b1c.webp",i={pr1Tell1:C,pr1Tell2:H,pr1Desk1:M,pr1Desk2:F,pr2Tell1:O,pr2Tell2:V,pr2Desk1:z,pr2Desk2:Y,pr3Tell1:D,pr3Tell2:Z,pr3Desk1:W,pr3Desk2:X},J=document.querySelector(".project-swiper-wrapper"),G=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:i.pr1Tell1,tell2:i.pr1Tell2,tab1:i.pr1Desk1,tab2:i.pr1Desk2}},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:i.pr2Tell1,tell2:i.pr2Tell2,tab1:i.pr2Desk1,tab2:i.pr2Desk2}},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:i.pr3Tell1,tell2:i.pr3Tell2,tab1:i.pr3Desk1,tab2:i.pr3Desk2}}];function K(e){return`
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
  `}const U=G.map(K).join("");J.innerHTML=U;new w(".project-swiper-container",{modules:[k,h,S],slidesPerView:1,direction:"horizontal",speed:500,spaceBetween:20,centeredSlides:!0,navigation:{nextEl:".swiper-btn-next-projects",prevEl:".swiper-btn-prev-projects"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}});new y(".faq-list-one",{duration:400,showMultiple:!0});new y(".faq-list-two",{duration:400,showMultiple:!0});let j=document.querySelectorAll(".project-item-img"),Q=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?j.forEach(t=>t.classList.add("animation")):j.forEach(t=>t.classList.remove("animation"))})},{threshold:.05});const $=document.querySelector(".covers");Q.observe($);const _="https://portfolio-js.b.goit.study/api",ee="/reviews",T=document.querySelector(".js-reviews-list");async function te(){const e=`${_}${ee}`,{data:r}=await L.get(e);return r}function re(e){return e.map(r=>{const{author:t,avatar_url:c,review:s}=r;return`
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${c}"
   alt = "${t}"/>
   <h3 class="review-author ">${t}</h3>
   <p class="review-text">${s}</p>
</li>
`}).join("")}async function se(){try{const e=await te();T.insertAdjacentHTML("beforeend",re(e)),oe()}catch(e){ie(e),T.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}}se();function oe(){new w(".swiper-reviews",{modules:[k,h,S],direction:"horizontal",speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:1}})}const A={messageSize:"16",messageLineHeight:"24",backgroundColor:"rgb(239, 64, 64)",messageColor:"rgb(255, 255, 255)",titleColor:"rgb(255, 255, 255)",position:"topRight",close:"rgb(255, 255, 255)",maxWidth:"432px"};function ie(e){A.message=`Sorry, ${e} reviews not found!`,P.error(A)}const d=document.querySelector(".work-together-form"),a=d.elements.email,o=d.elements.userComment,p=document.querySelector(".modal-container"),m=document.querySelector(".invalid"),b=document.querySelector(".success"),f=document.querySelector(".invalidComment"),v=document.querySelector(".successComment");L.defaults.baseURL="https://portfolio-js.b.goit.study/api";d.addEventListener("submit",ne);a.addEventListener("input",ae);o.addEventListener("input",ce);window.addEventListener("keydown",fe);async function ne(e){if(e.preventDefault(),!a.value.trim()||!o.value.trim())return g("Some fields empty...");if(o.value.trim().length<3)return g("fill out the form correctly");const r={email:a.value.trim(),comment:o.value.trim()};try{const t=await le(r);de(),pe(),d.reset();const c=me(t);p.innerHTML=c,ue()}catch{g("ooops... something went wrong")}}function g(e){return P.error({title:"",backgroundColor:"#c55f5f",message:e,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function ae(){a.validity.valid?a.value.trim()?(a.classList.remove("_error"),a.classList.add("_approved"),b.style.opacity=100,m.style.opacity=0):(a.classList.remove("_error"),m.style.opacity=0):(a.classList.add("_error"),a.classList.remove("_approved"),b.style.opacity=0,m.style.opacity=100)}function ce(){o.value.trim().length<3&&o.value.trim().length>0?(o.classList.add("_error"),o.classList.remove("_approved"),v.style.opacity=0,f.style.opacity=100):o.value.trim()?(o.classList.remove("_error"),o.classList.add("_approved"),v.style.opacity=100,f.style.opacity=0):(o.classList.remove("_error"),f.style.opacity=0)}async function le(e){return await L.post("/requests",e)}function de(){o.classList.remove("_approved"),a.classList.remove("_approved")}function pe(){b.style.opacity=0,v.style.opacity=0}function ue(){document.querySelector(".modal-overlay").addEventListener("click",ge),document.querySelector(".close").addEventListener("click",be)}function me(e){return`
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
  `}function fe(e){e.key==="Escape"&&(p.innerHTML="")}function ge(e){e.currentTarget===e.target&&(p.innerHTML="")}function be(e){e.currentTarget===e.target&&(p.innerHTML="")}
//# sourceMappingURL=commonHelpers.js.map

import{A as g,S as v,N as b,K as f,M as w,i as S,a as h}from"./assets/vendor-af7de623.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const x=document.querySelector(".header-burger"),c=document.querySelector(".modal"),$=document.querySelector(".menu-link");x.addEventListener("click",e=>{c.classList.add("active")});$.addEventListener("click",e=>{c.classList.toggle("active")});c.addEventListener("click",e=>{e.target!==e.currentTarget&&c.classList.remove("active")});new g(".accordion-container-first",{openOnInit:[0]});const E=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","TypeScript"],T=document.querySelector(".about-swiper-list");function M(){new v(".about-swiper",{modules:[b,f,w],speed:400,slidesPerView:"auto",loop:!0,loopAddBlankSlides:!0,navigation:{nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:1}})}function P(e,r){const t=e.map(l=>`<li class="swiper-slide about-swiper-list-item"><p class="about-swiper-list-item-par">${l}</p></li>`).join("");r.insertAdjacentHTML("beforeend",t)}P(E,T);M();const q=new IntersectionObserver(e=>{e.forEach(r=>{const t=document.querySelector(".about-wrapper");if(r.isIntersecting){t.classList.add("about-animate");return}t.classList.remove("about-animate")})});q.observe(document.querySelector(".about-par"));const y="/Project-portfolio/assets/petlove-tablet-desck1@1x-c1356b51.webp",i=y.slice(0,y.lastIndexOf("/")+1),B=document.querySelector(".project-swiper-wrapper"),C=[{title:"Project 1",skills:["#react","#js","#node&nbsp;js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:`${i}readjourney-tell1@1x.webp`,tell2:`${i}readjourney-tell2@2x.webp`,tab1:`${i}readjourney-tab-desk1@1x.webp`,tab2:`${i}readjourney-tab-desk2@2x.webp`}},{title:"Project 2",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:`${i}petlove-tell1@1x.webp`,tell2:`${i}petlove-tell2@2x.webp`,tab1:`${i}petlove-tablet-desck1@1x.webp`,tab2:`${i}petlove-tablet-desck2@2x.webp`}},{title:"Project 3",skills:["#react","#js","#node js","#git"],description:"Programming Across<br>Borders: Ideas,<br> Technologies, Innovations",githubLink:"https://github.com",image:{tell1:`${i}register-tell1@1x.webp`,tell2:`${i}register-tell2@2x.webp`,tab1:`${i}register-tablet-desck1@1x.webp`,tab2:`${i}register-tablet-desck2@2x.webp`}}];function A(e){return`
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
  `}const I=C.map(A).join("");B.innerHTML=I;new v(".project-swiper-container",{modules:[b,f,w],slidesPerView:1,direction:"horizontal",speed:500,spaceBetween:20,centeredSlides:!0,navigation:{nextEl:".swiper-btn-next-projects",prevEl:".swiper-btn-prev-projects"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}});new g(".faq-list-one",{duration:400,showMultiple:!0});new g(".faq-list-two",{duration:400,showMultiple:!0});let L=document.querySelectorAll(".project-item-img"),_=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting?L.forEach(t=>t.classList.add("animation")):L.forEach(t=>t.classList.remove("animation"))})},{threshold:.05});const O=document.querySelector(".covers");_.observe(O);const H="https://portfolio-js.b.goit.study/api",N="/reviews",k=document.querySelector(".js-reviews-list");async function R(){const e=`${H}${N}`,{data:r}=await h.get(e);return r}function z(e){return e.map(r=>{const{author:t,avatar_url:l,review:s}=r;return`
<li class="gallery-item swiper-slide">
   <img class="gallery-image"
   src = "${l}"
   alt = "${t}"/>
   <h3 class="review-author ">${t}</h3>
   <p class="review-text">${s}</p>
</li>
`}).join("")}async function V(){try{const e=await R();k.insertAdjacentHTML("beforeend",z(e)),K()}catch(e){D(e),k.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}}V();function K(){new v(".swiper-reviews",{modules:[b,f,w],direction:"horizontal",speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0,sensitivity:1}})}const j={messageSize:"16",messageLineHeight:"24",backgroundColor:"rgb(239, 64, 64)",messageColor:"rgb(255, 255, 255)",titleColor:"rgb(255, 255, 255)",position:"topRight",close:"rgb(255, 255, 255)",maxWidth:"432px"};function D(e){j.message=`Sorry, ${e} reviews not found!`,S.error(j)}const d=document.querySelector(".work-together-form"),a=d.elements.email,o=d.elements.userComment,u=document.querySelector(".modal-container");h.defaults.baseURL="https://portfolio-js.b.goit.study/api";d.addEventListener("submit",F);a.addEventListener("input",U);o.addEventListener("input",G);window.addEventListener("keydown",Y);async function F(e){if(e.preventDefault(),!a.value.trim()||!o.value.trim())return m("Some fields empty...");if(o.value.trim().length<3)return m("fill out the form correctly");const r={email:a.value.trim(),comment:o.value.trim()};try{const t=await J(r);Q(),d.reset();const l=X(t);u.innerHTML=l,W()}catch{m("ooops... something went wrong")}}function m(e){return S.error({title:"",backgroundColor:"#c55f5f",message:e,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function U(){a.validity.valid?a.value.trim()?(a.classList.remove("_error"),a.classList.add("_approved")):a.classList.remove("_error"):(a.classList.add("_error"),a.classList.remove("_approved"))}function G(){o.value.trim().length<3&&o.value.trim().length>0?(o.classList.add("_error"),o.classList.remove("_approved")):o.value.trim()?(o.classList.remove("_error"),o.classList.add("_approved")):o.classList.remove("_error")}async function J(e){return await h.post("/requests",e)}function Q(){o.classList.remove("_approved"),a.classList.remove("_approved")}function W(){document.querySelector(".modal-overlay").addEventListener("click",Z),document.querySelector(".close").addEventListener("click",ee)}function X(e){return`
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
  `}function Y(e){e.key==="Escape"&&(u.innerHTML="")}function Z(e){e.currentTarget===e.target&&(u.innerHTML="")}function ee(e){e.currentTarget===e.target&&(u.innerHTML="")}
//# sourceMappingURL=commonHelpers.js.map

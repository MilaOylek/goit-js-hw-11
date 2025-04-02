import{a as p,S as y,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="49372169-96077d899f4beec9c9139b15f";function L(i){const o={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:o}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}const u=document.querySelector(".list-gallery"),f=document.querySelector(".loader");let b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function q(i){const o=i.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img class="gallery-img" src="${t}" alt="${e}" />
            <div class="gallery-info">
              <p>Likes<br> ${r}</p>
              <p>Views<br> ${s}</p>
              <p>Comments<br> ${d}</p>
              <p>Downloads<br> ${m}</p>
            </div>
          </a>
        </li>
      `).join("");u.innerHTML=o,b.refresh()}function S(){u.innerHTML=""}function v(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const l=document.querySelector(".form"),P=l.querySelector("input");l.addEventListener("submit",i=>{i.preventDefault();const o=P.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query."});return}v(),S(),L(o).then(t=>{if(c(),t.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}q(t.hits)}).catch(()=>{c(),n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{l.reset()})});
//# sourceMappingURL=index.js.map

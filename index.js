import{a as d,S as u,i}from"./assets/vendor-BozxXNYG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="50582422-1579f90b4d4d4016b97d9d478",p="https://pixabay.com/api/";function m(s){return d.get(p,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(r=>`
         <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function y(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!",position:"topRight"});return}y(),b(),m(o).then(r=>{r.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",theme:"dark"}):(h(r.hits),s.target.elements["search-text"].value="")}).catch(r=>{i.error({message:"An error occurred while loading images. Please try again!",position:"topRight"}),console.error("Error fetching images:",r)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map

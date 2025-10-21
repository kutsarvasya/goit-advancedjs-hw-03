import{i as l,S as m}from"./assets/vendor-BAJr6O-F.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=s=>{const o=new URLSearchParams({key:"36255755-2fbf092869753c62ec4fb113a",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},p=s=>s.map(o=>{const{webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:d}=o;return`<li class="photo-card">
   <a class="gallery-link" href="${i}">
  <img src='${t}' alt = "${e}" width="340" height="230" loading = "lazy" />
     </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${r}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${a}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${u}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${d}
    </p>
  </div>
</li>`}).join(""),c={loader:document.querySelector(".js-loader")},f={show(){c.loader.classList.remove("hidden")},hide(){c.loader.classList.add("hidden")}},n={formEl:document.querySelector(".form"),galeryEl:document.querySelector(".gallery")};n.formEl.addEventListener("submit",g);function g(s){s.preventDefault(),n.galeryEl.innerHTML="";const o=s.currentTarget.elements.searchQuery.value.trim();o&&(f.show(),h(o).then(t=>{if(t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",icon:""});return}const i=p(t.hits);n.galeryEl.insertAdjacentHTML("beforeend",i),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{l.error({message:`Error: ${t.message}`,position:"topRight"})}).finally(()=>{f.hide()}),n.formEl.reset())}
//# sourceMappingURL=index.js.map

export const createMurkUp = cards => {
  return cards
    .map(card => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = card;
      return `<li class="photo-card">
   <a class="gallery-link" href="${largeImageURL}">
  <img src='${webformatURL}' alt = "${tags}" width="340" height="230" loading = "lazy" />
     </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</li>`;
    })
    .join('');
};

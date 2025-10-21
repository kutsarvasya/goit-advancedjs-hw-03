import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.css';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { createMurkUp } from './js/render-functions';
import { loader } from './js/loader';
const refs = {
  formEl: document.querySelector('.search-form'),
  galeryEl: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  refs.galeryEl.innerHTML = '';

  const inputValue = event.currentTarget.elements.searchQuery.value.trim();
  if (!inputValue) return;
  loader.show();
  fetchImages(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          icon: '',
        });
        return;
      }
      const murkUp = createMurkUp(data.hits);
      refs.galeryEl.insertAdjacentHTML('beforeend', murkUp);
      const gal = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      gal.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: `Error: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.hide();
    });
  refs.formEl.reset();
}

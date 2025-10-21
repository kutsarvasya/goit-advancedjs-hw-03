const refs = {
  loader: document.querySelector('.js-loader'),
};
export const loader = {
  show() {
    refs.loader.classList.remove('hidden');
  },
  hide() {
    refs.loader.classList.add('hidden');
  },
};

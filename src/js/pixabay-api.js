export const fetchImages = value => {
  const params = new URLSearchParams({
    key: '36255755-2fbf092869753c62ec4fb113a',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

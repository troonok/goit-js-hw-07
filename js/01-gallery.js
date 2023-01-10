import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgsGallery = document.querySelector('.gallery');

const markup = galleryItems
	.map(({original,preview,description}) => `
    <div class="gallery__item">
    <a class="gallery__link" href=${original} ><img class="gallery__image" src=${preview} data-source=${original} alt='${description}'></img></a></div>`)
	.join('');
imgsGallery.insertAdjacentHTML('afterbegin', markup)

imgsGallery.addEventListener('click',onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const modalImage = basicLightbox.create(`<img src='${e.target.dataset.source}'>`);

  modalImage.show();

  document.addEventListener(
    'keydown',
    e => {
      if (e.code !== 'Escape') {
        return;
      }
      modalImage.close();
    },
    { once: true },
  );
}

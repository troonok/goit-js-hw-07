import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgsGallery = document.querySelector('.gallery');

const markup = galleryItems
	.map(({original,preview,description}) => 
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
    </a>`)
	.join('');

imgsGallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


// console.log(galleryItems);


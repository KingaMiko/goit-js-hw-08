import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const imageMarkup = createMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', imageMarkup);

function createMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> </li> `;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: Text,
  scrollZoom: false,
});

const selectImage = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open(event.target);
};
gallery.addEventListener('click', selectImage);

console.log(galleryItems);

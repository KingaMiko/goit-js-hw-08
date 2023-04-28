import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

//Method 1
galleryItems.forEach(el => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.classList.add('gallery__link');
  img.classList.add('gallery__image');

  gallery.append(li);
  li.append(a);
  a.append(img);

  a.href = el.original;
  img.src = el.preview;
  img.alt = el.description;
});

//Method 2
// function galleryCreate() {
//   let galleryArray = [];

//   galleryItems.forEach(el => {
//     const { preview, original, description } = el;

//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     const img = document.createElement('img');

//     a.classList.add('gallery__link');
//     img.classList.add('gallery__image');

//     a.setAttribute('href', original);
//     img.setAttribute('src', preview);
//     img.setAttribute('alt', description);

//     li.append(a);
//     a.append(img);

//     galleryArray.push(li);
//   });
//   gallery.append(...galleryArray);
// }
// galleryCreate();

//Method 3 (this is the most simple method for me - in this Task)
// const imageMarkup = createMarkup(galleryItems);
// gallery.insertAdjacentHTML('beforeend', imageMarkup);

// function createMarkup() {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<li> <a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//       </a> </li> `;
//     })
//     .join('');
// }

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

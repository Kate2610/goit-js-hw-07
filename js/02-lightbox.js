import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems){
    return galleryItems.map(({ preview, original, description }) =>

    {
        return `<a class='gallery__item' href='${original}'>
        <img
        class='gallery__image'
        src ='${preview}'  
        data-source="${original}"
        alt ='${description}'>
        </a>`;
      })
        .join('');
}

const lightbox  = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


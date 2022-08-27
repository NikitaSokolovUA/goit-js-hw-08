// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const boxGallery = document.querySelector('.gallery')
const createGalleryItems = createGalleryImageMarkup(galleryItems)

boxGallery.insertAdjacentHTML('afterbegin', createGalleryItems)

function createGalleryImageMarkup(pictures) {
    return pictures.map(({original, description, preview}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
            />
        </a>
    </div>`
).join('')
}

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
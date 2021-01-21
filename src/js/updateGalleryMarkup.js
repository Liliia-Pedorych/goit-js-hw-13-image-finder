import imagesTpl from '../templates/gallery.hbs';
import refs from './refs';

function galleryList(hits) {
  const markup = imagesTpl(hits);
  refs.searchImage.insertAdjacentHTML('beforeend', markup);
}

export default galleryList;

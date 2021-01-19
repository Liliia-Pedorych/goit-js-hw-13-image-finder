import './styles.css';
import refs from './js/refs';
import fetchImages from './js/fetchImages';
import galleryList from './js/updateGalleryMarkup';

refs.searchField.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.query.value;

  refs.searchImage.innerHTML = '';
  event.currentTarget.reset();
  fetchImages(inputValue).then(galleryList);
});

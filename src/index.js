import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
// import fetchImages from './js/fetchImages';
import galleryList from './js/updateGalleryMarkup';

refs.searchField.addEventListener('submit', event => {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.query.value;

  refs.searchImage.innerHTML = '';
  event.currentTarget.reset();

  apiService.resetPage();

  apiService.fetchImages().then(galleryList);
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchImages().then(galleryList);
});

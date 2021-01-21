import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import galleryList from './js/updateGalleryMarkup';

refs.searchField.addEventListener('submit', event => {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.query.value;

  refs.searchImage.innerHTML = '';
  event.currentTarget.reset();

  apiService.resetPage();

  if (apiService.query != '') {
    apiService.fetchImages().then(hits => {
      galleryList(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
    });
  }
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchImages().then(hits => {
    galleryList(hits);

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        left: 100,
        behavior: 'smooth',
      });
    }, 500);
  });
});

// import { showNotificationFail } from './notification';

function fetchImages(searchQuery) {
  const apiKey = '19832494-5cd14cdef5946ada4556f0091';
  let pageNumber = 1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}
export default fetchImages;

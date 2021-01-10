// import imagesTpl from '../templates/gallery.hbs';
// import refs from './refs';

// import { showNotificationToMany, showNotificationFail } from './notification';

// function updateGalleryMarkup(data) {

//   if (data.length > 10) {
//     showNotificationToMany();
//   } else if (data.length === 1) {
//     countryInformation(data);
//   } else if (data.length > 1 && data.length <= 10) {
//     counryList(data);
//   } else showNotificationFail();
// }

// function galleryList(data) {
//   const markup = imagesTpl(data);
//   refs.searchImage.insertAdjacentHTML('beforeend', markup);
// }

// function countryInformation(data) {
//   const markup = countryTpl(data);
//   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// }

// export default updateGalleryMarkup;

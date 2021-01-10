// import countriesTpl from '../templates/countries.hbs';
// import countryTpl from '../templates/country.hbs';
// import { showNotificationToMany, showNotificationFail } from './notification';

// import refs from './refs';

// function updateCountriesMarkup(data) {
//   // console.log(typeof data);
//   // console.log(data.length);

//   if (data.length > 10) {
//     showNotificationToMany();
//   } else if (data.length === 1) {
//     countryInformation(data);
//   } else if (data.length > 1 && data.length <= 10) {
//     counryList(data);
//   } else showNotificationFail();
// }

// function counryList(data) {
//   const markup = countriesTpl(data);
//   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// }

// function countryInformation(data) {
//   const markup = countryTpl(data);
//   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// }

// export default updateCountriesMarkup;

// // function updateCountriesMarkup(data) {
// //   const markup = countriesTpl(data);
// //   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// // }

// // function updateCountriesMarkup(data) {
// //   const markup = countryTpl(data);
// //   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// // }

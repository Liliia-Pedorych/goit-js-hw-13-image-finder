(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO");var a={searchImage:document.querySelector(".gallery"),searchField:document.querySelector(".search-form"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},r=(t("JBxO"),t("FdtR"),{searchQuery:"",page:1,fetchImages:function(){var e=this,n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.page+"&per_page=12&key=19832494-5cd14cdef5946ada4556f0091";return fetch(n).then((function(e){return e.json()})).then((function(n){var t=n.hits;return e.page+=1,t})).catch((function(e){return console.log(e)}))},resetPage:function(){this.page=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}}),l=t("zC5Y"),o=t.n(l);var s=function(e){var n=o()(e);a.searchImage.insertAdjacentHTML("beforeend",n)};a.searchField.addEventListener("submit",(function(e){e.preventDefault(),r.query=e.currentTarget.elements.query.value,a.searchImage.innerHTML="",e.currentTarget.reset(),r.resetPage(),r.fetchImages().then(s)})),a.loadMoreBtn.addEventListener("click",(function(){r.fetchImages().then((function(e){s(e),console.log(document.documentElement.offsetHeight),setTimeout((function(){window.scrollTo({top:document.documentElement.offsetHeight,left:100,behavior:"smooth"})}),500)}))}))},zC5Y:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,r){var l,o=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c="function",i=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li>\r\n  <div class="photo-card">\r\n  <img src="'+i(typeof(l=null!=(l=u(t,"webformatURL")||(null!=n?u(n,"webformatURL"):n))?l:s)===c?l.call(o,{name:"webformatURL",hash:{},data:r,loc:{start:{line:4,column:12},end:{line:4,column:28}}}):l)+'" alt="" />\r\n\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">'+i(typeof(l=null!=(l=u(t,"likes")||(null!=n?u(n,"likes"):n))?l:s)===c?l.call(o,{name:"likes",hash:{},data:r,loc:{start:{line:8,column:32},end:{line:8,column:41}}}):l)+'thumb_up</i>\r\n      1108\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">'+i(typeof(l=null!=(l=u(t,"views")||(null!=n?u(n,"views"):n))?l:s)===c?l.call(o,{name:"views",hash:{},data:r,loc:{start:{line:12,column:32},end:{line:12,column:41}}}):l)+'visibility</i>\r\n      320321\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">'+i(typeof(l=null!=(l=u(t,"comments")||(null!=n?u(n,"comments"):n))?l:s)===c?l.call(o,{name:"comments",hash:{},data:r,loc:{start:{line:16,column:32},end:{line:16,column:44}}}):l)+'comment</i>\r\n      129\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">'+i(typeof(l=null!=(l=u(t,"downloads")||(null!=n?u(n,"downloads"):n))?l:s)===c?l.call(o,{name:"downloads",hash:{},data:r,loc:{start:{line:20,column:32},end:{line:20,column:45}}}):l)+"cloud_download</i>\r\n      176019\r\n    </p>\r\n  </div>\r\n</div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,r){var l;return null!=(l=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?l:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5f0e6db56d4bdb081c61.js.map
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formValidation=n,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formElement=this._formValidation.querySelector(t.formSelector),this._inputElements=Array.from(n.querySelectorAll(t.inputSelector)),this._submitButton=n.querySelector(t.submitButtonSelector)}var t,n,o;return t=e,(n=[{key:"_addInputError",value:function(e){if(!e.checkValidity()){var t=this._formValidation.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}}},{key:"_removeInputError",value:function(e){var t=this._formValidation.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.checkValidity()?this._removeInputError(e):this._addInputError(e)}},{key:"_toggleButtonState",value:function(){var e=!this._formElement.checkValidity();this._submitButton.disabled=e,this._submitButton.classList.toggle(this._inactiveButtonClass,e)}},{key:"enableValidation",value:function(){var e=this;this._inputElements.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"clear",value:function(){var e=this;this._inputElements.forEach((function(t){e._removeInputError(t),t.value||e._toggleButtonState()}))}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r,o,i){var u=i.handleCardClick,a=i.handleRemoveCard,c=i.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._userData=r,this._userID=o,this._link=t.link,this._name=t.name,this._cardSelector=n,this._handleCardClick=u,this._handleRemoveCard=a,this._handleCardLike=c}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_handleImageClick",value:function(){return this._handleCardClick()}},{key:"_clickRemoveButton",value:function(){this._handleRemoveCard({cardElement:this._element,cardId:this._data._id})}},{key:"_clickButtonLike",value:function(){this._handleCardLike({cardId:this._data._id})}},{key:"isLiked",value:function(){var e=this;return!!this._data.likes.some((function(t){return t._id===e._userData._id}))}},{key:"_addLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"_removeLike",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"_lengthLike",value:function(){this._element.querySelector(".element__like_length").textContent=this._data.likes.length}},{key:"сheckLike",value:function(e){this._data=e,this._lengthLike(),this.isLiked()?this._addLike():this._removeLike()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._clickButtonLike()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._clickRemoveButton()})),this._element.querySelector(".element__img").addEventListener("click",(function(){return e._handleImageClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__img").src=this._link,this._elementTitle=this._element.querySelector(".element__title"),this._elementTitle.textContent=this._name,this._elementTitle.alt=this._name,this._userData._id===this._data.owner._id&&this._element.querySelector(".element__delete").classList.add("element__delete_active"),this.сheckLike(this._data),this._setEventListeners(),this._element}}])&&i(t.prototype,n),r&&i(t,r),e}(),a=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup__text_type_author"),s=document.querySelector(".popup__text_type_profession"),f=document.querySelector(".profile__add-button"),p=document.querySelector(".popup_type_add"),h=(document.querySelector(".popup__text_type_place"),document.querySelector(".popup__text_type_url"),document.querySelector(".profile__avatar_button")),d=document.querySelector(".popup_type_avatar"),_=document.querySelector(".elements"),y={formSelector:".popup__container",inputSelector:".popup__text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__text_error",errorClass:"popup__error_visible"};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._сontainer=n}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e){this._сontainer.prepend(e)}},{key:"renderer",value:function(){var e=this;this._items.reverse().forEach((function(t){e._renderer(t)}))}}])&&v(t.prototype,n),r&&v(t,r),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=function(e){"Escape"===e.key&&(console.log(e),console.log(n._popup),n.close())}}var t,n,r;return t=e,(n=[{key:"_closePopup",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){return e._closePopup(t)}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"buttonName",value:function(e){this._popup.querySelector(".popup__button").textContent=e}}])&&b(t.prototype,n),r&&b(t,r),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,r,o=C(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popup.querySelector(".popup__photo").src=t,this._popup.querySelector(".popup__caption").textContent=n,E(L(i.prototype),"open",this).call(this)}}])&&g(t.prototype,n),r&&g(t,r),i}(k);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t,n=e.popupSelector,r=e.formSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,n))._formSubmit=r,t}return t=i,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList=this._popup.querySelectorAll(".popup__text"),this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;I(U(i.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(t),e._formSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){I(U(i.prototype),"close",this).call(this),this._popup.querySelector(".popup__container").reset()}}])&&q(t.prototype,n),r&&q(t,r),i}(k);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.userName,r=t.userJob,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&D(t.prototype,n),r&&D(t,r),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.baseUrl,r=t.headers,o=void 0===r?{}:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=o}var t,n,r;return t=e,(n=[{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(tes.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkPromise(t)}))}},{key:"newCardAdd",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.Place,link:e.Url})}).then((function(e){return t._checkPromise(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkPromise(t)}))}},{key:"patchProfileInfo",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.popup__text_type_author,about:e.popup__text_type_profession})}).then((function(e){return t._checkPromise(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkPromise(e)}))}},{key:"addAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._checkPromise(e)}))}}])&&N(t.prototype,n),r&&N(t,r),e}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(i,e);var t,n,r,o=$(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e))._handleDeleteButton=t,n}return t=i,(n=[{key:"setEventListeners",value:function(){var e=this;H(G(i.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__button").addEventListener("click",(function(t){t.preventDefault(),e._handleDeleteButton(e._card)}))}},{key:"open",value:function(e){H(G(i.prototype),"open",this).call(this),this._card=e}}])&&M(t.prototype,n),r&&M(t,r),i}(k);function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new o(y,c);X.enableValidation();var Y=new o(y,p);Y.enableValidation();var Z=new o(y,d);Z.enableValidation();var ee=new P(".popup__type_img");ee.setEventListeners();var te=new B({userName:".profile__info-author",userJob:".profile__info-profession",profileAvatarSelector:".profile__avatar"}),ne=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"bfafbae2-07a3-48fe-808e-9f17604e2a09","Content-Type":"application/json"}}),re=new K(".popup_type_delete",(function(e){var t=e.cardElement,n=e.cardId;ne.removeCard(n).then((function(){re.buttonName("Удаление..."),t.remove(),re.close()})).catch((function(e){return console.error(e)}))}));function oe(e,t,n){var r=new u(e,".template",t,n,{handleCardClick:function(){ee.open(e)},handleRemoveCard:function(e){var t=e.cardElement,n=e.cardId;re.buttonName("Да"),re.open({cardElement:t,cardId:n})},handleCardLike:function(e){var t=e.cardId;r.isLiked()?ne.removeLike(t).then((function(e){r.сheckLike(e)})).catch((function(e){return console.error(e)})):ne.addLike(t).then((function(e){r.сheckLike(e)})).catch((function(e){return console.error(e)}))}});return r.generateCard()}re.setEventListeners();var ie=new A({popupSelector:".popup_type_avatar",formSubmit:function(e){ie.buttonName("Загрузка..."),ne.addAvatar(e).then((function(e){te.setUserAvatar(e.avatar),ie.close()})).catch((function(e){return console.error(e)}))}});ie.setEventListeners(),h.addEventListener("click",(function(){ie.buttonName("Сохранить"),ie.open(),Z.clear()}));var ue=new A({popupSelector:".popup_type_edit",formSubmit:function(e){ue.buttonName("Сохранение..."),ne.patchProfileInfo(e).then((function(e){te.setUserInfo(e),ue.close()})).catch((function(e){return console.error(e)}))}});ue.setEventListeners(),a.addEventListener("click",(function(){ue.buttonName("Сохранить"),l.value=te.getUserInfo().name,s.value=te.getUserInfo().job,X.clear(),ue.open()})),Promise.all([ne.getInitialCards(),ne.getUserInfo()]).then((function(e){var t=Q(e,2),n=t[0],r=t[1];te.setUserInfo(r),te.setUserAvatar(r.avatar);var o=new m({items:n,renderer:function(e){var t=oe(e,r);o.addItem(t)}},_);o.renderer();var i=new A({popupSelector:".popup_type_add",formSubmit:function(e){i.buttonName("Загрузка..."),ne.newCardAdd(e).then((function(e){var t=oe(e,r,r._id);o.addItem(t),i.close()})).catch((function(e){return console.error(e)}))}});i.setEventListeners(),f.addEventListener("click",(function(){i.open(),i.buttonName("Сохранить"),Y.clear()}))})).catch((function(e){return console.error(e)}))}]);
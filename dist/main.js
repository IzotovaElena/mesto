(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._openPhoto=o}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._template=this._getTemplate(),this._cardName=this._template.querySelector(".element__title"),this._cardPhoto=this._template.querySelector(".element__image"),this._likeBtn=this._template.querySelector(".element__like"),this._deleteBtn=this._template.querySelector(".element__delete"),this._cardName.textContent=this._name,this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._setEventListeners(),this._template}},{key:"_likeCard",value:function(){this._likeBtn.classList.toggle("element__like_active")}},{key:"_deleteCard",value:function(){this._template.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._likeCard()})),this._deleteBtn.addEventListener("click",(function(){e._deleteCard()})),this._cardPhoto.addEventListener("click",(function(){e._openPhoto(e._link,e._name)}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_checkInputValidity",(function(e){var t=!e.validity.valid,n=r._formElement.querySelector("#".concat(e.id,"-error"));t?r._showError(n,e):r._hideError(n,e)})),o(this,"_toggleButtonState",(function(e){e?(r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.disabled=!1):(r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.disabled=!0)})),o(this,"_setEventListeners",(function(){var e=r._formElement.checkValidity();r._toggleButtonState(e),Array.from(r._inputsList).forEach((function(e){e.addEventListener("input",(function(){var t=r._formElement.checkValidity();r._checkInputValidity(e),r._toggleButtonState(t)}))}))})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._formElement=n,this._submitButton=n.querySelector(t.submitButtonSelector),this._inputsList=n.querySelectorAll(t.inputSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){e.textContent=t.validationMessage,t.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e,t){e.textContent="",t.classList.remove(this._inputErrorClass)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),e}(),i=document.querySelector(".popup_profile"),a=document.querySelector(".profile__edit-button"),u=Array.from(document.querySelectorAll(".popup")),s=document.querySelector(".profile__name"),l=document.querySelector(".profile__bio"),c=document.querySelector(".popup__input_type_name"),p=document.querySelector(".popup__input_type_job");function _(e){e.classList.add("popup_opened"),document.addEventListener("keydown",B),document.addEventListener("click",w)}function d(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",B),document.removeEventListener("click",w)}a.addEventListener("click",(function(){_(i),i.classList.contains("popup_opened")&&(c.value=s.textContent,p.value=l.textContent)})),u.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close")&&d(e)}))}));var m=document.querySelector(".popup__form_profile");m.addEventListener("submit",(function(e){e.preventDefault();var t=c.value,n=p.value;s.textContent=t,l.textContent=n,x(i),d(i)}));var f=document.querySelector(".popup__photo"),v=document.querySelector(".popup__photo-title"),h=function(e,t){v.textContent=t,f.alt=t,f.src=e,_(E)},y=document.querySelector(".popup_element"),k=document.querySelector(".profile__add-button"),S=document.querySelector(".popup__input_type_title"),b=document.querySelector(".popup__input_type_link"),E=document.querySelector(".popup_photo"),L=E.querySelector(".popup__close"),g=document.querySelector(".popup__form_card"),q=document.querySelector(".elements__list");function C(e){var n=function(e){return new t(e,".card-template",h).generateCard()}(e);q.prepend(n)}k.addEventListener("click",(function(){_(y)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].map(C),g.addEventListener("submit",(function(e){e.preventDefault(),C({name:S.value,link:b.value}),e.currentTarget.reset(),x(y),d(y)})),L.addEventListener("click",(function(){d(E)}));var B=function(e){"Escape"===e.key&&d(document.querySelector(".popup_opened"))},w=function(e){e.target.classList.contains("popup")&&d(e.target)};function x(e){var t=e.querySelector(".popup__submit");t.disabled=!0,t.classList.add("popup__submit_invalid")}var j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_invalid",inputErrorClass:"popup__input_state_invalid"};new r(j,m).enableValidation(),new r(j,g).enableValidation()})();
const profileEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupAuthor = document.querySelector(".popup__text_type_author");
const popupProfession = document.querySelector(".popup__text_type_profession");
const profileAuthor = document.querySelector(".profile__info-author");
const profileProfession = document.querySelector(".profile__info-profession");
// const popupOpened = document.querySelector(".popup_opened");
const popupClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__container");


// Открытие popup и взятие данных
function editProfile() {
  popup.classList.add("popup_opened");
  popupAuthor.value = profileAuthor.textContent;
  popupProfession.value = profileProfession.textContent;
}
// Закрытие окна Popup
function closePopup() {
  popup.classList.remove('popup_opened');

  
}
// Изменение автора и профессии с сохранением
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAuthor.textContent = popupAuthor.value;
  
  profileProfession.textContent = popupProfession.value;

  closePopup();
}

profileEditButton.addEventListener("click", editProfile);
popupClose.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);






import { options, FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './initialCards.js'
// edit
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfile = document.querySelector('.popup_type_edit');
const popupCloseEdit = document.querySelector('.popup__close_type_edit');
const formProfileEdit = document.querySelector('.popup__container_type_edit');
const profileAuthor = document.querySelector('.profile__info-author');
const profileProfession = document.querySelector('.profile__info-profession');
const popupAuthor = document.querySelector('.popup__text_type_author');
const popupProfession = document.querySelector('.popup__text_type_profession');
// ADD
const profileAddButton = document.querySelector('.profile__add-button');
const addElement = document.querySelector('.popup_type_add');
const popupCloseAdd = document.querySelector('.popup__close_type_add');
const formProfileAdd = document.querySelector('.popup__container_type_add');
const popupPlace = document.querySelector('.popup__text_type_place');
const popupUrl = document.querySelector('.popup__text_type_url');
// Zoom
const popupZoom = document.querySelector('.popup__type_img');
const popupCloseImg = document.querySelector('.popup__close_img');
// Елементы
const elements = document.querySelector('.elements');

// Валидация
const editProfileValidation = new FormValidator(options, editProfile);
editProfileValidation.enableValidation();
const addElementValidation = new FormValidator(options, addElement);
addElementValidation.enableValidation();

// Открытие popup
function openPopup(mod) {
    mod.classList.add('popup_opened');
    // Нажатие кнопки
    document.addEventListener('keydown', closeEsc);
}

// Значение из профиля
function valueProfile() {
    popupAuthor.value = profileAuthor.textContent;
    popupProfession.value = profileProfession.textContent;
}

// Закрытие окна Popup
function closePopup(mod) {
    mod.classList.remove('popup_opened');
    // Нажатие кнопки
    document.removeEventListener('keydown', closeEsc);
}
// Изменение автора и профессии с сохранением
function editFormSubmitHandler(evt) {
    evt.preventDefault();
    // Значение в профиль
    const newName = popupAuthor.value;
    const newJob = popupProfession.value;
    profileAuthor.textContent = newName;
    profileProfession.textContent = newJob;

    closePopup(editProfile);
}

// Карточки из массива
function addCard(item) {

    const card = new Card(item, '.template');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
}

initialCards.forEach(addCard);

//Добавление карточки из формы
function addFormSubmitHandler(evt) {
    evt.preventDefault();

    const card = new Card({ name: popupPlace.value, link: popupUrl.value }, '.template');
    const cardElement = card.generateCard();
    popupPlace.value = "";
    popupUrl.value = "";
    elements.prepend(cardElement);
    closePopup(addElement);
}

// Закрытие попапа кликом на Overlay
function closeOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

// Закрытие попапа кнопкой
function closeEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
}

profileEditButton.addEventListener('click', () => {
    valueProfile();
});

popupCloseImg.addEventListener('click', () => closePopup(popupZoom));
profileAddButton.addEventListener('click', () => openPopup(addElement));
popupCloseAdd.addEventListener('click', () => closePopup(addElement));
formProfileAdd.addEventListener('submit', addFormSubmitHandler);
profileEditButton.addEventListener('click', () => openPopup(editProfile));
popupCloseEdit.addEventListener('click', () => closePopup(editProfile));
formProfileEdit.addEventListener('submit', editFormSubmitHandler);

// Закрытие попапа по клику на Overlay
editProfile.addEventListener('mousedown', closeOverlay);
addElement.addEventListener('mousedown', closeOverlay);
popupZoom.addEventListener('mousedown', closeOverlay);
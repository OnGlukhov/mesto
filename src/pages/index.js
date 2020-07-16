import './index.css';
import { options, FormValidator } from '../script/components/FormValidator.js';
import { Card } from '../script/components/Card.js';
import {
    initialCards,
    profileEditButton,
    editProfile,
    popupAuthor,
    popupProfession,
    profileAddButton,
    addElement,
    popupPlace,
    popupUrl,
    elements
}
from '../script/utils/constants.js';
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';

// Увеличение 
const popupPicture = new PopupWithImage('.popup__type_img');
popupPicture.setEventListeners()

// Валидация
const editProfileValidation = new FormValidator(options, editProfile);
editProfileValidation.enableValidation();
const addElementValidation = new FormValidator(options, addElement);
addElementValidation.enableValidation();

// Добавление карточки
const addPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    formSubmit: (data) => {
        data.name = popupPlace.value;
        data.link = popupUrl.value;
        const newcard = new Card(data, '.template', {
            handleCardClick: () =>
                popupPicture.open(data)
        });
        const cardElement = newcard.generateCard();
        cardList.addItem(cardElement);
        addPopup.close();
    }
});
addPopup.setEventListeners();

profileAddButton.addEventListener("click", () => {
    addPopup.open();
});

// Карточки из массива
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.template', {
            handleCardClick: () => {
                popupPicture.open(item)
            }
        });
        const cardElement = card.generateCard();
        cardList.addItem(cardElement)
    }
}, elements)
cardList.renderer()

const userInfo = new UserInfo({
    userName: '.profile__info-author',
    userJob: '.profile__info-profession'
});

//Профиль
const editPop = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    formSubmit: (data) => {
        userInfo.setUserInfo({
            newName: data.name,
            newJob: data.job
        });
        editPop.close()
    },

});
editPop.setEventListeners();

profileEditButton.addEventListener('click', () => {
    const editInfo = userInfo.getUserInfo();
    popupAuthor.value = editInfo.name;
    popupProfession.value = editInfo.job;
    editPop.open();
});
import './index.css';
import { options, FormValidator } from '../script/components/FormValidator.js';
import { Card } from '../script/components/Card.js';
import {
    profileEditButton,
    editProfile,
    popupAuthor,
    popupProfession,
    profileAddButton,
    addElement,
    elements,
    selectorsProfile,
    avatarButton,
    editAvatar
}
from '../script/utils/constants.js';
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import Api from '../script/components/Api.js';
import PopupWithRemove from '../script/components/PopupWithRemove.js';
// Валидация
const editProfileValidation = new FormValidator(options, editProfile);
editProfileValidation.enableValidation();
const addElementValidation = new FormValidator(options, addElement);
addElementValidation.enableValidation();
const avatarValidation = new FormValidator(options, editAvatar);
avatarValidation.enableValidation();
// Увеличение 
const popupPicture = new PopupWithImage('.popup__type_img');
popupPicture.setEventListeners();
// Информация о пользователе
const userInfo = new UserInfo(selectorsProfile);

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
    headers: {
        authorization: 'bfafbae2-07a3-48fe-808e-9f17604e2a09',
        'Content-Type': 'application/json'
    }
})

let cardList

// Экземпляр класса секции
const popupDelete = new PopupWithRemove('.popup_type_delete', ({ cardElement, cardId }) => {
    api.removeCard(cardId)
        .then(() => {
            cardElement.remove()
        })
        .catch((err) => console.error(err))
        .finally(() => {
            popupDelete.close()
        })
})
popupDelete.setEventListeners()

// Сборка карт
function placeCard(data, userData, userDataID) {
    const card = new Card(data, '.template', userData, userDataID, {
        handleCardClick: () => {
            popupPicture.open(data)
        },
        handleRemoveCard: ({ cardElement, cardId }) => {
            popupDelete.open({ cardElement, cardId })
        },
        handleCardLike: ({ cardId }) => {
            if (card.isLiked()) {
                api.removeLike(cardId)
                    .then((data) => {
                        card.сheckLike(data)
                    })
                    .catch((err) => console.error(err));
            } else {
                api.addLike(cardId)
                    .then((data) => {
                        card.сheckLike(data)
                    })
                    .catch((err) => console.error(err));
            }
        }
    })
    return card.generateCard()
}
// Изменение аватара
const avatarPopup = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    formSubmit: (data) => {
        avatarPopup.textContent = 'Трататата'
        api.addAvatar(data)
            .then((data) => {
                userInfo.setUserAvatar(data.avatar)
                    // avatarPopup.close()
            })
            .catch((err) => console.error(err))
            .finally(() => {
                avatarPopup.close();
            })
    }
})
avatarPopup.setEventListeners()
avatarButton.addEventListener('click', () => {
    avatarPopup.open()
})

// редактирование профиля
const editPop = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    formSubmit: (data) => {
        api.patchProfileInfo(data)
            .then((data) => {
                userInfo.setUserInfo(data)

            })
            .catch((err) => console.error(err))
            .finally(() => {
                editPop.close()
            })
    },
});

editPop.setEventListeners();
// обработчик события профиль
profileEditButton.addEventListener('click', () => {

    popupAuthor.value = userInfo.getUserInfo().name;
    popupProfession.value = userInfo.getUserInfo().job;
    editPop.open();
});

// Данные карточки, профиль
Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([cardData, userData]) => {
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData.avatar);
        cardList = new Section({
            items: cardData,
            renderer: (data) => {
                const cardElement = placeCard(data, userData);
                cardList.addItem(cardElement)
            }
        }, elements)
        cardList.renderer()
            // Добавление карточки
        const addPopup = new PopupWithForm({
            popupSelector: ".popup_type_add",
            formSubmit: (data) => {
                api.newCardAdd(data)
                    .then(data => {
                        const newcard = placeCard(data, userData, userData._id);
                        cardList.addItem(newcard);
                    })
                    .catch((err) => console.error(err))
                    .finally(() => {
                        addPopup.close();
                    })
            }
        });
        addPopup.setEventListeners();
        profileAddButton.addEventListener("click", () => {
            addPopup.open();
        });
    })
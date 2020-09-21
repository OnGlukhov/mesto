import './index.css';
import { FormValidator } from '../script/components/FormValidator.js';
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
    editAvatar,
    options
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

const openDeletePopup = function(data, card) {
    popupDelete.setCard(data, card);

    popupDelete.open();
    popupDelete.buttonName('Да');
}
const popupDelete = new PopupWithRemove({
    handleDeleteButton: (data, card) => {
        cardDelete(data, card);
    }
}, '.popup_type_delete');


const cardDelete = function(data, card) {
    popupDelete.buttonName('Удаление...')
    api.removeCard(data._id)
        .then(() => {
            card.handleDeleteElement();
            popupDelete.close();
        })
        .catch((err) => console.error(err))
        .finally(() => {
            popupDelete.buttonName('Да');;
        });
}

// Сборка карт
function placeCard(data, userData, userDataID) {
    const card = new Card(data, '.template', userData, userDataID, {
        handleCardClick: () => {
            popupPicture.open(data)
        },
        handleRemoveCard: () => {
            openDeletePopup(data, card)
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
                    .catch((err) => console.error(err))

            }
        }
    })
    return card.generateCard()
}
// Изменение аватара
const avatarPopup = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    formSubmit: (data) => {
        avatarPopup.buttonName('Загрузка...');
        api.addAvatar(data)
            .then((data) => {
                userInfo.setUserAvatar(data.avatar);
                avatarPopup.close();
            })
            .catch((err) => console.error(err))
            .finally(() => {
                avatarPopup.buttonName('Сохранить');
            })
    }
})
avatarPopup.setEventListeners()
avatarButton.addEventListener('click', () => {
    avatarPopup.open();
    avatarValidation.clear()
})



// редактирование профиля
const editPop = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    formSubmit: (data) => {
        editPop.buttonName('Сохранение...');
        api.patchProfileInfo(data)
            .then((data) => {
                userInfo.setUserInfo(data)
                editPop.close();
            })
            .catch((err) => console.error(err))
            .finally(() => {
                editPop.buttonName('Сохранить');
            })
    }
});

editPop.setEventListeners();

// обработчик события профиль
profileEditButton.addEventListener('click', () => {
    popupAuthor.value = userInfo.getUserInfo().name;
    popupProfession.value = userInfo.getUserInfo().job;
    editProfileValidation.clear()
    editPop.open()
});

// Данные карточки, профиль
Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([cardData, userData]) => {
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData.avatar);
        const cardList = new Section({
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
                addPopup.buttonName('Загрузка...');
                api.newCardAdd(data)
                    .then(data => {
                        const card = placeCard(data, userData, userData._id);
                        cardList.addItem(card);
                        addPopup.close();
                    })
                    .catch((err) => console.error(err))
                    .finally(() => {
                        addPopup.buttonName('Сохранить');
                    })
            }
        });
        addPopup.setEventListeners();
        profileAddButton.addEventListener("click", () => {
            addPopup.open();
            addElementValidation.clear()
        });



    })
    .catch((err) => console.error(err))
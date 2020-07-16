// const popupImg = document.querySelector('.popup__photo');
// const popupCaption = document.querySelector('.popup__caption');
// const popupZoom = document.querySelector('.popup__type_img');
export class Card {
    // Конструктор карточки
    constructor(data, cardSelector, { handleCardClick }) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    // Извлечение данных из Template
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    // Клик по фото
    _handleImageClick() {
        return this._handleCardClick();
    }

    // Like
    _toggleLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    // Удаление карточки
    _deleteCard() {
        this._element.remove();

    }

    // Слушатели
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._toggleLike();
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCard();
        })
        this._element.querySelector('.element__img').addEventListener('click', () => {
            return this._handleImageClick()
        });


    }

    // Сборка карточки
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__title').alt = this._name;
        this._setEventListeners()
        return this._element;
    }
}
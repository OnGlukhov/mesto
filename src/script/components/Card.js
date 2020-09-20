// const popupImg = document.querySelector('.popup__photo');
// const popupCaption = document.querySelector('.popup__caption');
// const popupZoom = document.querySelector('.popup__type_img');
export class Card {
    // Конструктор карточки
    constructor(data, cardSelector, userData, userDataID, { handleCardClick, handleRemoveCard, handleCardLike }) {
        this._data = data;
        this._userData = userData;
        this._userID = userDataID;
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleRemoveCard = handleRemoveCard;
        this._handleCardLike = handleCardLike;

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


    _clickButtonLike() {
        this._handleCardLike({
            cardId: this._data._id
        })
    }

    isLiked() {
        return !!(this._data.likes.some((like) => like._id === this._userData._id))
    }

    _addLike() {
        this._element.querySelector('.element__like').classList.add('element__like_active')
    }
    _removeLike() {
        this._element.querySelector('.element__like').classList.remove('element__like_active')
    }
    _lengthLike() {
        this._element.querySelector('.element__like_length').textContent = this._data.likes.length;
    }

    сheckLike(data) { // Проверка на лайк
        this._data = data;
        this._lengthLike();
        if (this.isLiked()) {
            this._addLike();
        } else {
            this._removeLike();
        }

    }
    handleDeleteElement() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._clickButtonLike()
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleRemoveCard();
        })
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._handleImageClick()
        });
        this._element.remove()
    }

    // Слушатели
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._clickButtonLike()
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleRemoveCard();
        })
        this._element.querySelector('.element__img').addEventListener('click', () => {
            return this._handleImageClick()
        });


    }

    // Сборка карточки
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__img').src = this._link;
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementTitle.textContent = this._name;
        this._elementTitle.alt = this._name;

        if (this._userData._id === this._data.owner._id) { // Если айди совпадает с ID карточки пользователя, то добавляется элемент  позволяющий удалять
            this._element.querySelector('.element__delete').classList.add('element__delete_active');
        }

        this.сheckLike(this._data);
        this._setEventListeners()
        return this._element;
    }
}
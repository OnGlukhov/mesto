export class Card {
    // Конструктор карточки
    constructor(data, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
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

    // Like
    _toggleLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    // Удаление карточки
    _deleteCard() {
            this._element.closest('.element').remove();

        }
        // Увеличение картинки
    _zoomImage() {
        zoomImage({ name: this._name, link: this._link });
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
            this._zoomImage();
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
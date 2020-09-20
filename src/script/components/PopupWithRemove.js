import Popup from './Popup.js';
export default class PopupWithRemove extends Popup {
    constructor({ handleDeleteButton }, popupSelector) {
        super(popupSelector);
        this._handleDeleteButton = handleDeleteButton;
        this._submitEvent = evt => {
            evt.preventDefault();
            this._handleDeleteButton(this._card, this._cardClass);
        };
        this._popup.querySelector('.popup__container').addEventListener('submit', this._submitEvent);
    }
    setCard(card, cardClass) {
        this._card = card;
        this._cardClass = cardClass;
    }
}
import Popup from './Popup.js';
export default class PopupWithRemove extends Popup {
    constructor(popupSelector, handleDeleteButton) {
        super(popupSelector)
        this._handleDeleteButton = handleDeleteButton;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__button').addEventListener('click', (evt) => {
            evt.preventDefault()
            this._handleDeleteButton(this._card)
        })
    }
    open(card) {
        super.open();
        this._card = card;
    }
}
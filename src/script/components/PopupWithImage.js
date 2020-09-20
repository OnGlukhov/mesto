import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }
    open({ link, name }) {
        this._popup.querySelector('.popup__photo').src = link;
        this._popup.querySelector('.popup__caption').textContent = name;
        super.open()
    }
}
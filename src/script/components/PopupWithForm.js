import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSubmit }) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList = this._popup
            .querySelectorAll(".popup__text");

        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault(evt);
            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._formSubmit(this._getInputValues());
            this.close()

        });
    }
    close() {
        super.close();
        this._popup.querySelector('.popup__container').reset();
    }
}
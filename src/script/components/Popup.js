export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = (e) => {
            if (e.key === 'Escape') {
                console.log(e);
                console.log(this._popup)
                this.close();
            }
        }
    }

    _closePopup(e) {
        if (e.target.classList.contains('popup')) {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popup.addEventListener('click', e => this._closePopup(e))
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);


    }
    buttonName(buttonName) {

        const button = this._popup.querySelector('.popup__button');
        if (this._popup.contains(button)) {
            button.textContent = buttonName;
        }

    }

}
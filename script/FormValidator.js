const options = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible',
};
class FormValidator {
    // Конструктор валидации
    constructor(data, formValidation) {
        this._formValidation = formValidation;

        this._formSelector = Array.from(document.querySelectorAll(data.formSelector));
        this._inputSelector = Array.from(this._formValidation.querySelectorAll(data.inputSelector));
        this._submitButtonSelector = this._formValidation.querySelector(data.submitButtonSelector);
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;


    };

    // Включение валидации
    enableValidation() {
        this._setEventListeners()
    }

    // Добавление/Удаление класса в зависимости от валидности
    _handleInputError(evt) {
        const input = evt.target;
        const error = document.querySelector(`#${input.id}-error`);
        const isInputValid = input.checkValidity();

        if (isInputValid) {
            // Прячем ошибки
            input.classList.remove(this._inputErrorClass);
            error.textContent = '';

        } else {
            // Показываем ошибки
            input.classList.add(this._inputErrorClass);
            error.textContent = input.validationMessage;
        }
    };
    // Включение/выключение кнопки
    _toggleButtonState(formElement) {
        const formNotValid = !formElement.checkValidity();
        this._submitButtonSelector.disabled = formNotValid;
        this._submitButtonSelector.classList.toggle(this._inactiveButtonClass, formNotValid);
    }

    // Обработчики
    _setEventListeners() {
        this._formSelector.forEach((formElement) => {
            this._inputSelector.forEach((input) => {
                input.addEventListener('input', this._handleInputError);
            });
            formElement.addEventListener('input', () => this._toggleButtonState(formElement));
        });
    }

}
export { options, FormValidator };
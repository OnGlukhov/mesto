
import {options} from '../utils/constants.js'
class FormValidator {
    // Конструктор валидации
    constructor(data, formValidation) {
        this._formValidation = formValidation;

        this._formElement = this._formValidation.querySelector(data.formSelector);
        this._inputElements = this._formValidation.querySelectorAll(data.inputSelector);
        this._submitButton = this._formValidation.querySelector(data.submitButtonSelector);
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;


    };

    // Включение валидацииz
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
    _toggleButtonState() {
        const formNotValid = !this._formElement.checkValidity();
        this._submitButton.disabled = formNotValid;
        this._submitButton.classList.toggle(this._inactiveButtonClass, formNotValid);
    }

    // Обработчики
    _setEventListeners() {
        this._inputElements.forEach((input) => {
            input.addEventListener('input', this._handleInputError);
        });

        this._formElement.addEventListener('input', () => this._toggleButtonState(this._formElement));
    }

}
export { options, FormValidator };
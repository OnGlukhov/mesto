class FormValidator {
    constructor(data, formValidation) {
            this._formValidation = formValidation;
            this._inactiveButtonClass = data.inactiveButtonClass;
            this._inputErrorClass = data.inputErrorClass;
            this._formElement = this._formValidation.querySelector(data.formSelector);
            this._inputElements = Array.from(formValidation.querySelectorAll(data.inputSelector));
            this._submitButton = formValidation.querySelector(data.submitButtonSelector);
        }
        // добавление ошибки 
    _addInputError(input) {
        if (!input.checkValidity()) {
            const errorElement = this._formValidation.querySelector(`#${input.id}-error`);
            input.classList.add(this._inputErrorClass);
            errorElement.textContent = input.validationMessage;
        }
    };
    // удаление ошибки 
    _removeInputError(input) {
        const errorElement = this._formValidation.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(input) {
            if (!input.checkValidity()) {
                this._addInputError(input);
            } else {
                this._removeInputError(input);
            }
        }
        // управление кнопкой 
    _toggleButtonState() {
            const formNotValid = !this._formElement.checkValidity();
            this._submitButton.disabled = formNotValid;
            this._submitButton.classList.toggle(this._inactiveButtonClass, formNotValid);
        }
        // включение валидации 
    enableValidation() {
            this._inputElements.forEach((input) => {
                input.addEventListener('input', () => {
                    this._toggleButtonState();
                    this._checkInputValidity(input);
                });
            });
        }
        // Очистка полей инпута 

    clear() {
        this._inputElements.forEach((input) => {
            this._removeInputError(input);
            if (!input.value) {
                this._toggleButtonState();
            }
        });
    }
}

export { FormValidator }
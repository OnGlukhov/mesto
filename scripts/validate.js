// Функция включения валидации форм
function enableValidation(options) {
    const formElements = Array.from(document.querySelectorAll(options.formSelector));

    formElements.forEach(formElement => {
        const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
        const submitButton = formElement.querySelector(options.submitButtonSelector);

        inputElements.forEach(input => {
            input.addEventListener('input', evt => handleInputError(evt, options.inputErrorClass))
        });

        formElement.addEventListener('input', () => toggleButtonState(formElement, submitButton, options.inactiveButtonClass))
    });
}
// Добавление/Удаление класса  в зависимости от валидности
function handleInputError(evt, errCls) {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    const isInputValid = input.checkValidity();
    if (isInputValid) {
        // Прячем ошибки
        input.classList.remove(errCls);
        error.textContent = '';
    } else {
        // Показываем ошибки
        input.classList.add(errCls);
        error.textContent = input.validationMessage;
    }
}

// Включение выключение кнопки 
function toggleButtonState(formElement, submitButton, inactiveButtonClass) {
    const formNotValid = !formElement.checkValidity();
    submitButton.disabled = formNotValid;
    submitButton.classList.toggle(inactiveButtonClass, formNotValid);
}

// Включение вылидации
enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible'
});
import Inputmask from "inputmask";
export const usePhone = () => {  
    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        telInputs.forEach(input => {
            if (input.value.replace(/\D/g, '').length !== 11) {
                event.preventDefault(); // Отменяем отправку формы
                alert("Поле номера телефона не заполнено полностью");
            }
        });
    });
}
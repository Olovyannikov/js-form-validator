window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');

    //Show input error message
    const showError = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add('error');
        formControl.classList.remove('success');

        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    //Show success outline
    const showSuccess = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add('success');
        formControl.classList.remove('error');
    }

    //Check email is valid

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Get fieldname

    const getFieldName = input =>
        input.id.charAt(0).toUpperCase() + input.id.slice(1);

    //Check required fields

    const checkRequired = inputArr => {
        inputArr.forEach((input) => {
            input.value.trim() === '' ?
                showError(input, `${getFieldName(input)} is required`) :
                showSuccess(input);
        });
    }

    //Event listeners
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkRequired([username, email, password, confirm]);
    })
});
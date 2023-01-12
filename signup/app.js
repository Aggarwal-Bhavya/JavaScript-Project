const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cPassword = document.getElementById('confirm-password');

const confirmUsername = document.getElementById('errorUsername');
const confirmEmail = document.getElementById('errorEmail');
const confirmPhone = document.getElementById('errorPhone');
const confirmPassword = document.getElementById('errorPassword');
const confirmcPassword = document.getElementById('errorConfirmPassword');

const btn = document.getElementById('signBtn');
const inputs = document.querySelectorAll('.signup-form input');

// let inputValidator = {
//     "username": false,
//     "email": false,
//     "phone": false,
//     "password": false,
//     "cPassword": false, 
// }

//USERNAME
const isValidUsername = (username) => {
    const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    // console.log(username.match(regex));
    return username.match(regex);
};

username.addEventListener('input', (e) => {
    if (username.value == '') {
        username.parentElement.classList.add('error');
        confirmUsername.innerHTML = 'Username is required';
    } else if(!isValidUsername(username.value)) {
        username.parentElement.classList.add('error');
        confirmUsername.innerHTML = 'Provide a valid alphanumeric username of length 8-30';
    } else {
        // inputValidator['username'] = true;
        // console.log(inputValidator['username']);

        username.parentElement.classList.remove('error');
    }
});

// EMAIL
const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return email.match(regex);
};

email.addEventListener('input', (e) => {
    if (email.value == '') {
        btn.setAttribute('disabled', true);
        email.parentElement.classList.add('error');
        confirmEmail.innerHTML = 'Email is required';
    } else if (!isValidEmail(email.value)) {
        email.parentElement.classList.add('error');
        confirmEmail.innerHTML = 'Please enter your email address in format: yourname@example.com';
    } else {
        // inputValidator['email'] = true;
        // console.log(inputValidator);
        email.parentElement.classList.remove('error');
    }
});

// PHONE
const isValidPhone = (phone) => {
    const regexPhone = /^[1-9][0-9]{9}$/;
    return phone.match(regexPhone);
};

phone.addEventListener('input', (e) => {
    if (phone.value == '') {
        phone.parentElement.classList.add('error');
        confirmPhone.innerHTML = 'Phone number is required';
    } else if (!isValidPhone(phone.value)) {
        phone.parentElement.classList.add('error');
        confirmPhone.innerHTML = 'Provide a valid 10-digit phone number';
    } else {
        // inputValidator['phone'] = true;
        // console.log(inputValidator);
        phone.parentElement.classList.remove('error');
    }
});

// PASSWORD
const isValidPassword = (password) => {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
    return password.match(regex);
}

password.addEventListener('input', (e) => {
    if (password.value == '') {
        password.parentElement.classList.add('error');
        confirmPassword.innerHTML = 'Password is required';
    } else if (!isValidPassword(password.value)) {
        password.parentElement.classList.add('error');
        confirmPassword.innerHTML = 'Password must be at least 8 characters that include at least 1 lowercase, 1 uppercase, and 1 number';
    } else {
        // inputValidator['password'] = true;
        // console.log(inputValidator);

        password.parentElement.classList.remove('error');
    }
});

// CONFIRM PASSWORD
cPassword.addEventListener('input', (e) => {
    if (cPassword.value == '') {
        cPassword.parentElement.classList.add('error');
        confirmcPassword.innerHTML = 'Please confirm your password';
    } else if (cPassword.value != password.value) {
        cPassword.parentElement.classList.add('error');
        confirmcPassword.innerHTML = 'Passwords do not match';
    } else {
        // inputValidator['cPassword'] = true;
        // console.log(inputValidator);

        cPassword.parentElement.classList.remove('error');
    }
});

//TOGGLE BUTTON FOR PASSWORD
const togglePassword1 = document.getElementById('togglePassword1');
togglePassword1.addEventListener('click', function(e) {
    const type = password.type === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword1.classList.toggle('fa-eye-slash');
});

//TOGGLE BUTTON FOR CONFIRM PASSWORD
const togglePassword2 = document.getElementById('togglePassword2');
togglePassword2.addEventListener('click', function(e) {
    const type = cPassword.type === 'password' ? 'text' : 'password';
    cPassword.setAttribute('type', type);
    togglePassword2.classList.toggle('fa-eye-slash');
});

const form = document.querySelector('.signup-form form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(inputValidator);
    validateInputs();
    
});


// let allTrue = Object.keys(inputValidator).every((item) => {
//     return inputValidator[item] === true;
// });

// console.log(allTrue);

// if(allTrue) {
//     btn.removeAttribute('disabled');
// } else {
    
// }

// window.addEventListener('DOMContentLoaded', function() {
//     btn.setAttribute('disabled', true);
    
//     let inputValidator = {
//         "username": false,
//         "email": false,
//         "phone": false,
//         "password": false,
//         "cPassword": false, 
//     }

//     //USERNAME
// const isValidUsername = (username) => {
//     const regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
//     // console.log(username.match(regex));
//     return username.match(regex);
// };

// username.addEventListener('input', (e) => {
//     if (username.value == '') {
//         username.parentElement.classList.add('error');
//         confirmUsername.innerHTML = 'Username is required';
//     } else if(!isValidUsername(username.value)) {
//         username.parentElement.classList.add('error');
//         confirmUsername.innerHTML = 'Provide a valid alphanumeric username of length 8-30';
//     } else {
//         inputValidator['username'] = true;
//         console.log(inputValidator['username']);

//         username.parentElement.classList.remove('error');
//     }
// });
// })
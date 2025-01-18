
//var Cookies2 = Cookies.noConflict();
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Cookies !== "undefined") {
      var Cookies2 = Cookies.noConflict();
      Cookies2.set('name', 'value');
    } else {
      console.error("js-cookie library is not loaded");
    }
  });
  
    // Форма "Напиши нам"

    function FormContactUs() {
    // Предотвращаем отправку формы
    document.getElementById('contactForm').addEventListener('submit', async function (event) {
        event.preventDefault();

    // Получаем значения полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let feedBackMessage = '';

    // Проверка поля "Имя"
    if (name === '') {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно быть пустым. ';    
    } else if (name.length < 2) {
        isValid = false;
        feedBackMessage += 'Поле "Name" должно содержать больше 2 символов. ';
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно содержать цифры или специальные символы. ';
    }

    // Проверка поля "Email"
    if (email === '') {
        isValid = false;
        feedBackMessage += 'Поле "Email" не должно быть пустым. ';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        feedBackMessage += 'Поле "Email" должено быть корректным. ';
    }

    // Проверка поля "Сообщение"
    if (message === '') {
        isValid = false;
        feedBackMessage += 'Поле "Message" не должно быть пустым. ';
    }

    // Вывод результата валидации
    let feedBacDiv = document.getElementById('feedBackMessage');
    if (isValid) {
        try {
            // Имитируем отправку данных на сервер через fetch
            let responses = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });
            if (responses.ok) {
                feedBacDiv.innerHTML = '<div class="alert alert-success">Ваше сообщение успешно отправлено!</div>';
            } else {
                throw new Error('Ошибка при отправке формы.');
            }
        } catch (error) {
            feedBacDiv.innerHTML = '<div class="alert alert-danger">Произошла ошибка при отправке. Попробуйте позже.</div>';
        }

        // Очищаем форму после отправки
        this.reset();
        

        // Анимация скрытия через 3 секунды
        setTimeout(() => {
            feedBacDiv.innerHTML ='';
        }, 3000);
    } else {
        feedBacDiv.innerHTML = '<div class="alert alert-danger">' + feedBackMessage + '</div>';
        
    }
});
}     
FormContactUs();

// Форма "Регистрация"
function FormRegistrationShuze() {
    let btncheck1 = document.getElementById('btncheck1');
    let btncheck2 = document.getElementById('btncheck2');

    btncheck1.addEventListener('click',  function () {   
        this.style.color = "#fff";
        this.style.background = " #6b736e";
        btncheck2.style.color = " #6b736e";
        btncheck2.style.background = "#fff";

        jQuery( '#collapseTelefon' ).addClass('show');
        jQuery( '#collapseEmail' ).removeClass('show');
        
    })
    btncheck2.addEventListener('click', function () {
        this.style.color = "#fff";
        this.style.background = " #6b736e";
        btncheck1.style.color = " #6b736e";
        btncheck1.style.background = "#fff";

        jQuery( '#collapseTelefon' ).removeClass('show');
        jQuery( '#collapseEmail' ).addClass('show'); 
    })
          
}
window.addEventListener("load", FormRegistrationShuze);

//Регистрация с помощью номера телефона

function FormRegistrationTelefon() {
    // Предотвращаем отправку формы
    document.getElementById('collapseTelefon').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Получаем значения полей формы
    let nameTelefon = document.getElementById('nameTelefon').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let passRegTel = document.getElementById('InputPasswordRegistrationTel').value.trim();
    
    let isValid = true;
    let feedBackMessage = '';

    // Проверка поля "Имя"
    if (nameTelefon === '') {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно быть пустым. ';    
    } else if (nameTelefon.length < 2) {
        isValid = false;
        feedBackMessage += 'Поле "Name" должно содержать больше 1 символов. ';
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(nameTelefon)) {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно содержать цифры или специальные символы. ';
    }

    // Проверка поля "Telephone"
    if (phone === '') {
        isValid = false;
        feedBackMessage += 'Поле "Telephone" не должно быть пустым. ';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) {
        isValid = false;
        feedBackMessage += 'Поле "Telephone" должено содержать не менее 10 цифр. ';
    } 
    
    // Проверка поля "Password"
    if (passRegTel === '') {
        isValid = false;
        feedBackMessage += 'Поле "Password" не должно быть пустым. ';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passRegTel)) {
        isValid = false;
        feedBackMessage += 'Поле "Password" должено содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов. ';
    } 

    // Вывод результата валидации
    let feedBacDivTelefon = document.getElementById('welcomeMessageTelefon');
    if (isValid) {
        try {
            // Имитируем отправку данных на сервер через fetch
            let responses = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nameTelefon: nameTelefon,
                    phone: phone,
                    password: passRegTel
                })
            });
            if (!responses) {
                
                throw new Error('Ошибка при отправке формы.');
            }
            
        } catch (error) {
            feedBacDivTelefon.innerHTML = '<div class="alert alert-danger">Произошла ошибка при отправке. Попробуйте позже.</div>';
        }

        // Очищаем форму после отправки
        this.reset();

        // Анимация скрытия через 3 секунды
        setTimeout(() => {
            //jQuery( '#exampleModalRegistred' ).removeClass('show'); 
            jQuery('#exampleModalRegistred').modal('hide');
            jQuery('#welcomeMessageTelefon').empty();    
    
       }, 3000);
    } else {
        feedBacDivTelefon.innerHTML = '<div class="alert alert-danger">' + feedBackMessage + '</div>';    
    }
});
}     
FormRegistrationTelefon();

//Регистрация с помощью Email

function FormRegistrationEmail() {
    // Предотвращаем отправку формы
    document.getElementById('collapseEmail').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Получаем значения полей формы
    let nameEmail = document.getElementById('nameEmail').value.trim();
    let emailregistration = document.getElementById('Inputemailregistration').value.trim();
    let passwordregistration = document.getElementById('InputPasswordRegistration').value.trim();
    
    let isValid = true;
    let feedBackMessage = '';

    // Проверка поля "Имя"
    if (nameEmail === '') {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно быть пустым. ';    
    } else if (nameEmail.length < 2) {
        isValid = false;
        feedBackMessage += 'Поле "Name" должно содержать больше 1 символов. ';
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(nameEmail)) {
        isValid = false;
        feedBackMessage += 'Поле "Name" не должно содержать цифры или специальные символы. ';
    }

    // Проверка поля "Email"
    if (emailregistration === '') {
        isValid = false;
        feedBackMessage += 'Поле "Email" не должно быть пустым. ';
    } else if (!/\S+@\S+\.\S+/.test(emailregistration)) {
        isValid = false;
        feedBackMessage += 'Поле "Email" должено быть корректным. ';
    }
    
    // Проверка поля "Password"
    if (passwordregistration === '') {
        isValid = false;
        feedBackMessage += 'Поле "Password" не должно быть пустым. ';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordregistration)) {
        isValid = false;
        feedBackMessage += 'Поле "Password" должено содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов. ';
    } 
    
    // Вывод результата валидации
    let feedBacDivEmail = document.getElementById('welcomeMessageEmail');
    if (isValid) {
        try {
            // Имитируем отправку данных на сервер через fetch
            let responses = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nameEmail: nameEmail,
                    emailregistration: emailregistration,
                    passwordregistration: passwordregistration
                })
            });
            if (!responses) {
                
                throw new Error('Ошибка при отправке формы.');
            }
        } catch (error) {
            feedBacDivEmail.innerHTML = '<div class="alert alert-danger">Произошла ошибка при отправке. Попробуйте позже.</div>';
        }

        // Очищаем форму после отправки
        this.reset();

        // Анимация скрытия через 3 секунды
        setTimeout(() => {
            
            jQuery('#exampleModalRegistred').modal('hide');
            jQuery('#welcomeMessageEmail').empty();   
        }, 3000);
    } else {
        feedBacDivEmail.innerHTML = '<div class="alert alert-danger">' + feedBackMessage + '</div>';    
    }
});
}     
FormRegistrationEmail();


// Переключение видимости пароля

function PasswordWidgetTel() {
    let passRegistrVidgetTel = document.getElementById("InputPasswordRegistrationTel");
    if (passRegistrVidgetTel.type === "password") {
        passRegistrVidgetTel.type = "text";
    } else {
        passRegistrVidgetTel.type = "password";
    }
  }

  function PasswordWidget() {
    let passRegistrVidget = document.getElementById("InputPasswordRegistration");
    if (passRegistrVidget.type === "password") {
        passRegistrVidget.type = "text";
    } else {
        passRegistrVidget.type = "password";
    }
  }
  function PasswordWidgetAut() {
    let passRegistrVidgetAut = document.getElementById("InputPasswordAutorization");
    if (passRegistrVidgetAut.type === "password") {
        passRegistrVidgetAut.type = "text";
    } else {
        passRegistrVidgetAut.type = "password";
    }
  }
  
// Проверка формы Авторизации

  function FormAutorization() {
    // Предотвращаем отправку формы
    document.getElementById('AutorizForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Получаем значения полей формы
    let phoneOrEmail = document.getElementById('phoneOrEmail').value.trim();
    let passwordAutorization = document.getElementById('InputPasswordAutorization').value.trim();
    
    let isValid = true;
    let feedBackMessage = '';

    let emailAut = /\S+@\S+\.\S+/;
    let phoneAut = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    
    // Проверка поля "Email or Telefon"
    if (phoneOrEmail === '') {
        isValid = false;
        feedBackMessage += 'Поле не должно быть пустым, введите номер телефона или email. ';
    } else if (emailAut.test(phoneOrEmail) || phoneAut.test(phoneOrEmail)){
        isValid = true;   
        
    } else if (!emailAut.test(phoneOrEmail) || !phoneAut.test(phoneOrEmail)) { 
        isValid = false;
        feedBackMessage += 'Адресс Email должен быть в формате name@exemple.com. Номер телефона должен содержать не менее 10 цифр и быть в формате +123 456 7890.';
    
    }
    
    // Проверка поля "Password"
    if (passwordAutorization === '') {
        isValid = false;
        feedBackMessage += 'Поле "Password" не должно быть пустым. ';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(passwordAutorization)) {
        isValid = false;
        feedBackMessage += 'Поле "Password" должено содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 символов. ';
    } 
    
    // Вывод результата валидации
    let feedBacDivAutoriz = document.getElementById('welcomeMessageAut');
    if (isValid) {
        try {
            // Имитируем отправку данных на сервер через fetch
            let responses = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    phoneOrEmail: phoneOrEmail,
                    passwordAutorization: passwordAutorization
                })
            });
            if (!responses) {
                
                throw new Error('Ошибка при отправке формы.');
            }
        } catch (error) {
            feedBacDivAutoriz.innerHTML = '<div class="alert alert-danger">Произошла ошибка при отправке. Попробуйте позже.</div>';
        }

        // Очищаем форму после отправки
        this.reset();

        // Анимация скрытия через 3 секунды
        setTimeout(() => {
            
            jQuery('#exampleModalAutorization').modal('hide');
            jQuery('#welcomeMessageAut').empty();   
        }, 3000);
    } else {
        feedBacDivAutoriz.innerHTML = '<div class="alert alert-danger">' + feedBackMessage + '</div>';    
    }
});
}     
FormAutorization();
  
// Сохранение Cookee
// Форма регистрации по номеру телефона
document.getElementById('btnTelefonFormSend').addEventListener('click', function () {
    let nameTelefon = document.getElementById('nameTelefon').value;
    let phone = document.getElementById('phone').value;
    let passwordTelefon = document.getElementById('InputPasswordRegistrationTel').value;
    var data = {};
    data.name = nameTelefon; 
    data.type = 'phone'; 
    data.password = passwordTelefon;    
    // Сохраняем данные в куки
        saveUserDataToCookies( phone, data);
        displayWelcomeMessageTel(phone);
       //console.log(`Имя: ${nameTelefon}, Телефон: ${phone}, Пароль: ${passwordTelefon}`);
    } 
);
// Форма регистрации по Email
document.getElementById('btnEmailFormSend').addEventListener('click', function () {
    let nameEmail = document.getElementById('nameEmail').value;
    let email = document.getElementById('Inputemailregistration').value;
    let passwordEmail = document.getElementById('InputPasswordRegistration').value;
    var data = {};
    data.name = nameEmail;
    data.type = 'email';
    data.password = passwordEmail; 

    // Сохраняем данные в куки
        saveUserDataToCookies( email, data);
        displayWelcomeMessageEmail(email);
        //console.log(`Имя: ${nameEmail}, Email: ${email}, Пароль: ${passwordEmail}`);
    } 
);
// Форма Авторизации
document.getElementById('btnAutorizFormSend').addEventListener('click', function () {
    let telOrEmail = document.getElementById('phoneOrEmail').value;
    let passwordAut = document.getElementById('InputPasswordAutorization').value;
    var dataAut = {};
    
    dataAut.key = telOrEmail;
    dataAut.password = passwordAut;
    dataAut.autoriz = 'autorization'; 

    // Сохраняем данные в куки
        DataToCookies(dataAut);
        //displayWelcomeMessageAutoriz(dataAut);
        //console.log(`Key: ${telOrEmail}, Пароль: ${passwordAut}, Статус: 'autorization'`);
        //console.log(data);
    } 
);

// Получаем данные из куки
function saveUserDataToCookies(value, data) {
    
        let json_users = Cookies2.get('users');
        if (typeof json_users == 'undefined'){
            json_users = '{}';
        }
        let users = JSON.parse(json_users);
        //console.log(users);
        users[value] = data;
        
        let users_json = JSON.stringify(users);
        //console.log(users_json);

        Cookies2.set('users', users_json)
}

// Сравниваем данные авторизованного пользователя с базой дынных из куки
function DataToCookies(dataAut) {
    
    let json_users = Cookies2.get('users');
    if (typeof json_users == 'undefined'){
        json_users = '{}';
    }
    let users = JSON.parse(json_users);
    console.log(users);

    let usersAutorization = {};

for (let [keysis, value] of Object.entries(users)) {
   
    if (keysis === dataAut.key && value.password === dataAut.password) {

        usersAutorization[keysis] = value.password;
        console.log(`С возвращением, ${value.name}`);
        welcomeMessageAut.innerHTML = `<div class="alert alert-success">С возвращением, ${value.name}</div>`;
        break;        
    
    } else {
        
        welcomeMessageAut.innerHTML = '<div class="alert alert-danger">' + "Вы ввели неправильный пароль или логин" + '</div>'; 
    }
}

let usersAutorization_json = JSON.stringify(usersAutorization);
      

Cookies2.set('usersAutorization', usersAutorization_json);
}


// Отображение данных на странице Telefon, Email

function displayWelcomeMessageTel(phone) {
    const users_json = Cookies2.get('users');
    
    let usersParseGet = JSON.parse(users_json);
    //console.log(usersParseGet);
  
    const welcomeMessageTelefon = document.getElementById('welcomeMessageTelefon'); // Блок для вывода сообщения

    if (typeof usersParseGet[phone].name !== "undefined" && phone ) {
      
        welcomeMessageTelefon.innerHTML = `<div class="alert alert-success">Добро пожаловать, ${usersParseGet[phone].name}! Вы зарегистрировались с помощью телефона по номеру: ${phone}.</div>`;
    } else {
        welcomeMessageTelefon.innerHTML = `<div class="alert alert-info">Пожалуйста, зарегистрируйтесь.</div>`;
        
    }

}

function displayWelcomeMessageEmail(email) {
    let users_json = Cookies2.get('users');
    
    let usersParseGet = JSON.parse(users_json);
    
    //console.log(usersParseGet);

    const welcomeMessageEmail = document.getElementById('welcomeMessageEmail'); // Блок для вывода сообщения

     if (typeof usersParseGet[email].name !== "undefined" && email) {
        welcomeMessageEmail.innerHTML = `<div class="alert alert-success">Добро пожаловать, ${usersParseGet[email].name}! Вы зарегистрировались с помощью Email: ${email}.`;
    } else {      
        welcomeMessageEmail.innerHTML = `<div class="alert alert-info">Пожалуйста, зарегистрируйтесь.</div>`;
    }
   
}




 // Аккордеон

 let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


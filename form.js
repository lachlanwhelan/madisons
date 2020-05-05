var form = document.getElementsByClassName('form')[0];
var confirmation = document.querySelector('.confirmation');
var card = document.querySelector('.confirmation__card');
var inputList = document.querySelectorAll('input');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validate();
});


function validate(){
    if(inputList[0].value === ''){
        alert('Please enter your name');
        inputList[0].focus();
        inputList[0].style.border = '2px solid red';
        return false;
    }
    if(inputList[1].value === '' && validateEmail(inputList[1].value)){
        alert('Please enter your email');
        inputList[1].focus();
        inputList[1].style.border = '2px solid red';
        return false;
    }
    if(inputList[2].value === ''){
        alert('Please enter your phone number');
        inputList[2].focus();
        inputList[2].style.border = '2px solid red';
        return false;
    }

    submit();
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



function submit(){
    var formElements = form.elements;
    var data = {};
    
    for(let index = 0; index < formElements.length; index++) {
        if(formElements[index].name.length > 0){
            data[formElements[index].name] = formElements[index].value;
        }
    }

    localStorage.setItem('formData', JSON.stringify(data));
    var data = JSON.parse(localStorage.getItem('formData'));
    var object = Object.entries(data);
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            const text = document.createTextNode(element[0] + ': ' + element[1]);
            const title = document.createElement('h3');
            title.appendChild(text);
            card.appendChild(title);
        }
    }

    form.classList.add('fadeOut');
    confirmation.classList.add('dropdown');
}


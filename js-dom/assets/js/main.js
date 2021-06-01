const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('submit-button');


button.onclick = function () {
    checkValues();
}

function checkValues(){
    let count = 0;

    if(firstname.value === ""){
        setErrorMsg(firstname, "Firstname field can not be blank.")
    }
    else if(firstname.value.length<3 || firstname.value.length>50){
        setErrorMsg(firstname, "Firstname must be 3-50 characters long.");
    }
    else{
        setSuccessMsg(firstname);
        localStorage.setItem("firstname", firstname.value);
        count++;
    }

    if(lastname.value === ""){
        setErrorMsg(lastname, "Lastname field can not be blank.")
    }
    else if(lastname.value.length<3 || lastname.value.length>50){
        setErrorMsg(lastname, "Lastname must be 3-50 characters long.");
    }
    else{
        setSuccessMsg(lastname);
        localStorage.setItem("lastname", lastname.value);
        count++;
    }

    if(email.value === ""){
        setErrorMsg(email, "E-mail field can not be blank.")
    }
    else if(email.value.length<3 || email.value.length>100){
        setErrorMsg(email, "E-mail must be 3-100 characters long.");
    }
    else if(!(email.value.includes('@'))){
        setErrorMsg(email, "E-mail must contain '@' symbol.");
    }
    else{
        setSuccessMsg(email);
        count++;
    }

    if(password.value === ""){
        setErrorMsg(password, "Password field can not be blank.")
    }
    else{
        setSuccessMsg(password);
        count++
    }

    if(count==4)
    {
        window.location.href = 'home.html'
    }
}


function setErrorMsg(input, message){
    const parentDiv = input.parentElement;
    const errorText = parentDiv.querySelector('span');
    input.classList.remove('success');
    input.classList.add ('error');
    errorText.classList.remove('d-none');
    errorText.innerText = message;
}

function setSuccessMsg(input){
    const parentDiv = input.parentElement;
    const errorText = parentDiv.querySelector('span');
    input.classList.remove('error')
    input.classList.add ('success');
    errorText.classList.add('d-none');
}









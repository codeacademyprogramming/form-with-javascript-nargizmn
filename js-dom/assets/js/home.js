const myfirstname = localStorage.getItem("firstname");
const mylastname = localStorage.getItem("lastname");
const myheading = document.getElementById('my-heading')
myheading.innerHTML = `Welcome, my son ${myfirstname} ${mylastname}`;








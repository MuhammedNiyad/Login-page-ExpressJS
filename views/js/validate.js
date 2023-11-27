const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

console.log(email);

form.addEventListener("submit", onSubmitFunction)

function onSubmitFunction(e){
    if(email.value ==='' || password.value === ''){
        e.preventDefault()
        alert('Please fill the form...!');
        return false;
    };
}

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJHLMNOPQRSTUVWXYZ0123456789@#*";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    
    sizePassword.innerHTML = this.value;

}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;

    console.log(pass);
}
// Estudar
function copyPassword(params) {
    let value = document.getElementById("password").innerHTML;
    var input = document.body.appendChild(document.createElement("input"));
    input.value = value;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
    alert(value);
}




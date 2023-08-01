function formSubmit() {
    let message = document.getElementById("message");
    let display = document.getElementById("display");
    display.innerHTML = message.value;
    message.value = "";
    document.cookie = display.innerHTML;
}

let button = document.getElementById("post");
button.addEventListener("click", formSubmit);

let display = document.getElementById("display");
display.innerHTML = document.cookie;
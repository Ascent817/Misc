function formSubmit() {
    let message = document.getElementById("message").value;
    let display = document.getElementById("display");
    display.innerHTML = message;
    message.value = "";
}

let button = document.getElementById("post");
button.addEventListener("click", formSubmit);
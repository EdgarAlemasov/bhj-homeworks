const signUp = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const input = document.querySelectorAll("input");
const userId = document.getElementById("user_id");


// window.localStorage.removeItem('id');

if (localStorage.getItem("id")) {
    welcome.classList.add("welcome_active");
    userId.textContent = `${localStorage.getItem("id")}`;
}

signUp.addEventListener("submit", (event) => {
    const formData = new FormData(signUp);
    const request = new XMLHttpRequest();

    request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    request.addEventListener("load", function () {
        // console.log(this.response)
        signUp.reset();
        if (this.response.success == true) {
            welcome.classList.add("welcome_active");
            localStorage.setItem("id", `${this.response.user_id}`);
            userId.textContent = `${this.response.user_id}`;
        } else {
            alert("Неверный логин или пароль");
        };
    });
    request.responseType = "json";
    request.send(formData);
    event.preventDefault();
})




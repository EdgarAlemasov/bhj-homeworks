const signUp = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const input = document.querySelectorAll("input");
const userId = document.getElementById("user_id");


signUp.addEventListener("submit", (element) => {
    const fornData = new FormData(signUp);
    const request = new XMLHttpRequest();

    request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    request.addEventListener("readystatechange", function () {
        if (this.readyState == request.DONE) {
            const data = JSON.parse(this.responseText);
            input.forEach(item => {
                item.value ="";
            });
            if (data.success == true) {
                welcome.classList.add("welcome_active");
                localStorage.setItem("id", data.user_id);
                userId.textContent = `${data.user_id}`;
            } else {
                alert("Неверный логин или пароль");
            }
        }
    });
    request.send(fornData);
    element.preventDefault();
})


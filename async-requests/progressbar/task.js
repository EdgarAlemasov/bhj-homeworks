const progress = document.getElementById("progress");
const form = document.getElementById("form");
const send = document.getElementById("send");


send.addEventListener("click", (element) => {
    element.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.addEventListener("progress", function(event) {
        progress.value = event.loaded / event.total;
    });
    xhr.send(formData);
})
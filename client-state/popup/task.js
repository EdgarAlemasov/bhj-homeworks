const getWindow = document.getElementById("subscribe-modal");
const setClose = document.querySelector(".modal__close");


function setCookie (name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

// document.cookie = "closeWindow=; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
// console.log(document.cookie)

function getCookie (name) {
    const pairs = document.cookie.split("; ");
    let answer;
    try {
        let cookie = pairs.find(element => element.startsWith(name + "="))
        answer = cookie.substring(name.length + 1)
    } catch {
        answer = false
    }
    return answer
}

if (getCookie("closeWindow")) {
    getWindow.classList.remove("modal_active")
} else {
    getWindow.classList.add("modal_active")
    setClose.onclick = function() {
        getWindow.classList.remove("modal_active");
    }
    setCookie("closeWindow", true)
    // console.log(document.cookie)
}
const getLoadImg = document.querySelector(".loader");
const getItems = document.getElementById("items");


const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        getLoadImg.classList.remove("loader_active");
        let information = JSON.parse(xhr.responseText);
        let coins = information.response.Valute;


        for (let key in coins) {
            getItems.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${coins[key].CharCode}
                </div>
                <div class="item__value">
                    ${coins[key].Value}
                </div>
                <div class="item__currency">
                    ${coins[key].Name}
                </div>
            </div>
            `
        }
    }
})
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

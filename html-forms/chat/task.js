const getChat = document.querySelector(".chat-widget");

getChat.onclick = () => {
    getChat.classList.add("chat-widget_active");
}

const getInput = document.getElementById("chat-widget__input");

function onKey (item) {
    if (item.key === "Enter") {
        const timme = new Date();
        const messageCustomer = getInput.value;
        const messageRobot = [
            'Сам разберешься?',
            'Ага щас!',
            'Не пишите нам больше!',
            'И что ты сделаешь?',
            'Асталависта!',
            'Мы нечего не будем вам продавать!',
            'Где я?',
        ],
            index = Math.floor(Math.random() * messageRobot.length);
        if (messageCustomer != '') {
            const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                        <div class="message__text">${messageCustomer}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                            <div class="message__text">${messageRobot[index]}</div>
                    </div>`;
        }
        getInput.value = '';
    }
}

getChat.addEventListener("keydown", onKey)


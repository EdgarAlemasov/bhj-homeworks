let title = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
    if(xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.responseText);
        title.innerText = data.data.title;
        let item_id = data.id;

        const answers = data.data.answers;
        answers.forEach((element, index) => {
            pollAnswers.innerHTML += `
            <button data-index="${index + 1}" class="poll__answer">
              ${element}
            </button>
            `
        });

        document.addEventListener('click', function (e) {
            if(e.target.classList.contains('poll__answer')) {
                alert('Ваш голос учтен');
                e.defaultPrevented;
                let index = e.target.dataset.index;

                let result = new XMLHttpRequest();
                result.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                result.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                result.send( `vote=${item_id}&answer=${index}`);

                result.addEventListener('readystatechange', () => {
                    if (result.readyState === result.DONE) {
                        let dataResult = JSON.parse(result.responseText);
                        pollAnswers.innerHTML="";
                        let data = dataResult.stat;
                        for (let key in data) {
                            pollAnswers.innerHTML += `<div>${data[key].answer}  ${data[key].votes}</div>`
                        }
                    }
                });
            }
        });
    }
});

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader("Content-type", "aplication/json");
xhr.send();
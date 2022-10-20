const getTaskInput = document.getElementById('task__input');
const addTask = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const addItem = function(e) {
    e.preventDefault();
    let text = getTaskInput.value;

    if(getTaskInput.value) {
        tasksList.insertAdjacentHTML('afterend', `
        <div class="task">
          <div class="task__title">
            ${text}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);

        getTaskInput.value = '';

        const taskRemove = document.querySelector('.task__remove');
        taskRemove.addEventListener('click', removeItem);
    }
};

addTask.addEventListener('click', addItem);
getTaskInput.addEventListener('keydown', function(e) {
    if (e.key === 13) {
        addItem();
    }
});

const removeItem = function(e) {
    const taskRemove = e.target.closest('.task');
    taskRemove.remove();
};
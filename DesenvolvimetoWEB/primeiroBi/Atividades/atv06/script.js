const form = document.getElementById('taskForm');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.style.marginLeft = '10px';

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        li.remove();
    }
    else if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
        event.target.closest('li').remove();
    }
});
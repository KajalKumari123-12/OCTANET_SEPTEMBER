document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const createTaskElement = (taskName, completed = false) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskName;
        if (completed) {
            li.classList.add('completed');
        }
        li.appendChild(span);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(li));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(li));

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(checkbox);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    };

    const addTask = () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            createTaskElement(taskName);
            taskInput.value = '';
        }
    };

    const editTask = (li) => {
        const newName = prompt('Edit task name:', li.querySelector('span').textContent);
        if (newName) {
            li.querySelector('span').textContent = newName;
        }
    };

    const deleteTask = (li) => {
        if (confirm('Are you sure you want to delete this task?')) {
            taskList.removeChild(li);
        }
    };

    addTaskButton.addEventListener('click', addTask);
});
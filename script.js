const taskName = document.querySelector('#task-name');
const addTaskButton = document.querySelector('#add-task-button');
const toDo = document.querySelector('#to-do')

// function addEventListenersToTask(task) {
//
// }

if (taskName && addTaskButton) {
    addTaskButton.addEventListener('click', function(){
        const newTask = document.createElement('div');
        const newTaskName = document.createElement('h2');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        const moveRightButton = document.createElement('button');
        moveRightButton.classList.add('move-right-button');

        toDo.append(newTask, newTaskName, deleteButton, moveRightButton);
        newTaskName.innerText = taskName.value;
        deleteButton.innerText = 'Delete';
        moveRightButton.innerText = '->';
        taskName.value = '';
    })
}
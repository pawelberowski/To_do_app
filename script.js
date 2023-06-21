import './styles.css'

const taskNameInput = document.querySelector('#task-name');
const addTaskButton = document.querySelector('#add-task-button');
const toDo = document.querySelector('#to-do');
const doing = document.querySelector('#doing');
const done = document.querySelector('#done');
const leftButtonDirection = 'left';
const rightButtonDirection = 'right';
function addMoveButton(buttonDirection, taskElement) {
    const deleteButton = taskElement.querySelector('.delete-button');
    const newMoveButton = document.createElement('button');

    if (buttonDirection === leftButtonDirection) {
        newMoveButton.classList.add('move-left-button');
        deleteButton.before(newMoveButton);
        newMoveButton.innerText = '<-';
    }
    if (buttonDirection === rightButtonDirection) {
        newMoveButton.classList.add('move-right-button');
        deleteButton.after(newMoveButton);
        newMoveButton.innerText = '->';
    }
}
function removeMoveButton(taskElement, buttonClass) {
    const buttonToRemove = taskElement.querySelector(buttonClass);
    buttonToRemove.remove();
}
function attachListenersToMoveButton(task, clonedTask, buttonClass) {
    const moveButton = task.querySelector(buttonClass);
    if (!moveButton) {
        return;
    }
    if (toDo.contains(task)) {
        moveButton.addEventListener('click', function() {
            addMoveButton(leftButtonDirection, clonedTask);
            doing.append(clonedTask);
            addEventListenersToTask(clonedTask);
            task.remove();
        })
    }
    if (doing.contains(task)) {
        moveButton.addEventListener('click', function() {
            removeMoveButton(clonedTask, buttonClass)
            if (buttonClass === '.move-right-button') {
                done.append(clonedTask);
            } else {
                toDo.append(clonedTask);
            }
            addEventListenersToTask(clonedTask);
            task.remove();
        })
    }
    if (done.contains(task)) {
        moveButton.addEventListener('click', function() {
            addMoveButton(rightButtonDirection, clonedTask);
            doing.append(clonedTask);
            addEventListenersToTask(clonedTask);
            task.remove();
        })
    }
}
function addEventListenersToTask(task) {
    const clonedDeleteButton = task.querySelector('.delete-button');
    const clonedTask = task.cloneNode(true);

    if (clonedDeleteButton) {
        clonedDeleteButton.addEventListener('click', function() {
            task.remove();
        })
    }
    attachListenersToMoveButton(task, clonedTask, '.move-right-button');
    attachListenersToMoveButton(task, clonedTask,'.move-left-button');
}
if (taskNameInput && addTaskButton) {
    addTaskButton.addEventListener('click', function() {
        if (!taskNameInput.value) {
            return;
        }
        const newTask = document.createElement('div');
        const newTaskName = document.createElement('h3');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        newTask.append(newTaskName, deleteButton);
        newTaskName.innerText = taskNameInput.value;
        deleteButton.innerText = 'Delete';
        addMoveButton(rightButtonDirection, newTask);
        toDo.append(newTask);
        addEventListenersToTask(newTask);
        taskNameInput.value = '';
    })
}

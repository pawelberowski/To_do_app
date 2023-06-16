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
function addEventListenersToTask(task) {
    const clonedDeleteButton = task.querySelector('.delete-button');
    const clonedMoveRightButton = task.querySelector('.move-right-button');
    const clonedMoveLeftButton = task.querySelector('.move-left-button');
    const clonedTask = task.cloneNode(true);

    if (clonedDeleteButton) {
        clonedDeleteButton.addEventListener('click', function() {
            task.remove();
        })
    }
    if (clonedMoveRightButton) {
        if (toDo.contains(task)) {
            clonedMoveRightButton.addEventListener('click', function() {
                addMoveButton(leftButtonDirection, clonedTask);
                doing.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
        if (doing.contains(task)) {
            clonedMoveRightButton.addEventListener('click', function() {
                const currentRight = clonedTask.querySelector('.move-right-button');
                currentRight.remove();
                done.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
    }
    if (clonedMoveLeftButton) {
        if (doing.contains(task)) {
            clonedMoveLeftButton.addEventListener('click', function() {
                const currentLeft = clonedTask.querySelector('.move-left-button');
                currentLeft.remove();
                toDo.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
        if (done.contains(task)) {
            clonedMoveLeftButton.addEventListener('click', function() {
                addMoveButton(rightButtonDirection, clonedTask);
                doing.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
    }
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
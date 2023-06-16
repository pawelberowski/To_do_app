const taskNameInput = document.querySelector('#task-name');
const addTaskButton = document.querySelector('#add-task-button');
const toDo = document.querySelector('#to-do')
const doing = document.querySelector('#doing')
const done = document.querySelector('#done')

function addMoveButton(button, task) {
    const currentDelete = task.querySelector('.delete-button');
    const newMoveButton = document.createElement('button');

    if (button === 'left') {
        newMoveButton.classList.add('move-left-button');
        currentDelete.before(newMoveButton);
        newMoveButton.innerText = '<-';
    }
    if (button === 'right') {
        newMoveButton.classList.add('move-right-button');
        currentDelete.after(newMoveButton);
        newMoveButton.innerText = '->';
    }
}
function addEventListenersToTask(task) {
    const clonedDeleteButton = task.querySelector('.delete-button');
    const clonedMoveRightButton = task.querySelector('.move-right-button');
    const clonedMoveLeftButton = task.querySelector('.move-left-button');

    if (clonedDeleteButton) {
        clonedDeleteButton.addEventListener('click', function() {
            task.remove();
        })
    }
    if (clonedMoveRightButton) {
        if (toDo.contains(task)) {
            clonedMoveRightButton.addEventListener('click', function() {
                const clonedTask = task.cloneNode(true);
                addMoveButton('left', clonedTask);
                doing.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
        if (doing.contains(task)) {
            clonedMoveRightButton.addEventListener('click', function() {
                const clonedTask = task.cloneNode(true);
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
                const clonedTask = task.cloneNode(true);
                const currentLeft = clonedTask.querySelector('.move-left-button');
                currentLeft.remove();
                toDo.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
        if (done.contains(task)) {
            clonedMoveLeftButton.addEventListener('click', function() {
                const clonedTask = task.cloneNode(true);
                addMoveButton('right', clonedTask);
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
        addMoveButton('right', newTask);
        toDo.append(newTask);
        addEventListenersToTask(newTask);
        taskNameInput.value = '';
    })
}
const taskName = document.querySelector('#task-name');
const addTaskButton = document.querySelector('#add-task-button');
const toDo = document.querySelector('#to-do')
const doing = document.querySelector('#doing')
const done = document.querySelector('#done')

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
                const moveLeftButton = document.createElement('button');
                moveLeftButton.classList.add('move-left-button');
                const currentDelete = clonedTask.querySelector('.delete-button')
                currentDelete.before(moveLeftButton);
                moveLeftButton.innerText = '<-'
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
                const moveRightButton = document.createElement('button');
                moveRightButton.classList.add('move-right-button');
                const currentDelete = clonedTask.querySelector('.delete-button')
                currentDelete.after(moveRightButton);
                moveRightButton.innerText = '->'
                doing.append(clonedTask);
                addEventListenersToTask(clonedTask);
                task.remove();
            })
        }
    }
}

if (taskName && addTaskButton) {
    addTaskButton.addEventListener('click', function(){
        const newTask = document.createElement('div');
        const newTaskName = document.createElement('h3');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        const moveRightButton = document.createElement('button');
        moveRightButton.classList.add('move-right-button');

        newTask.append(newTaskName, deleteButton, moveRightButton);
        newTaskName.innerText = taskName.value;
        deleteButton.innerText = 'Delete';
        moveRightButton.innerText = '->';
        
        toDo.append(newTask);
        addEventListenersToTask(newTask);
        taskName.value = '';
    })
}
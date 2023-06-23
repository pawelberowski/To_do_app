import './styles.css';
import { rightButtonDirection, addMoveButton } from './add_move_button';
import { toDo } from './attach_listeners_to_move_button';
import { addEventListenersToTask } from './add_event_listeners_to_task';

const taskNameInput = document.querySelector('#task-name');
const addTaskButton = document.querySelector('#add-task-button');

if (taskNameInput && addTaskButton) {
  addTaskButton.addEventListener('click', function () {
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
  });
}

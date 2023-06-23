import { removeMoveButton } from './remove_move_button';
import {
  leftButtonDirection,
  rightButtonDirection,
  addMoveButton,
} from './add_move_button';
import { addEventListenersToTask } from './add_event_listeners_to_task';

const toDo = document.querySelector('#to-do');
const doing = document.querySelector('#doing');
const done = document.querySelector('#done');

function attachListenersToMoveButton(task, clonedTask, buttonClass) {
  const moveButton = task.querySelector(buttonClass);
  if (!moveButton) {
    return;
  }
  if (toDo.contains(task)) {
    moveButton.addEventListener('click', function () {
      addMoveButton(leftButtonDirection, clonedTask);
      doing.append(clonedTask);
      addEventListenersToTask(clonedTask);
      task.remove();
    });
  }
  if (doing.contains(task)) {
    moveButton.addEventListener('click', function () {
      removeMoveButton(clonedTask, buttonClass);
      if (buttonClass === '.move-right-button') {
        done.append(clonedTask);
      } else {
        toDo.append(clonedTask);
      }
      addEventListenersToTask(clonedTask);
      task.remove();
    });
  }
  if (done.contains(task)) {
    moveButton.addEventListener('click', function () {
      addMoveButton(rightButtonDirection, clonedTask);
      doing.append(clonedTask);
      addEventListenersToTask(clonedTask);
      task.remove();
    });
  }
}

export { toDo, doing, done, attachListenersToMoveButton };

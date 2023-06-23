import { attachListenersToMoveButton } from "./attach_listeners_to_move_button";

export function addEventListenersToTask(task) {
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
export function removeMoveButton(taskElement, buttonClass) {
  const buttonToRemove = taskElement.querySelector(buttonClass);
  buttonToRemove.remove();
}
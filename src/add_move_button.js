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

export { leftButtonDirection, rightButtonDirection, addMoveButton };

function deleteTodoList(element) {
  if (element.classList.contains('show')) {
    element.children[2].classList.remove('none');
    element.children[3].classList.remove('show');
    element.classList.remove('show');
  } else {
    element.children[2].classList.add('none');
    element.children[3].classList.add('show');
    element.classList.add('show');
  }
}
module.exports = { deleteTodoList };

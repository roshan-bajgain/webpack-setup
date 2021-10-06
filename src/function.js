export const saveData = (list) => {
  list.sort((a, b) => a.index - b.index);
  localStorage.setItem('todos', JSON.stringify(list));
};
export const setCompleted = (todoList, box) => {
  const { id } = box.dataset;
  const { checked } = box;

  const element = todoList.find((item) => item.index.toString() === id);
  element.completed = checked;

  saveData(todoList);
};

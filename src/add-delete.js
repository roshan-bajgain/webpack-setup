
export function addTodoToList(description, completed = false, id, list) {
  const todo = { description, completed, id };
  list.push(todo);
  return list;
}


function deleteTask(idx) {
  const storage = JSON.parse(localStorage.getItem("todos"));
  const savedata = storage.filter((value, index) => index !== idx);
  savedata.forEach((obj, index) => {
    obj.index = index + 1;
  });
  localStorage.setItem("todos", JSON.stringify(savedata));
  window.location.reload();
}

export function addTodoToList(description, completed = false, id, list) {
  const todo = { description, completed, id };
  list.push(todo);
  return list;
}


module.exports = { addTodoToList };

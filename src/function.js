export const setCompleted = (todoList, box) => {
    // const id = box.dataset.id;
    // const checked = box.checked;
    // console.log('id: ', id, 'checked: ', checked);

    // const element = todoList.find( item => item.index.toString() === id);
    // element.completed = checked;

    saveData(todoList);
    // item.completed = !(item.complted);
    // return item;
}

export const saveData = (list) => {
    list.sort((a, b) => a.index - b.index);
    localStorage.setItem('todos', JSON.stringify(list));
};
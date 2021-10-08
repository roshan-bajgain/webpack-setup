export const inputBox = document.querySelector('#add-bar');
export const addBtn = document.querySelector('.enter');

export const listArr = JSON.parse(localStorage.getItem('todos')) || [];
export const createlocalstorage = (array) => {
  const localStorageObject = {
    description: inputBox.value,
    completed: false,
    index: array.length + 1,
  };
  array.push(localStorageObject);
  localStorage.setItem('todos', JSON.stringify(array));
};

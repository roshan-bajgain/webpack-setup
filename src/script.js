
export const inputBox = document.querySelector('#add-bar');
export const addBtn = document.querySelector('.enter');
export const todolist = document.querySelector('.list-container');
  export let listArr = JSON.parse(localStorage.getItem('todos')) || [];
export const createlocalstorage = (array) => {
    const localStorageObject = {
      description: inputBox.value,
      completed: false,
      index: array.length + 1,
    };
     array.push(localStorageObject);
     localStorage.setItem('todos', JSON.stringify(array));
   }

 export function showTask (){
    let localStorage = localStorage.getItem("todos");
    if (localStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(localStorage);
    }
    let newlitag = '';
    listArr.forEach((element, index) => {
        newlitag += ` <input type="text" name="" data-id="${item.index}" value="${element}">
            <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>`;
    });
    todolist.innerHTML = newlitag;
    inputBox.Value = '';
}

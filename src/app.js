import './style.css';
import { setCompleted } from './function.js';
import { inputBox, showTask, createlocalstorage, addBtn, listArr } from './script.js';


const container = document.querySelector('.list-container');

const display = (array) => {
  let containerItems = '';
  array.forEach((item) => {
     containerItems += `
    <div class="task">
    <div class="wrapper">
        <input type="checkbox" name="" id="boxes" class="box m-input" data-id=${item.index} ${item.completed ? 'checked' : ''}>
        <input readonly type="text" name="" data-id="${item.index}" value="${item.description}">
    </div>
        <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>
        
    </div>
    <hr>`;
  });

  container.innerHTML += containerItems;

  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    box.addEventListener('change', () => {
      setCompleted(todoList, box);
    });
  });
};


addBtn.addEventListener('click', () => {
      createlocalstorage(listArr);
      window.location.reload();
   });
   display(listArr);


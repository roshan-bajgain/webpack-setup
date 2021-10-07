import './style.css';
import { setCompleted } from './function.js';
import { inputBox, showTask, createlocalstorage, addBtn, listArr } from './script.js';

  const navtoggle = document.querySelector('#ellipse');
  const container = document.querySelector('.list-container');
  
  const display = (array) => {
    let containerItems = '';
    array.forEach((item) => {
       containerItems += `
      <div class="task">
      <div class="wrapper">
          <input type="checkbox" name="" id="boxes" class="box m-input" data-id=${item.index} ${item.completed ? 'checked' : ''}>
          <input type="text" name="" data-id="${item.index}" value="${item.description}">
      </div>
          <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>
         <i id="deletebtn" class="fas fa-trash"></i>
          
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

  const task = document.querySelectorAll('.task');

  function deleteTask(idx) {
    const storage = JSON.parse(localStorage.getItem("todos"));
    const savedata = storage.filter((value, index) => index !== idx);
    localStorage.setItem('todos', JSON.stringify(savedata));
    window.location.reload();
  };


  task.forEach((element, index) => {
    const el = element.childNodes[3];
    const deletebtn = element.childNodes[5];
    el.addEventListener('click',() =>{
      deletebtn.style.display = 'block';
      el.style.display = 'none';
    })
    deletebtn.addEventListener('click',()=>{
      deleteTask(index);
    })
  

  });

  


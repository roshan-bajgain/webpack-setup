import './style.css';
import {
  createlocalstorage, addBtn, listArr,
} from './script.js';

const container = document.querySelector('.list-container');
const deleteallbtn = document.querySelector('.clear');

const display = (array) => {
  let containerItems = '';
  array.forEach((item) => {
    containerItems += `
      <div class="task">
      <div class="wrapper">
          <input type="checkbox" name="" id="boxes" class="box m-input" data-id=${item.index} ${item.completed ? 'checked' : ''}>
          <input type="text" name="" data-id="${item.index}" id="${item.index}" class="input-text" value="${item.description}">
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
      const inputtext = document.getElementById(box.dataset.id);

      const founditem = listArr.find((item) => box.dataset.id === item.index.toString());
      founditem.completed = box.checked;
      if (founditem.completed === true) {
        inputtext.style.textDecoration = 'line-through';
      } else {
        inputtext.style.textDecoration = 'none';
      }
      localStorage.setItem('todos', JSON.stringify(listArr));
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
  const storage = JSON.parse(localStorage.getItem('todos'));
  const savedata = storage.filter((value, index) => index !== idx);
  savedata.forEach((obj, index) => {
    obj.index = index + 1;
  });
  localStorage.setItem('todos', JSON.stringify(savedata));
  window.location.reload();
}

task.forEach((element, index) => {
  const el = element.childNodes[3];
  const deletebtn = element.childNodes[5];
  el.addEventListener('click', () => {
    deletebtn.style.display = 'block';
    el.style.display = 'none';
    element.style.background = 'rgb(214,213,164)';
  });
  deletebtn.addEventListener('click', () => {
    deleteTask(index);
  });
});

function deletecompleted() {
  deleteallbtn.addEventListener('click', () => {
    const filteredarray = listArr.filter((object) => object.completed !== true);
    filteredarray.forEach((obj, index) => {
      obj.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(filteredarray));
  });
}
deletecompleted();

function edit() {
  const inputs = document.querySelectorAll('.input-text');
  inputs.forEach((input, inputindex) => {
    input.addEventListener('change', () => {
      listArr.filter((obj, objIndex) => {
        if (inputindex === objIndex) {
          obj.description = input.value;
        }
        return false;
      });
      localStorage.setItem('todos', JSON.stringify(listArr));
    });
  });
}
edit();

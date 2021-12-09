// import { deleteTask } from './app';
// import { listArr } from './script';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line
const { document } = dom.window;

test('remove form the dom', () => {
  document.body.innerHTML = `
    <li class="list-container d-flex">
      <input type="checkbox" class="checkbox">
      <p class="items show"   contenteditable="true">Hello Todo's</p>
      <i class="fas fa-ellipsis-v  dots"></i>
      <i class="far fa-trash-alt show delete"></i>
    </li>
    `;
  const element = document.querySelector('.list-container');
  expect(element.children[2].classList.contains('show')).toBe(false);
  expect(element.children[3].classList.contains('show')).toBe(true);
});

// describe ('removing list from local storage', ()=>{
//   const list = [
//     {
//       index: 0,
//       description: 'look outside',
//       completed: true
//     },
//     {
//       index: 1,
//       description: 'Add homework',
//       completed: true,
//     },
//   ];
//   localStorage.setItem('todos', JSON.stringify(list));
//   test ('test the description',()=> {
//     deleteTask(1);
//     const storage = JSON.parse(localStorage.getItem('todos'))
//     expect(storage).toHaveLength(1);
//   })
// })
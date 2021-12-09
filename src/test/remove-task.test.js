import { deleteTask } from '../app';

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
  // expect(element.children[4].classList.contains('show')).toBe(false);
});

// import deleteItem from "../mocks/remove-task.js";

// describe("remove a task from the list", () => {
//   const tasks = [
//     {
//       description: "complete",
//       status: false,
//       index: "1",
//     },
//     {
//       description: "two",
//       status: false,
//       index: "2",
//     },
//     {
//       description: "three",
//       status: false,
//       index: "3",
//     },
//   ];
//   test("remove an entry from the todo list", () => {
//     const todo = tasks[1];
//     expect(deleteItem(todo, tasks)).toHaveLength(2);
//   });
// });
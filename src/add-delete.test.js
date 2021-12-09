import { addTodoToList } from './add-delete.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line
const document = dom.window.document; // eslint-disable-line

describe('Add to the List Function', () => {
  const list = [];
  addTodoToList('take a break', false, 0, list);
  addTodoToList('Drink water', false, 1, list);
  addTodoToList('Walk the Dog', false, 2, list);
  addTodoToList('Submit the project', false, 3, list);
  test('Should give the length of the array', () => {
    expect(list).toHaveLength(4);
  });
  test('Should have property description', () => {
    expect(list[1]).toHaveProperty('description', 'Drink water');
  });
  test('Should check if completed has a false value', () => {
    expect(list[2].completed).toBeFalsy();
  });
  test('Should check if object contains certain value', () => {
    expect(list[3].description).toContain('Submit the project');
  });
  test('Should check if id is 3', () => {
    expect(list[3].id).toBe(3);
  });
});

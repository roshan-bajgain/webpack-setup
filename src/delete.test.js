const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line
const document = dom.window.document; // eslint-disable-line
const window = dom.window.document;
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe ('removing list from local storage', ()=>{
    const list = [
      {
        index: 0,
        description: 'look outside',
        completed: true
      },
      {
        index: 1,
        description: 'Add homework',
        completed: true,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(list));
    test ('test the description',()=> {
      deleteTask(1);
      const storage = JSON.parse(localStorage.getItem('todos'))
      expect(storage).toHaveLength(1);
    })
  })
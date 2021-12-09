import localStorageMock from '../__mocks__/localstorage.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><ul class="d-flex todo-lists"></ul>`); // eslint-disable-line
const document = dom.window.document; // eslint-disable-line

const deleteTask = jest.fn((id) => {
  const storage = JSON.parse(localStorageMock.getItem('todos'));
  const savedata = storage.filter((value, index) => index !== id);
  savedata.forEach((obj, index) => {
    obj.index = index + 1;
  });
  localStorageMock.setItem('todos', JSON.stringify(savedata));
});

describe('removing list from local storage', () => {
  const list = [
    {
      index: 0,
      description: 'look outside',
      completed: true,
    },
    {
      index: 1,
      description: 'Add homework',
      completed: true,
    },
  ];
  localStorageMock.setItem('todos', JSON.stringify(list));
  test('test the description', () => {
    deleteTask(1);
    const storage = JSON.parse(localStorageMock.getItem('todos'));
    expect(storage).toHaveLength(1);
  });
});
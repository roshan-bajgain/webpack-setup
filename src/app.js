import './style.css';

const container = document.querySelector('.list-container');
const todoList = [
  {
    index: 0,
    description: 'Wash the dishes',
    completed: true,
  },

  {
    index: 1,
    description: 'Complete todo lis project',
    completed: true,
  },

  {
    index: 2,
    description: 'Play game with my girlfriend',
    completed: true,
  },

  {
    index: 3,
    description: 'Eat some cookies',
    completed: true,
  },
];

const display = () => {
  todoList.forEach((item) => {
    const containerItems = `
    <div class="task">
    <div class="wrapper">
        <input type="checkbox" name="" class="box m-input" data-id=${item.index} ${item.completed ? 'checked' : ''}>
        <input type="text" name="" data-id="${item.index}" value="${item.description}">
    </div>
        <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>
        
    </div>
    <hr>`;
    container.innerHTML += containerItems;
  });
};
display();

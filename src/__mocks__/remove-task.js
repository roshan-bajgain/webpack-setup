import localStorageMock from "./localStorage.js";

function deleteTodoList(element) {
  if (element.classList.contains("show")) {
    element.children[2].classList.remove("none");
    element.children[3].classList.remove("show");
    element.classList.remove("show");
  } else {
    element.children[2].classList.add("none");
    element.children[3].classList.add("show");
    element.classList.add("show");
  }
}
module.exports = { deleteTodoList, getFromStorage, saveToStorage };

function generateID(tasks) {
  const newTask = {
    description: document.getElementById("addTask").value,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorageMock.setItem("todo", tasks);
}

export default generateID;

 function deleteTask(idx) {
   const storage = JSON.parse(localStorage.getItem("todos"));
   const savedata = storage.filter((value, index) => index !== idx);
   savedata.forEach((obj, index) => {
     obj.index = index + 1;
   });
   localStorage.setItem("todos", JSON.stringify(savedata));
   window.location.reload();
 }

 deleteTask();




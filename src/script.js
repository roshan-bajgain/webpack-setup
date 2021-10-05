import { indexOf } from "lodash";

const inputBox = document.querySelector('.add-bar');
const addBtn = document.querySelector('.enter');
const todolist = document.querySelector('.list-container');

addBtn.onclick = ()=>{
    let userdata = inputBox.Value;
    let localStorage = localStorage.getItem("New Todo");
    if (localStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(localStorage);
    }
    listArr.push("userdata");
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
}
 showTask();

function showTask (){
    let localStorage = localStorage.getItem("New Todo");
    if (localStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(localStorage);
    }
    let newlitag = '';
    listArr.forEach((element, index) => {
        newlitag += ` <input type="text" name="" data-id="${item.index}" value="${element}">
            <i id="ellipse" class="fas fa-ellipsis-v m-i"></i>`;
    });
    todolist.innerHTML = newlitag;
    inputBox.Value = '';
}
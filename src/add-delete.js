

addBtn.addEventListener("click", () => {
  createlocalstorage(listArr);
  window.location.reload();
});
display(listArr);


function deleteTask(idx) {
  const storage = JSON.parse(localStorage.getItem("todos"));
  const savedata = storage.filter((value, index) => index !== idx);
  savedata.forEach((obj, index) => {
    obj.index = index + 1;
  });
  localStorage.setItem("todos", JSON.stringify(savedata));
  window.location.reload();
}

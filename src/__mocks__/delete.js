import localStorageMock from "./localStorage.js";

export function deleteTask(idx) {
  const storage = JSON.parse(localStorageMock.getItem("todos"));
  const savedata = storage.filter((value, index) => index !== idx);
  savedata.forEach((obj, index) => {
    obj.index = index + 1;
  });
  localStorageMock.setItem("todos", JSON.stringify(savedata));
  window.location.reload();
}

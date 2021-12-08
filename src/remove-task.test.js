import { deleteTodoList } from "./remove-task.js";

test("remove form the dom", () => {
  document.body.innerHTML = `
    <li class="list-container d-flex">
      <input type="checkbox" class="checkbox">
      <p class="items show"   contenteditable="true">Hello Todo's</p>
      <i class="fas fa-ellipsis-v  dots"></i>
      <i class="far fa-trash-alt show delete"></i>
    </li>
    `;
  const element = document.querySelector(".list-container");
  expect(element.children[2].classList.contains("show")).toBe(false);
  expect(element.children[3].classList.contains("show")).toBe(true);
   expect(element.children[4].classList.contains("show")).toBe(false);
});
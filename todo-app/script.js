const list = document.querySelector("#list");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

const todos = [
  { id: 0, value: "Akbar" },
  { id: 1, value: "Fuad" },
];

todos.forEach((todo) => {
  console.log(todo);
  addLi(todo.value);
});

button.addEventListener("click", () => {
  todos.push({ id: todos.at(-1).id + 1, value: input.value });
  console.log(todos);
  addLi(input.value);
  input.value = "";
});

function addLi(inputValue) {
  const li = document.createElement("li");
  li.textContent = inputValue;
  list.append(li);
}

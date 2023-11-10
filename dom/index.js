const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

const fetchTodos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    if (!res.ok) {
      throw new Error("Something went wrong!");
    } else {
      list.append(...todos.map((item) => renderTodoItem(item)).splice(0, 10));
    }
  } catch (error) {
    console.log(error);
  }
};

const saveTodo = async () => {
  try {
    const reqBody = { title: input.value };
    const createdItemRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        method: "POST",
        body: JSON.stringify(reqBody),
      }
    );

    if (!createdItemRes.ok) {
      throw new Error("Something went wrong!");
    } else {
      list.prepend(renderTodoItem(reqBody));
      input.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const deletedItemRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { method: "DELETE" }
    );
    if (!deletedItemRes.ok) {
      throw new Error("Something went wrong!");
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
const updateTodo = async (id, title) => {
  try {
    const reqBody = { title };
    const updatedItemRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(reqBody),
      }
    );

    if (!updatedItemRes.ok) {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

function renderTodoItem(data) {
    
  const li = document.createElement("li");
  li.style.maxWidth = '500px'
  li.innerText = data.title;
  const dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";
  dltBtn.style.color = "red";

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = data.title;

  li.append(dltBtn, editBtn);

  dltBtn.addEventListener("click", async () => {
    dltBtn.setAttribute("disabled", true);
    li.classList.add("none");

    await deleteTodo(data.id);
    li.remove();
  });

  editBtn.addEventListener("click", async () => {
    li.append(editInput);
    li.classList.add("none");

    editBtn.style.display = "none";
  });

  
  editInput.addEventListener("keyup", async (event) => {
    if (event.key === "Enter") {
      editInput.style.display = "none";

      
      const updatedTitle = editInput.value;
      await updateTodo(data.id, updatedTitle);
      li.innerText = updatedTitle;
    }
  });

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  return li;
}

input.addEventListener("keyup", (event) => {
  if (event.key === 13) {
    if (!input.value.trim().length) {
      alert("input is empty");
      return;
    }
    renderTodoItem(input.value);

    input.value = "";
  }
});

btn.addEventListener("click", () => {
  saveTodo();
});

fetchTodos();

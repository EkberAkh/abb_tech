const usersWrapper = document.getElementById("users-wrapper");
const input = document.getElementById("user-input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  fetchUsers(input.value);
});

async function fetchUsers(user) {
  try {
    const res = await fetch(
      user
        ? `https://api.github.com/users/${user}`
        : `https://api.github.com/users`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();

    if (Array.isArray(data)) {
      const cards = data.map((userData) => {
        return renderData(userData);
      });
      usersWrapper.innerHTML = "";
      usersWrapper.append(...cards);
    } else {
      const card = renderData(data);
      usersWrapper.innerHTML = "";
      usersWrapper.append(card);
    }
  } catch (error) {
    console.log("error", error);
  }
}

function renderData(data) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", data.avatar_url);
  wrapper.append(img);

  const h1 = document.createElement("h1");
  h1.textContent = data.login;
  wrapper.append(h1);

  if (data.followers) {
    const wrapper2 = document.createElement("div");
    wrapper2.classList.add("follow");
    const spanFollowers = document.createElement("span");
    const spanFollowing = document.createElement("span");

    spanFollowers.textContent = data.followers;
    spanFollowing.textContent = data.following;
    wrapper2.append(spanFollowers, spanFollowing);
    wrapper.append(wrapper2);
  }

  return wrapper;
}

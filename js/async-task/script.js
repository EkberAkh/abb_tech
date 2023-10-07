const countText = document.querySelector("#countdown");
function countdown(num) {
  let countInterval = setInterval(() => {
    if (num >= 1) {
      countText.textContent = num;
      num--;
    } else {
      countText.textContent = "BOOM!!🔥🔥";
      clearInterval(countInterval);
    }
  }, 1000);
}

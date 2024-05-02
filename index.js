const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

//check if the button is checked to true(black)
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

//call the function
updateBody();

//for the body to change color
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}
//for the button to listen and change the background color back to white
inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

//for the storing the users setting in their browser depending how they were they first visited the site.
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

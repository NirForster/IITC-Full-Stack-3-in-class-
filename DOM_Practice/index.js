// first Task
const divElem = document.getElementById("content");
divElem.classList.add("backgroundColor_lightBlue", "color_red");

// Log the text of all <li> elements
const all_Li_Elems = document.querySelectorAll("li");
for (let i = 0; i < all_Li_Elems.length; i++) {
  console.log(all_Li_Elems[i].textContent);
}

const liElem = document.querySelector("li");

// Add event listener to the button to change background color on click
const button = document.querySelector("button");
button.addEventListener("click", function () {
  button.classList.toggle("backgroundColor_lightBlue");
  all_Li_Elems.forEach(function (li) {
    li.classList.toggle("backgroundColor_yellow");
  });

  //change a single Li elem to green
  liElem.classList.toggle("backgroundColor_green");
});

// second TASK
// Select the second list and the add item button
const secondList = document.querySelector(".ul");
const addItemButton = document.getElementById("addItem");

// Add an item to the second list
addItemButton.addEventListener("click", function () {
  const newli = document.createElement("li");
  newli.textContent = "New Item";
  secondList.appendChild(newli);
});
let selected = null;

// Handle item selection in the second list
secondList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    if (selected) {
      selected.classList.remove("selected");
    }
    event.target.classList.add("selected");
    selected = event.target;
    console.log(selected);
  }
});

// Remove the first item in the second list
const remove_First_Item = document.getElementById("removeFirst");
remove_First_Item.addEventListener("click", function () {
  if (secondList.firstElementChild) {
    secondList.removeChild(secondList.firstElementChild);
  }
});

// Remove the second item in the second list
const remove_Last_Item = document.getElementById("removeLast");
remove_Last_Item.addEventListener("click", function () {
  if (secondList.lastElementChild) {
    secondList.removeChild(secondList.lastElementChild);
  }
});

// Remove the selected item in the second list
const remove_Selected_Item = document.getElementById("removeSelected");
remove_Selected_Item.addEventListener("click", function () {
  if (selected) {
    secondList.removeChild(selected);
    selected = null; //reset the selected variable
  }
});

//third TASK
//usong event listener for tracking the input with log
const input = document.getElementById("nameInput");
input.addEventListener("input", function () {
  console.log(input.value);
});

// callback function that updates the greeting div to display "Hello, [name]!" where [name] is the current value of the input field.
const greetingElem = document.getElementById("greeting");
function greeting(input) {
  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      let name = input.value;
      greetingElem.innerText = `Hello ${name}!`;
    }
  });
}
greeting(input);

// Create a button with the text "Clear" that, when clicked, clears the input field and resets the greeting.
const clearInputButtonEl = document.getElementById("clearInputButton");
clearInputButtonEl.addEventListener("click", function () {
  greetingElem.innerText = "";
  input.value = "";
});

// TASK 4
// Use JavaScript to give the box a default style: width of 100px, height of 100px, and a border.
const box = document.querySelector("#box");
const styleButton = document.getElementById("styleButton");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "2px solid black";
box.style.boxSizing = "border-box";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

styleButton.addEventListener("click", function () {
  let width = parseInt(box.style.width);
  let height = parseInt(box.style.height);

  width = Math.min(width * 2, 300);
  height = Math.min(height * 2, 300);

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.borderColor = getRandomColor();
});

// TASK 5
const buttons = document.querySelectorAll(".clickMe");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert(i + 1);
  });
}

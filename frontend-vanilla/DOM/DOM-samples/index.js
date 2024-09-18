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

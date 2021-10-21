var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    console.log("You clicked the button");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter() {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
    }

function addDoneClass(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
    
}



button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)

ul.addEventListener("click", addDoneClass)
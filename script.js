var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        console.log("You clicked the button");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    }
    
})
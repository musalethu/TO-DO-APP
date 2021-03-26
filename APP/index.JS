 // add List's

v




// now I will create a function that allows me to add an element on button click
button.addEventListener("click",() => {
  let text = input.value;
  if (text === "") {
    alert("You must type to do");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text;
    list.insertafter(li, list.childNodes[0]);
    input.value = "";
  }
})

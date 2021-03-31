// lets get our objects
let input = document.querySelector("#SUBMIT");
let form = document.getElementById("form");
let todo = document.getElementById("to-do");

let list = document.querySelector("#List");
let el = document.getElementById("li");

// now we will create a function that will allow us to add on click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = todo.value;

  if (input === "") {
    alert(`Don't be a fool input something `);
  } else {
    let item = document.createElement("li");
    item.append(input);

    list.appendChild(item);
    todo.value = "";
  }
});

// function submit() {
//   console.log(input);
//   let txt = input.Value;
//   if (txt === "") {
//     alert("You must write something");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = txt;
//     list.insertBefore(li, list.childNodes[0]);
//     input.value = "";
//   }
//   console.log("open code");
// }

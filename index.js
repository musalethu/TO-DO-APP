//lets get out objects
let input = document.querySelector("#SUBMIT");
let form = document.getElementById("form");
let todo = document.getElementById("to-do");

let el = document.getElementById("li");
let list = document.querySelector("#List");

// Now we will create a function that will allow us to add when we click

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = todo.value;

  if (input === "") {
    alert(`You must type something`);
  } else {
    let item = document.createElement("li");
    item.append(input);

    list.appendChild(item);
    todo.value = "";
  }
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
});

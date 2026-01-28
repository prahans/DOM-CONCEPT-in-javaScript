let btn = document.querySelector("button");
let box = document.querySelector("div");
let h3 = document.querySelector("h3");
btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  h3.innerText = `rgb(${red}, ${green}, ${blue})`;
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// btn.addEventListener("click", function () {
//   console.log(this.innerText);
// });

let els = document.querySelectorAll(".demo");
for (el of els) {
  el.addEventListener("click", function () {
    console.log(this.innerText);
    this.style.backgroundColor = "pink";
  });
}

let newBtn = document.querySelector("#event");
newBtn.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.type);
  console.log("button was clicked");
});

// newBtn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log(event.type);
//   console.log("button was clicked");
// });

let input = document.querySelector("input");
// input.addEventListener("keydown", function (event) {
//   console.dir(event);
//   console.log("code = ", event.code);
//   console.log("key = ", event.key);
//   console.log("key is pressed");
// });

input.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
    console.log("character moves upward");
  } else if (e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
    console.log("character moves downward");
  } else if (e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
    console.log("character moves rightward");
  } else if (e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
    console.log("character moves leftward");
  }
});

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");

  console.dir(this); //form
  let user = this.elements[0]; // form.elements[0]
  let pass = this.elements[1];

  alert(`Hi ${user.value}, your password is set to '${pass.value}'`);
});

let change = document.querySelector("#change");
let text = document.querySelector("#inp");

change.addEventListener("change", function (event) {
  event.preventDefault();
  console.log(this.value);
});
text.addEventListener("input", function (event) {
  event.preventDefault();
  console.log(this.value);
});

let body = document.querySelector("body");
let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
body.prepend(newbtn);
newbtn.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

let h2 = document.createElement("h2");
let inpUser = document.createElement("input");
inpUser.setAttribute("placeholder", "enter your name");
body.prepend(h2);
body.prepend(inpUser);
inpUser.addEventListener("input", function () {
  h2.innerText = this.value;
});

//events bubbling
let div = document.querySelector("#db");
let ul = document.querySelector("#ulb");
let lis = document.querySelectorAll(".lib");

div.addEventListener("click", function () {
  console.log("div is clicked");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul is clicked");
});

for (li of lis) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li is clicked");
  });
}

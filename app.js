// let oldImgs = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImgs.length; i++) {
//   oldImgs[i].src = "assets/spiderman_img.png";
// }

// document.all[8].innerText = "Anurag panuhar";

// document.getElementById("mainImg").src = "assets/creation_1.png";

// document.getElementsByTagName("p")[1].innerText = "abc";

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector(".box a"));
// console.dir(document.querySelectorAll(".box a"));
// let demo = document.querySelectorAll(".box a");
// for (let i = 0; i < demo.length; i++) {
//   demo[i].innerHTML = "<i>hello world</i>";
// }
// console.dir(document.querySelector("#description"));

// let heading = document.querySelector("h1");
// heading.innerHTML = `<u>${heading.innerText}</u>`;

// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id", "spiderman");
// console.log(img.getAttribute("id"));
// img.style.width = "20%";

// heading.style.color = "purple";
// heading.style.backgroundColor = "yellow";
// let links = document.querySelectorAll(".box a");
// for (link of links) {
//   link.style.color = "green";
// }

// console.log(img.classList);

// heading.classList.add("green");
// heading.classList.add("underline");
// heading.classList.remove("green");
// heading.classList.toggle("green");
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList.toggle("green"));

//navigation on page
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);
// let div = document.querySelector(".box");
// console.log(div.children);
// console.log(div.childElementCount);
// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.childElementCount);
// console.log(ul.parentElement);

// for (child of div.children) {
//   child.innerText = "hello world";
// }

// for (child of ul.children) {
//   child.innerText = "hello world";
// }

// ul.children[0].nextElementSibling.innerText = "hello world";

// img.previousElementSibling.classList.add("green", "underline");

// let newP = document.createElement("p");
// newP.innerText = "hi i am new p";
let body = document.querySelector("body");
// body.appendChild(newP);
// div.appendChild(newP);
// let btn = document.createElement("button");
// btn.innerText = "click me!";
// newP.append(btn);
// newP.append(" i am new para");
// newP.classList.add("green");
// btn.remove();
// body.remove();

//practice qs
let newP = document.createElement("p");
newP.innerText = "Hey I'm red";
newP.style.color = "red";
body.appendChild(newP);

let h3 = document.createElement("h3");
h3.innerText = "hey I'm blue h3!";
h3.style.color = "blue";
body.appendChild(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p2 = document.createElement("p2");

h1.innerText = "Hi, I'm a div";
p2.innerText = "ME TOO!";
div.append(h1);
div.append(p2);
div.classList.add("test");

body.appendChild(div);

let inp = document.createElement("input");
let btn2 = document.createElement("button");
btn2.innerText = "click me!";
body.append(inp);
body.append(btn2);

inp.setAttribute("placeholder", "username");
btn2.setAttribute("id", "btn");
let button = document.querySelector("#btn");
button.style.backgroundColor = "black";
button.style.color = "white";
let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
newP.insertAdjacentElement("beforebegin", heading);
heading.classList.add("purple", "underline");
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
newP.insertAdjacentElement("beforebegin", p);

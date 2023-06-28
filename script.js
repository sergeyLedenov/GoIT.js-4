//1
const pText = document.querySelector(".p");
const butt = document.querySelector(".butt");

console.dir(pText);
console.dir(butt);

butt.addEventListener("click", ()=> {
    butt.textContent = pText.textContent;
});

function ChangeButt () {
    butt.textContent = pText.textContent;
};

//2
const img = document.querySelector("#img");
img.src = "./Без названия (1).png"

//3
const a = document.querySelector("#a");
a.href = "https://www.google.com/";
const img2 = document.querySelector(".img");
img2.setAttribute("alt", "asdasd");

//4
let parent = document.querySelector('#parent');
let text = parent.firstElementChild.textContent = "changed";
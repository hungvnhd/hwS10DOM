// BAI 1
let div = document.getElementById("box");
let btn = document.getElementById("btn");
btn.onclick = function () {
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
};
// BAI2

let div2 = document.getElementById("box2");
let btn2 = document.getElementById("btn2");

function random() {
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  while (a < 255) {
    rgb = `rgb(${a},${b},${c})`;
    break;
  }
  return rgb;
}
btn2.onclick = function () {
  div2.style.backgroundColor = random();
};

// BAI 3:
let div31 = document.getElementById("box3-1");
let div32 = document.getElementById("box3-2");
let div33 = document.getElementById("box3-3");
let div34 = document.getElementById("box3-4");
let btn3 = document.getElementById("btn3");

btn3.onclick = function () {
  if (div31.style.display !== "none") {
    div31.style.display = "none";
    div32.style.display = "none";
    div33.style.display = "block";
    div34.style.display = "block";
  } else {
    div31.style.display = "block";
    div32.style.display = "block";
    div33.style.display = "none";
    div34.style.display = "none";
  }
};

//bai 4
let div4 = document.getElementById("box4");
let btn4 = document.getElementById("btn4");

btn4.onclick = function () {
  let style = window.getComputedStyle(div4);
  let value = style.getPropertyValue("font-size");
  console.log(value);
  let size = Number(value[0] + value[1]);
  console.log(size);
  div4.style.fontSize = size + 1 + "px";
};

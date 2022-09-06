function out(any) {console.log(any)}
console.log('I am in set background color')
let bdy = document.querySelector("body");
out(bdy);

let inp = document.querySelector(".getColor");
out(inp);

let pbCol = document.querySelector(".pbSetColor");
out(pbCol);

pbCol.textContent = "Tryk mig for set color";

function changeColorBody() {
  let col = inp.value;
  out(col);
  bdy.style.backgroundColor = col;
}

pbCol.addEventListener('click', changeColorBody);


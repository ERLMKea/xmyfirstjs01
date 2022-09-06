out("I am in incdecfontsize")

const lineFirst = document.querySelector('.first')

out(lineFirst)

out("fontSize=" + lineFirst.style.fontSize)

//lineFirst.style.fontSize = '30px'
out("fontSize=" + lineFirst.style.fontSize)

let fontsize = 10;

//will be executed when pbIncrease is pressed
function increaseFontSize(btn) {
  out(btn)
  out("fontsize=" + lineFirst.style.fontSize)
  fontsize++;
  lineFirst.style.fontSize = fontsize + 'px';
 }

const pbIncrease = document.querySelector('.pbIncrease')
pbIncrease.addEventListener('click', increaseFontSize)

//will be executed when pbDecrease is pressed
function decreaseFontSize(btn) {
  out(btn)
  out("fontsize=" + lineFirst.style.fontSize)
  fontsize--;
  lineFirst.style.fontSize = fontsize + 'px';
}


const pbDecrease = document.querySelector('.pbDecrease')
pbDecrease.addEventListener('click', decreaseFontSize)


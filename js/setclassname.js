out('I am in setclassname')

let inpElementName = document.getElementById("elementName")
let inpStyleName = document.getElementById("styleName")
let pbSetClassName = document.getElementById("pbSetStyle")

function setClassName(btn) {
  //first get the html element that we want to change
  const elm = document.querySelector("." + inpElementName.value);
  out(elm); //


  const styleName = inpStyleName.value;
  out(styleName);
  //elm.className = styleName;
  elm.className = '';
  elm.classList.add(styleName);
  elm.classList.add(inpElementName.value); //this should add the element name to the classlist
  out(elm.classList)
}


pbSetClassName.addEventListener('click', setClassName);



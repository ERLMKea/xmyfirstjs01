function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

let fruits = ["apple", "orange", "cherry", "nødder"];
fruits.forEach(myFunction);

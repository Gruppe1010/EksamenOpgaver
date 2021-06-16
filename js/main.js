
//p1
function out(s) {
  console.log(s);
}

out(2);

//p2
function out2(arguments) {
  console.log(arguments);
}

out2(1, 211, 40, 5321);

//p3
out(4=="4"); //true
out(4>"12"); //false
out("4">"12");//true

//p4
out(4==="4") //false

//p7
const aa = 4 + "12";
out(typeof aa);

const bb = true + "hej";
out(bb);

const cc = true + 4 + "hej";
out(cc);

//p8
const dd = true + 1 + Number("25");
out(dd);

//p10 TODO Måske skal denne laves til en metode
let add = function add(a, b) {
  let sum;
  sum = a + b;
  return sum;
}
console.log("Sum =", add(1, 7));

//p11
let square = function square(number) {
  return Math.sqrt(number);
}

function addAndSquare(add, a, b, square) {
  return square(add(a, b));
}

console.log(addAndSquare(add, 4, 12, square));

//p13
const fruits = ["apple", "orange", "cherry", "strawberry"];
fruits.forEach(myFunction);

function myFunction(fruit) {
  let demo = document.getElementById("demo");
  let demoText = demo.innerText;
  if(demoText === "") {
    demo.innerText = fruit;
  } else {
    demo.innerText = demoText + ", " + fruit;
  }
}

//p14
const button = document.querySelector('.pbSetColor');
const input = document.querySelector('.getColor');

button.addEventListener('click', function() {
  document.body.style.backgroundColor = input.value;
  console.log(input.value);
});

/*
const button = document.getElementsByClassName('pbSetColor');
const input = document.getElementsByClassName('getColor');

button[0].addEventListener('click', function() {
  document.body.style.backgroundColor = input[0].value;
  console.log(input[0].value);
});
*/

//p15
const pbSetH1Color = document.querySelector('.pbSetH1Color');
const h1s = document.getElementsByTagName('h1');

pbSetH1Color.addEventListener('click', function(){
  for(let i = 0; i < 3; i++){
    redBackgroundColour(h1s[i]);
  }
  redColour(h1s[0]);
})

function redBackgroundColour(el){
  el.style.backgroundColor = 'red';
}

function redColour(el) {
  el.style.color = 'red';
}

























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
function add(a, b) {
  let sum;
  sum = a + b;
  return sum;
}
console.log("Sum =", add(1, 7));

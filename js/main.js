
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
out(4=="4");
out(4>"12");
out("4">"12");

//p4
out(4==="4");

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

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
- The output of the function 'f1(x)' is 10 because the function parameter (val which takes the value 
of the global scope variable (i.e. x ) + 1 which is 10 equals the value/result of (val = val + 1).

- The output of console.log(x) is 9 because it is the value assigned to the local scope variable x.

- The output of the function 'f2(y)' is 10 because the function parameter (val which takes the value 
of the global scope variable (i.e. x ) + 1 which is 10 equals the value/result of (val.x = val.x + 1).

- The output of console.log(y) is 9 because it is the value assigned to the local scope variable y.
*/
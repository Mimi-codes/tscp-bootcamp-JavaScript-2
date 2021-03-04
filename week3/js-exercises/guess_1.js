let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

/* REASON
The output is 12 because no variable declaration keyword (const, var or let) was used
to assign the value of 12 to the local scoped variable 'a' which invariably reassigns 
the value of the global scoped variable 'a'.
*/
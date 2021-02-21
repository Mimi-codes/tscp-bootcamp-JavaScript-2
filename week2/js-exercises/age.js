const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];

 function Age(item) { //function declaration
     return item.age;
 }

 function sum(prev, next) { //function declaration
     return prev + next;
 }
 
const combinedAge = hackYourFutureMembers.map(Age).reduce(sum); //
 console.log(`The collective age of the HYF team is: ${combinedAge}`);
 console.log(combinedAge);
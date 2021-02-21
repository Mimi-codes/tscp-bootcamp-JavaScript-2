/*function doubleEvenNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console
*/

  //Rewriting the doubleEvenNumbers function using the 'map' and 'filter' function
const myNumbers = [1, 2, 3, 4]; //Array of numbers

const doubleEvenNumbers = val => {
const multiplyNumber = val.map(myNumber => { //Applying 'map' property
  if(myNumber % 2 === 0) {
    return myNumber
  }
}).filter (myNumber => myNumber * 2); //Applying 'filter' property
return multiplyNumber;
}
console.log(doubleEvenNumbers(myNumbers));



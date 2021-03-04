const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b']; // Array of letters

function removeDuplicates(letter) { // Function declaration
return letter.filter((value, index) => letter.indexOf(value) === index);
}
console.log(removeDuplicates(letters)); // Logs ['a', 'b', 'c', 'd', 'e', 'f']
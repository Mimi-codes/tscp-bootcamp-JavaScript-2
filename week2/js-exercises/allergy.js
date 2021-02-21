const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];


const removeLemon = fruitBasket.filter(fruitBaskets => { //use of the 'filter' array function to take out the lemons
    return fruitBaskets !== 'Lemon';
   
});
console.log(removeLemon);
console.log(`My mom bought me a fruit basket, containing ${fruitBasket}!`); //string output


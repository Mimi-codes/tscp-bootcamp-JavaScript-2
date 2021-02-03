//body tag font change
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sansSerif';
body.style.textAlign = 'center';
body.style.backgroundColor = '#D3D3D3';

//replacement of each spans with my info
var nickname = document.getElementById('nickname');
nickname.textContent = 'Mayroh';

var food = document.getElementById('fav-food');
food.textContent = 'Fried Plantain';

var town = document.getElementById('hometown');
town.textContent = 'Ilorin';

//looping through each list
var list = document.querySelectorAll('li');
list.forEach((list) => {
    list.className = 'list-item';
});

//list-item color change
var design = document.querySelector('style');
design.innerHTML = '.list-item{list-style-type: none; color:red; text-align: center}';

//creation of a new image element
let newImage = document.createElement("img");
newImage.src = 'https://cdn.pixabay.com/photo/2020/04/30/08/04/cute-cats-5111880_960_720.jpg';
//newIimage.style.width = '70%';
//newIimage.style.height = '120%';
newImage.style.borderRadius = '50%';

body.appendChild(newImage); //appends image to the page
const books = [ //array of books
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      alreadyRead: true,
    }
  ];

  document.querySelector('title').textContent = 'Book List'; //assign 'Book List' to title


  let design = document.getElementById('norman');
  design.innerHTML = '<p>The Design of Everyday Things - Don Norman</p>'; //add 'p' tag to the div
 
  let newImage = document.createElement("img");
newImage.src = 'https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg400.jpg';
design.appendChild(newImage); //appends image to design 


  let human = document.getElementById('christian');
  human.innerHTML = '<p>The Most Human Human - Brian Christian</p>'; //add 'p' tag to the div
  
  let newImage2 = document.createElement("img");
newImage2.src = 'https://images1.penguinrandomhouse.com/cover/9780307476708';
 human.appendChild(newImage2); //appends image to human

  let pragmatic = document.getElementById('hunt');
  pragmatic.innerHTML = '<p class="hunt">The Pragmatic Programmer - Andrew Hunt</p>'; //add 'p' tag to the div

  let newImage3 = document.createElement("img");
  newImage3.src =   'https://res.cloudinary.com/practicaldev/image/fetch/s--l6RWhB1I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg';
   pragmatic.appendChild(newImage3); //appends image to pragmatic
   

   let mainDiv = document.getElementById('main'); //call and assign the id of main to 'mainDiv'

    //styling
mainDiv.style = 'display: flex'; 
document.getElementById('norman').style.marginLeft = '2%';
document.getElementById('norman').style.width = '30%';

document.getElementById('christian').style.marginLeft = '2%';
document.getElementById('christian').style.width = '30%';

document.getElementById('hunt').style.marginLeft = '2%';
document.getElementById('hunt').style.marginRight = '2%';
document.getElementById('hunt').style.width = '30%';

newImage.style.paddingLeft = '4%';
newImage.style.height = '85%';
newImage.style.width = '63%';

newImage2.style.paddingLeft = '4%';
newImage2.style.height = '85%';
newImage2.style.width = '63%';

newImage3.style.paddingLeft = '4%';
newImage3.style.height = '85%';
newImage3.style.width = '63%';

human.style.paddingLeft = '2%';
pragmatic.style.paddingLeft = '2%';
design.style.paddingLeft = '2%';

//conditional statements
if(books.alreadyRead === true) {
  norman.style.backgroundColor = 'green';
} else {
  norman.style.backgroundColor = 'red';
}  

if(books.alreadyRead === true) {
  christian.style.backgroundColor = 'red';
}
 else {
christian.style.backgroundColor = 'green';
}  

if(books.alreadyRead === true) { 
 hunt.style.backgroundColor = 'red';
} else {
  hunt.style.backgroundColor = 'green';
}; 

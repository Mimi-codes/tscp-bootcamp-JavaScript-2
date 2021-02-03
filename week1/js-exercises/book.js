const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
    URL: 'https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/%7B85EA00CF-F096-4068-8876-960C1075ED20%7DImg400.jpg' },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      URL: 'https://images1.penguinrandomhouse.com/cover/9780307476708',
    
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      alreadyRead: true,
      URL: 'https://res.cloudinary.com/practicaldev/image/fetch/s--l6RWhB1I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg',
   
    }
  ];

  const newDiv = document.querySelector('#body')

  //loops through the array of books.
  const newUl = document.createElement('ul');
  books.forEach(book => {
  let listItem = document.createElement('li');
  listItem.style.display = 'inline-block';
  listItem.style.width = '50%';
  listItem.style.margin = '3%';
  listItem.style.paddingRight = '20%'
  listItem.style.paddingBottom = '7%'
  listItem.style.textAlign = 'center';
  let image = document.createElement('img');
  image.src = book.URL;
  image.style.width = '90%';
  image.style.height = '100%';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${book.title} - ${book.author}`;
  newParagraph.style.color = 'black';
  newParagraph.style.paddingLeft = '1%';
  listItem.appendChild(newParagraph);
  listItem.appendChild(image);
  newUl.appendChild(listItem);
  
  if(book.alreadyRead === true) {
    listItem.style.backgroundColor = 'green';
  } else {
    listItem.style.backgroundColor = 'red';
  }
  
   newDiv.appendChild(newUl);
   newDiv.style.textAlign = 'center';
 });
  


/*books.forEach(function (arrayItem) {
  var x = arrayItem.prop1 + 2;
  console.log(x);
});
  */

/*for(var i = 0; i < books.length; i++) {
  var newParagraph = document.createElement('p');
  var newParagraphText = document.createTextNode('Norman');
  newParagraph.appendChild(newParagraphText);
  //textContent = `${title}` + `${author}`;
   
}
*/

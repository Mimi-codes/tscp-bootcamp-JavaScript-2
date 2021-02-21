document.querySelector('title').textContent = 'My Hobbies'; 
document.querySelector('div').innerHTML = '<h4>List Items</h4>';

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];




// Create an unordered list
var list = document.createElement('ul');

// Create a fragment
var fragment = document.createDocumentFragment();

// Create a list item for each hobby and append it to the fragment
myHobbies.forEach(function (myHobby) {
	var li = document.createElement('li');
	li.textContent = myHobby;
	fragment.appendChild(li);
});

// Append the fragment to the list
list.appendChild(fragment);

// Append the list to the app
var app = document.querySelector('#app');
app.appendChild(list); 


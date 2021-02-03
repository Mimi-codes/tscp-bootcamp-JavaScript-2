document.querySelector('title').textContent = 'What is the time'; 
document.querySelector('h1').style.textAlign = 'center'; 
document.querySelector('h1').style.color = '#f08080'; 
document.querySelector('h1').style.fontSize = '390%'; 
document.querySelector('h1').style.fontFamily = 'Verdana, sansSerif'; 
document.querySelector('h1').style.marginTop = '17%'; 
document.querySelector('body').style.backgroundColor = 'wheat';
function currentTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =
	h + ":" + m + ":" + s;
	var t = setInterval(currentTime, 500);
  }
  function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
  }

  document.getElementById('txt').style.color = '#48412b ';
  document.getElementById('txt').style.textAlign = 'center';
  document.getElementById('txt').style.fontSize = '370%';
  document.getElementById('txt').style.fontFamily = 'Verdana, sansSerif';
/*
document.write ('<p>The current time is: <span id="time">', new Date().toLocaleString(), '</span>.</p>')
if (document.getElementById) onload = function () {
	setInterval ("document.getElementById ('time').firstChild.data = new Date().toLocaleString()", 50)
}


var design = document.querySelector('style');
design.innerHTML = 'p{text-align: center; margin-top: 23%; fontFamily: Verdana, sansSerif; font-size: 3rem; color: coral}';

let body = document.querySelector('body');
body.style.backgroundColor = 'grey';*/
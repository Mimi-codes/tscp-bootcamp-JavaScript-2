document.querySelector('title').textContent = 'Random Quote Generator'; 
document.querySelector('p').style.fontFamily = 'Arial, sans-serif'; //changes the fontFamily of 'p'
document.getElementById('btn').style.fontFamily = 'Arial, sans-serif'; //changes the fontFamily of 'btn'
document.querySelector('p').style.textAlign = 'center'; //aligns 'p' to the center
document.querySelector('p').style.padding = '10%'; //added a padding of 10% to 'p'
document.querySelector('p').style.fontSize = '120%'; //increases the fontSize of 'p' to 120%
document.getElementById('btn').style.fontSize = '100%'; //increases the fontSize of 'btn' to 100%
document.querySelector('p').style.color = 'orange'; //gives 'p' an orange color


let randomQuotes = [
    '"Some hearts understand each other, even in silence." --Yasmin Mogahed',
     '"Allah is the one who mends the broken hearts." -- Asmaa Hussein',
    '"The way to happiness is in front of you, so seek it by means of knowledge, righteous deeds and a good attitude. Be moderate in all your affairs and you will be happy."  --Dr Aid Al-Qarni',
    '"Allow everything to fall into place. Trust that Allah is with you, through the easy and the difficult, through the joy and the pain. Trust Him and you will thrive, no matter what." --Asmaa Hussein',
    '"I thank Him for what I have and I thank Him for what I don’t have. If He had given me everything I desired, perhaps it would have been a means for me to forget Him and go astray." --Asmaa Hussein',
    '"Being both soft and strong is a combination very few have mastered." --Yasmin Mogahed'
    ] //an array of quotes

    let displayQuote = document.querySelector('p'); //assigns the value of 'p' to the variable 'displayQuote'
    let button = document.getElementById('btn'); //assigns the value of 'btn' to the variable 'button'

   function getQuote() { //declares function 'getQuote'
       var randomNumber = Math.floor(Math.random() * randomQuotes.length);
       document.querySelector('p').innerHTML = randomQuotes[randomNumber];
   }

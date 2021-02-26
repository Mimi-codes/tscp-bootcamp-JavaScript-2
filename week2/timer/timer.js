document.querySelector('title').innerHTML = 'Pomodoro Clock'; // Insertion of 'Pomodoro Clock' as the title.

// Declaration of some variables
let btnIncrease = document.querySelector('#increase'); 
let btnDecrease = document.querySelector('#decrease');
let input = document.querySelector('input');


btnIncrease.addEventListener('click', () => { // Inclusion of event listener 
    input.value = parseInt(input.value) + 1;
});

btnDecrease.addEventListener('click', () => { // Inclusion of event listener 
    input.value = parseInt(input.value) - 1;
});

var minutes = 25; 
var seconds = '00';

// Function declaration
function template() { 
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

// Function declaration
function start() {
    minutes = parseInt(input.value)-1;
    seconds = 59;
    
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);


// Function declaration
    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;
  
        if(seconds <= 00) {

            if(minutes <= 26) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById('done').innerHTML = 'Time is up!';

                document.getElementById('done').classList.add(show_message);

            }
            seconds = 60;
        }

}
}



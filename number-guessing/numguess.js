const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minnum} and ${maxnum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert('Enter a valid number');
    }
    else if(guess < minnum || guess > maxnum ) {
        window.alert(`Number must be between ${minnum} and ${maxnum}`);
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert(`The answer is higher, try again`);
        }
        else if(guess > answer) {
            window.alert(`The answer is lower, try again`);
        }
        else {
            window.alert(`Congrats! The correct answer was ${answer}, it took you ${attempts} attempts to get the number`);
            running = false;
        }

    }
    
}
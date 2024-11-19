const rnum = document.getElementById('rnum');
const button = document.getElementById('button');
const min = 1;
const max = 100;
let randomnumber;

button.onclick = function() {
    randomnumber = Math.floor(Math.random() * max) + min;
    rnum.textContent = randomnumber;
}
const dbtn = document.getElementById('dbtn');
const rbtn = document.getElementById('rbtn');
const ibtn = document.getElementById("ibtn");
const countlabel = document.getElementById('countlabel');
let count = 0;

ibtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

dbtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}

rbtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}
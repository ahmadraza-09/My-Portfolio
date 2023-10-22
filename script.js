function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}   

// For Mobile
// HTML
let number9 = document.getElementById('number9');
let counter9 = 0;
let timer9;

setInterval(() => {
    if (counter9 == 95 ) {
        clearInterval(timer9);
    }else {
        counter9 = counter9 + 1;
        number9.innerHTML = counter9 + '%';
    }
}, 18);

// CSS
let number10 = document.getElementById('number10');
let counter10 = 0;
let timer10;

setInterval(() => {
    if (counter10 == 85 ) {
        clearInterval(timer10);
    }else {
        counter10 = counter10 + 1;
        number10.innerHTML = counter10 + '%';
    }
}, 18);

// BootStrap
let number11 = document.getElementById('number11');
let counter11 = 0;
let timer11;

setInterval(() => {
    if (counter11 == 70 ) {
        clearInterval(timer11);
    }else {
        counter11 = counter11 + 1;
        number11.innerHTML = counter11 + '%';
    }
}, 23);

// JavaScript
let number12 = document.getElementById('number12');
let counter12 = 0;
let timer12;

setInterval(() => {
    if (counter12 == 35 ) {
        clearInterval(timer12);
    }else {
        counter12 = counter12 + 1;
        number12.innerHTML = counter12 + '%';
    }
}, 42);

// Node JS
let number13 = document.getElementById('number13');
let counter13 = 0;
let timer13;

setInterval(() => {
    if (counter13 == 25 ) {
        clearInterval(timer13);
    }else {
        counter13 = counter13 + 1;
        number13.innerHTML = counter13 + '%';
    }
}, 62);

// React JS
let number14 = document.getElementById('number14');
let counter14 = 0;
let timer14;

setInterval(() => {
    if (counter14 == 20 ) {
        clearInterval(timer14);
    }else {
        counter14 = counter14 + 1;
        number14.innerHTML = counter14 + '%';
    }
}, 75);

// Express JS
let number15 = document.getElementById('number15');
let counter15 = 0;
let timer15;

setInterval(() => {
    if (counter15 == 55 ) {
        clearInterval(timer15);
    }else {
        counter15 = counter15 + 1;
        number15.innerHTML = counter15 + '%';
    }
}, 25);

// Mongo DB
let number16 = document.getElementById('number16');
let counter16 = 0;
let timer16;

setInterval(() => {
    if (counter16 == 10 ) {
        clearInterval(timer16);
    }else {
        counter16 = counter16 + 1;
        number16.innerHTML = counter16 + '%';
    }
}, 200);
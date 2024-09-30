const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const heading = document.getElementById('heading');
const letters = document.getElementById('letters');
const numbers = document.getElementById('numbers');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

numbers.addEventListener('click', () => {
    heading.textContent = "1 2 3 4 5 6 7 8 9 10";
});

letters.addEventListener('click', () => {
    heading.innerHTML = "<h1 style=\"font-size: 2rem;\">ABCDEFGHIJKLM<br>NOPQRSTUVWXYZ</h1>"
});
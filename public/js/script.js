// Bagian hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

const kategori = document.querySelector('#kategori');
const drop = document.querySelector('#drop')

kategori.addEventListener('click', function() {
    drop.classList.toggle('hidden');
});
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

const kategori1 = document.querySelector('#kategori1');
const drop1 = document.querySelector('#drop1')

kategori1.addEventListener('click', function() {
    drop1.classList.toggle('hidden');
});
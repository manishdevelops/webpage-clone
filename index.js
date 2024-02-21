'use strict'

const menubar = document.querySelector('#menubar');
const navbar = document.querySelector('#navbar');
const closemenu = document.querySelector('#close-menubar');

menubar.addEventListener('click', () => {
    navbar.classList.toggle('toggle-navbar');
})

closemenu.addEventListener('click', () => {
    navbar.classList.toggle('toggle-navbar');
})
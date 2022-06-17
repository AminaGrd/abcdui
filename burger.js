const openButton = document.querySelector('.menu-open');
const closeButton = document.querySelector('.menu-close');
const menuButton = document.querySelector('.menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const topMenu = document.querySelector('.top-menu');
const main = document.querySelector('main');
const burgerLine = document.querySelectorAll('.burger-line');


burgerMenu.addEventListener('click', function () {
// openButton.classList.toggle('active');
// closeButton.classList.toggle('active');
topMenu.classList.toggle('active');
main.classList.toggle('dimmed');
burgerLine.forEach((line) => {    
    line.classList.toggle("burger-line-active");
    line.classList.toggle("burger-line-reverse");
 });    
});

main.addEventListener('click', function () {
// openButton.classList.add('active');
// closeButton.classList.remove('active');
topMenu.classList.remove('active');
main.classList.remove('dimmed');
burgerLine.forEach((line) => {    
    line.classList.remove("burger-line-active");
    line.classList.add("burger-line-reverse");
 });    
})
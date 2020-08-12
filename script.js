let nav = document.querySelector('nav');

nav.addEventListener('mouseover', showNav);
nav.addEventListener('mouseout', hideNav);

function showNav() {
    nav.style.animationName = 'showmenu';
    setTimeout(function() {
        nav.style.transform = 'translateX(0px)';
    }, 300)
}
function hideNav() {
    nav.style.animationName = 'hidemenu';
    setTimeout(function() {
        nav.style.transform = 'translateX(-314px)';
    }, 300)
}
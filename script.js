const navLink = document.querySelector('.nav-link');
const menuBar = document.querySelector('.fa-bars');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 1 ) {
        nav.classList.replace('bg-transparent', 'nav-warna');
    } else if (this.scrollY <= 0) {
        nav.classList.replace('nav-warna', 'bg-transparent');
    }
})

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('is-active');
    navLink.classList.toggle('nav-active')
})
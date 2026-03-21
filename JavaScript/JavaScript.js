const openMenu = document.querySelector("#menu-open-button");
const closeMenu = document.querySelector("#menu-close-button");

openMenu.addEventListener("click", () =>{
    document.body.classList.toggle("open-menu");
});
closeMenu.addEventListener("click", () => openMenu.click());

let sections = document.querySelectorAll('section');
let navbar = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navbar.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector('header nav ul li a[href*="' + id + '"]')
                    .classList.add('active');
            });
        }
    });
};
const openMenu = document.querySelector("#menu-open-button");
const closeMenu = document.querySelector("#menu-close-button");
let startDemo = document.getElementById("startDemo");
let sourceDemo = document.getElementById("sourceDemo");

openMenu.addEventListener("click", () =>{
    document.body.classList.toggle("open-menu");
});
closeMenu.addEventListener("click", () => openMenu.click());

function openDemo(){
    sourceDemo.style.display = "block";
}

// if (startDemo.onclick()){
//     sourceDemo.classList.display = "block";
// }
    // pour navigation
// const swiper = new swiper('.slider-wrapper', {
//     loop: true,

//     pagination:{
//         el: 'swiper-pagination',
//     },

//     // navigation
//     navigation: {
//         nextEl: '.swiper-button-next',
//         preEl: '.swiper-button-prev',
//     },
// });
const openMenu = document.querySelector("#menu-open-button");
const closeMenu = document.querySelector("#menu-close-button");
let startDemo = document.getElementById("startDemo");
let sourceDemo = document.getElementById("sourceDemo");
let sourceDemoportfolio = document.getElementById("sourceDemo-portfolio");
let project = document.getElementById("project");
let project1 = document.getElementById("project1");
let btnDemoProject = document.getElementById("btn-demo-project");

openMenu.addEventListener("click", () =>{
    document.body.classList.toggle("open-menu");
});
closeMenu.addEventListener("click", () => openMenu.click());

function openDemo(){
    sourceDemo.style.display = "block";
}

function openProject(){
    sourceDemoportfolio.style.display = "block";
    // btnDemoProject.style.cursor = "deseable";
}

const listImageDemo = document.querySelectorAll('.item-image');
let currentIndex = 0;

function showItemImage(index){
    listImageDemo.forEach((t, i)=>{
        t.classList.toggle('active', i === index);
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % listImageDemo.length;
    showItemImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex-1+listImageDemo.length) % listImageDemo.length;
});

showItemImage(currentIndex);

document.getElementById('next-projectPort').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % listImageDemo.length;
    showItemImage(currentIndex);
});

document.getElementById('prev-projectPort').addEventListener('click', () => {
    currentIndex = (currentIndex-1+listImageDemo.length) % listImageDemo.length;
});

showItemImage(currentIndex);
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
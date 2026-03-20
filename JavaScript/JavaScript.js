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

function openDemo(){
    sourceDemo.style.display = "block";
}

function openProject(){
    sourceDemoportfolio.style.display = "block";
    // btnDemoProject.style.cursor = "deseable";
}

// const listImageDemo = document.querySelectorAll('.demo-imageComm');
// let currentIndex = 0;

// function showItemImage(index){
//     listImageDemo.forEach((t, i)=>{
//         t.classList.toggle('active', i === index);
//     });
// }

// document.getElementById('next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % listImageDemo.length;
//     showItemImage(currentIndex);
// });

// document.getElementById('prev').addEventListener('click', () => {
//     currentIndex = (currentIndex-1+listImageDemo.length) % listImageDemo.length;
//     showItemImage(currentIndex);
// });

// showItemImage(currentIndex);

// const demoImagePort = document.querySelectorAll('.demo-imagePort');
// let currInd = 0;

// function showItem(indexProject){
//     demoImagePort.forEach((t, i)=>{
//         t.classList.toggle('active', i === indexProject);
//     });
// }
// document.getElementById('next-projectPort').addEventListener('click', () => {
//     currInd = (currInd + 1) % demoImagePort.length;
//     showItem(currInd);
// });

// document.getElementById('prev-projectPort').addEventListener('click', () => {
//     currInd = (currInd-1+demoImagePort.length) % demoImagePort.length;
//     showItem(currInd);
// });

// console.log(demoImagePort.length);
// showItem(currInd);


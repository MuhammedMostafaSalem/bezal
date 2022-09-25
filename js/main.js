// // ckeck if there's local storage color option
// let mainColors = localStorage.getItem('color-option');
// if(mainColors !== null) {
//     document.documentElement.style.setProperty('--main-color' , localStorage.getItem('color-option'));

//     // remove active class from all colors li
//     document.querySelectorAll('.colors-list li').forEach(function(element) {
//         element.classList.remove('active');

//     // add active class on elemet with data-color === local storage item
//     if(element.dataset.color === mainColors) {
//         // add active class
//         element.classList.add('active');
//     }
//     });
// }


let body = document.body
// ckeck if there's local storage color option
let mainColors = localStorage.getItem('color-option');
body.style.color=mainColors
console.log(mainColors);
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color-option'));

    // remove active class from all colors li
    document.querySelectorAll('.colors-list li').forEach(function (element) {
        element.classList.remove('active');
        
        // add active class on elemet with data-color === local storage item
        if (element.dataset.color === mainColors) {
            // add active class
            element.classList.add('active');
        }
    });
}






// section navbar
window.addEventListener("scroll" , function() {
    let navbar = this.document.querySelector('.navbar');
    navbar.classList.toggle("sticky" , window.scrollY > 300);
});



// section btn up
window.addEventListener('scroll' , function() {
    let upBtn = document.querySelector('#upBtn');
    upBtn.classList.toggle("show" , window.scrollY > 500);
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



let settingsBox = document.querySelector('.settings-box');
let btn = document.querySelector('.toggle-settings');
let gear = document.querySelector('.fa-gear');

btn.onclick = function() {
    gear.classList.toggle('spin');
}
gear.onclick = function() {
    settingsBox.classList.toggle('open')
}



// switch color
// let colorLi = document.querySelectorAll('.colors-list li');
// colorLi.forEach(function(event){
//     event.addEventListener('click' , function(e) {
//         console.log(e.target.dataset.color);
//         document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

//         localStorage.setItem('color-option' , e.target.dataset.color);

//         // remove active class from all child
//         e.target.parentElement.querySelectorAll('.active').forEach(function(element) {
//             element.classList.remove('active');
//         });
//                 // add active class
//                 e.target.classList.add('active');
//     });
// });


let colorLi = document.querySelectorAll('.colors-list li');
colorLi.forEach(function (event) {
    event.addEventListener('click', function (e) {
        console.log(e.target.dataset.color);
        let color = e.target.dataset.color;

        body.style.color = color
        localStorage.setItem('color-option', color);

        // remove active class from all child
        e.target.parentElement.querySelectorAll('.active').forEach(function (element) {
            element.classList.remove('active');
        });
        // add active class
        e.target.classList.add('active');
    });
});
let menu=document.querySelector('.menu-icon');

let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    
}

// cart toggle
let cart=document.querySelector('.cart');

document.querySelector('#cart-icon').onclick=()=>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}

// login form toggle
let login=document.querySelector('.login-form');

document.querySelector('#user-icon').onclick=()=>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');

}

// On click on menu links removed menu
window.onscroll=() =>{

    navbar.classList.remove('active');
    menu.classList.remove('active');
}


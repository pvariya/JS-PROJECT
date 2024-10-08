import navbar from "./navbar.js";
import carousel from "./slider.js";
// import { Carousel, initMDB } from "mdb-ui-kit";

// initMDB({ Carousel });
let l = localStorage.getItem('islogin');
if(l == 'false') {
    console.log(localStorage.getItem('islogin'));
    location.href = "../web/login.htm";
}

let database_obj = JSON.parse(localStorage.getItem('user')) ?? {};
let data_name = database_obj.name;

let nav_container = document.querySelector('.container_navbar');
nav_container.innerHTML = navbar()

document.querySelector('.container_navbar').innerHTML = navbar();
document.querySelector('.carousel').innerHTML = carousel();


if(localStorage.getItem('islogin') == 'true'){
    document.querySelector('#sign_up').style.display = 'none';
    document.querySelector('#sign_in').style.display = 'none';
    // document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#logout').style.width = '62rem';
    document.querySelector('.user-name').innerHTML = `${data_name}`;
}
else{
    document.querySelector('#show_products').style.display = 'none';
    document.querySelector('#user-block').style.display = 'none';
    document.querySelector('#cartproduct').style.display = 'none';
    document.querySelector('#search_product').style.display = 'none';
    document.querySelector('#sign_up').style.display = 'inline-block';
    document.querySelector('#sign_in').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'none';
    document.querySelector('#add_product').style.display = 'none';
}

const logfunction = () => {
    localStorage.setItem('islogin', false);   
}

let logout = document.querySelector('#logout');
logout.addEventListener('click',logfunction);
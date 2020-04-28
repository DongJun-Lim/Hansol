'use strict'

const menuList = document.querySelector('.menu-list');
const dropdownList = document.querySelector('.dropdown-list');
const productInfo = document.querySelector('.sub-list');

menuList.addEventListener('mouseover', event=>{
    dropdownList.classList.add("mouseover");
    productInfo.classList.add("mouseover");
});
menuList.addEventListener('mouseleave', event=>{
    dropdownList.classList.remove("mouseover");
    productInfo.classList.remove("mouseover");
});
dropdownList.addEventListener('mouseover', event=>{
    dropdownList.classList.add("mouseover");
    productInfo.classList.add("mouseover");
});
dropdownList.addEventListener('mouseleave', event=>{
    dropdownList.classList.remove("mouseover");
    productInfo.classList.remove("mouseover");
});
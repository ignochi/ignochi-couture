"use strict";

let dropdownBlur = document.querySelector(".dropdownBlur");
console.log(dropdownBlur)
let dropdownMainContent = document.querySelector("div.dropdownMainContent");
let jeansDropdown = document.getElementById("jeansDropdown");
let menuLinks = document.querySelectorAll(".dropdownLinks > li > a");
let namesOfClothingItems = document.getElementById("mainHeaderContent");

/*
to hide the dropdown menu when you click on any part of the
page not just the close menu button
*/
dropdownBlur.addEventListener("click", hideTheDropdown, true);
dropdownMainContent.addEventListener("click", showTheDropdown);

window.addEventListener(
    "resize", () => {
        if (window.innerWidth >= 992) {
            dropdownBlur.style.display = "block";
        } else {
            dropdownBlur.style.display = "none";
        }
    }
);


function hideTheDropdown() {
    dropdownBlur.style.display = "none";
}

function showTheDropdown() {
    dropdownBlur.style.display = "block";
}

function jeanToggleFunction() {
    jeansDropdown.classList.toggle("jeanToggleClass");
}

function openNewsletter() {
    document.querySelector(".newsletterBlur").style.display = "block";
}

function closeNewsletter() {
    document.querySelector(".newsletterBlur").style.display = "none";
}
"use strict";
// Declare varibales
var navigation = document.getElementById("navigation");
var contactButton = document.getElementById("contact-button");
var fixedBackground = "navigation__fixed-background";
// Function to add background color to navigation
window.addEventListener("scroll", function () {
    window.scrollY > 30
        ? navigation.classList.add(fixedBackground)
        : navigation.classList.remove(fixedBackground);
});
// Function to scroll to specific id on a page
var scrollToView = function (ref) {
    var element = document.getElementById(ref);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
};
contactButton.addEventListener("click", function () {
    scrollToView("section-contact");
});

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var overlay = document.querySelector(".overlay");

menuIcon.onclick=function(){
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
};
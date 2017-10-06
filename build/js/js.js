"use strict";

var menu = document.querySelector(".main-nav");
var list = document.querySelector(".main-nav__list");
var btn = document.querySelector(".main-nav__toggle");
var open = document.querySelector(".main-nav--opened");

btn.addEventListener("click", function(event) {
	event.preventDefault();
	if (list.classList.contains("main-nav__list--closed")) {
		list.classList.remove("main-nav__list--closed");
		menu.classList.remove("main-nav--closed");
		menu.classList.add("main-nav--opened");
	} else {
		list.classList.add("main-nav__list--closed");
		menu.classList.add("main-nav--closed");
		menu.classList.remove("main-nav--opened");
	}
});
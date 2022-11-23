// varables block
const button = document.querySelector(".custom-button");
const items = document.querySelectorAll(".nav-link");
const main_cont = document.querySelector(".main-text");
const toggle_nav = document.querySelector(".toggle-tab");
const show_nav_items = document.querySelectorAll(".show-items");
const nav_tab = document.querySelectorAll(".gen-svg");
const mobile_nav_event = document.querySelectorAll(".nav-mobile-events");
const tab_nav_event = document.querySelectorAll(".tab-nav-event");
const click_and_show = document.querySelector(".close-and-show");
const tab_sidebar = document.querySelector(".priss");

click_and_show.addEventListener("click", () => {
	click_and_show.classList.toggle("close-and-show_active");
	click_and_show.classList.toggle("bi-arrow-right-circle-fill");
	tab_sidebar.classList.toggle("visually-hidden");
});

for (let i = 0; i < tab_nav_event.length; i++) {
	tab_nav_event[i].addEventListener("click", tab_select);
}
// select block
function tab_select() {
	tab_deselect(this);
	this.classList.add("nav-tab-active");
}

// End select block
// tab_deselecting block
function tab_deselect(c) {
	for (let i = 0; i < tab_nav_event.length; i++) {
		if (tab_nav_event[i] != c) {
			tab_nav_event[i].classList.remove("nav-tab-active");
		}
	}
}

for (let i = 0; i < mobile_nav_event.length; i++) {
	mobile_nav_event[i].addEventListener("click", mobile_select);
}
// select block
function mobile_select() {
	mobile_deselect(this);
	this.classList.add("nav-mobile-active");
}

// End select block
// mobile_deselecting block
function mobile_deselect(c) {
	for (let i = 0; i < mobile_nav_event.length; i++) {
		if (mobile_nav_event[i] != c) {
			mobile_nav_event[i].classList.remove("nav-mobile-active");
		}
	}
}

// end variables block
/* ----------------- */
// click-event block

toggle_nav.addEventListener("click", () => {
	for (let i = 0; i < show_nav_items.length; i++) {
		const element = show_nav_items[i];
		element.classList.toggle("visually-hidden");
	}
});
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", select);
}
// select block
function select() {
	deselect(this);
	this.classList.add("active");
	this.classList.remove("num");
}

// End select block
// Deselecting block
function deselect(c) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] != c) {
			items[i].classList.remove("active");
		}
	}
}
// End deselecting block
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// nav-mobile-active

window.addEventListener("load", () => {
	let nav_bar_aos = document.querySelectorAll(".navbar");
	nav_bar_aos.setAttribute("data-aos-delay", "1000");
});

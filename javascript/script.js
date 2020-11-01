"use strict";

button_krest.style.display = "none";

document.getElementById("menu_links").onclick = () => {
	menu_links.style.display = "none";
	menu_a.style.display = "flex";
	button_krest.style.display = "flex";
};
document.getElementById("button_krest").onclick = () => {
	menu_a.style.display = "none";
	menu_links.style.display = "contents";
	button_krest.style.display = "none";
};

document.getElementById("home").onclick = () => {

	home.classList.add("active");
	cont.classList.remove("active");
	abot.classList.remove("active");
	serv.classList.remove("active");
	port.classList.remove("active");
	test.classList.remove("active");
};
document.getElementById("abot").onclick = () => {
	abot.classList.add("active");
	home.classList.remove("active");
	cont.classList.remove("active");
	serv.classList.remove("active");
	port.classList.remove("active");
	test.classList.remove("active");
};
document.getElementById("serv").onclick = () => {
	serv.classList.add("active");
	home.classList.remove("active");
	abot.classList.remove("active");
	cont.classList.remove("active");
	port.classList.remove("active");
	test.classList.remove("active");
};
document.getElementById("port").onclick = () => {
	port.classList.add("active");
	home.classList.remove("active");
	abot.classList.remove("active");
	serv.classList.remove("active");
	cont.classList.remove("active");
	test.classList.remove("active");
};
document.getElementById("test").onclick = () => {
	test.classList.add("active");
	home.classList.remove("active");
	abot.classList.remove("active");
	serv.classList.remove("active");
	port.classList.remove("active");
	cont.classList.remove("active");
};
document.getElementById("cont").onclick = () => {
	cont.classList.add("active");
	home.classList.remove("active");
	abot.classList.remove("active");
	serv.classList.remove("active");
	port.classList.remove("active");
	test.classList.remove("active");
};


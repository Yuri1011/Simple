"use strict";

button_krest.style.display = "none";

menu_links.onclick = () => {
	menu_links.style.display = "none";
	menu_a.style.display = "flex";
	button_krest.style.display = "flex";
};
button_krest.onclick = () => {
	menu_a.style.display = "none";
	menu_links.style.display = "contents";
	button_krest.style.display = "none";
};

menu_a.onclick = (event) => {

	if (event.target === home) {
		removeStyle(home);
	} else if (event.target === abot) {
		removeStyle(abot)
	} else if (event.target === serv) {
		removeStyle(serv)
	} else if (event.target === port) {
		removeStyle(port)
	} else if (event.target === test) {
		removeStyle(test)
	} else if (event.target === cont) {
		removeStyle(cont)
	}

}
function removeStyle(id) {
	if (id === home) {
		id.classList.add('active');
	} else {
		home.classList.remove("active");
	}
	if (id === cont) {
		id.classList.add('active');
	} else {
		cont.classList.remove("active");
	}
	if (id === abot) {
		id.classList.add("active");
	} else {
		abot.classList.remove("active");
	}
	if (id === serv) {
		id.classList.add("active");
	} else {
		serv.classList.remove("active");
	}
	if (id === port) {
		id.classList.add("active");
	} else {
		port.classList.remove("active");
	}
	if (id === test) {
		id.classList.add("active");
	} else {
		test.classList.remove("active");
	}
}
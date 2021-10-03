import React, { /* createRef, */ useRef } from "react";

export default function Referencias() {
	//let refMenu = createRef(),//Para crear referencias en Clases
	let refMenu = useRef(),
		refMenuBtn = useRef();
	//console.log(refMenu, refMenuBtn);

	const handleToggleMenu = (e) => {
		/* const $menu = document.getElementById("menu");

		if (e.target.textContent === "Menu") {
			e.target.textContent = "Cerrar";
			$menu.style.display = "block";
		} else {
			e.target.textContent = "Menu";
			$menu.style.display = "none";
		} */

		if (refMenuBtn.current.textContent === "Menu") {
			refMenuBtn.current.textContent = "Cerrar";
			refMenu.current.style.display = "block";
		} else {
			refMenuBtn.current.textContent = "Menu";
			refMenu.current.style.display = "none";
		}
	};

	return (
		<>
			<h2>Referencias</h2>
			<button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
				Menu
			</button>
			<nav id="menu" ref={refMenu}>
				{/* eslint-disable-next-line */}
				<a href="#">Seccion1</a>
				<br />
				{/* eslint-disable-next-line */}
				<a href="#">Seccion2</a>
				<br />
				{/* eslint-disable-next-line */}
				<a href="#">Seccion3</a>
				<br />
				{/* eslint-disable-next-line */}
				<a href="#">Seccion4</a>
				<br />
				{/* eslint-disable-next-line */}
				<a href="#">Seccion5</a>
			</nav>
		</>
	);
}

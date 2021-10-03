import React, { useState } from "react";

/* export default function Formularios() {
	const [nombre, setNombre] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [sabor, setSabor] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [lenguaje, setLenguaje] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [terminos, setTerminos] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("El formulario se ha enviado");
	};

	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<p>Elige tu sabor JS Favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					onChange={(e) => setSabor(e.target.value)}
				/>
				<label htmlFor="vanilla">Vanilla JS</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={(e) => setSabor(e.target.value)}
					defaultChecked
				/>
				<label htmlFor="react">React JS</label>
				<input
					type="radio"
					id="angular"
					name="sabor"
					value="angular"
					onChange={(e) => setSabor(e.target.value)}
				/>
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="vue"
					name="sabor"
					value="vue"
					onChange={(e) => setSabor(e.target.value)}
				/>
				<label htmlFor="vue">Vue JS</label>
				<input
					type="radio"
					id="svelte"
					name="sabor"
					value="svelte"
					onChange={(e) => setSabor(e.target.value)}
				/>
				<label htmlFor="svelte">Svelte</label>
				<p>Elige tu lenguaje de programacion favorito</p>
				<select
					name="lenguaje"
					id=""
					onChange={(e) => setLenguaje(e.target.value)}
					defaultValue=""
				>
					<option value="">- - -</option>
					<option value="js">JavaScript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">GO</option>
					<option value="rb">Ruby</option>
				</select>
				<br />
				<label htmlFor="terminos">Acepto los términos y condiciones</label>
				<input
					type="checkbox"
					name="terminos"
					id="terminos"
					onChange={(e) => setTerminos(e.target.checked)}
				/>
			</form>
		</>
	);
} */

//Version con una sola variable de estado
export default function Formularios() {
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChecked = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("El formulario se ha enviado");
	};

	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={form.nombre}
					onChange={handleChange}
				/>
				<p>Elige tu sabor JS Favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					onChange={handleChange}
				/>
				<label htmlFor="vanilla">Vanilla JS</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={handleChange}
					defaultChecked
				/>
				<label htmlFor="react">React JS</label>
				<input
					type="radio"
					id="angular"
					name="sabor"
					value="angular"
					onChange={handleChange}
				/>
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="vue"
					name="sabor"
					value="vue"
					onChange={handleChange}
				/>
				<label htmlFor="vue">Vue JS</label>
				<input
					type="radio"
					id="svelte"
					name="sabor"
					value="svelte"
					onChange={handleChange}
				/>
				<label htmlFor="svelte">Svelte</label>
				<p>Elige tu lenguaje de programacion favorito</p>
				<select name="lenguaje" id="" onChange={handleChange} defaultValue="">
					<option value="">- - -</option>
					<option value="js">JavaScript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">GO</option>
					<option value="rb">Ruby</option>
				</select>
				<br />
				<label htmlFor="terminos">Acepto los términos y condiciones</label>
				<input
					type="checkbox"
					name="terminos"
					id="terminos"
					onChange={handleChecked}
				/>
			</form>
		</>
	);
}

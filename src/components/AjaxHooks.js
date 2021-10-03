import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default function AjaxHooks() {
	const [Pokemons, setPokemons] = useState([]);

	/* 
	useEffect(() => {
		let url = "https://pokeapi.co/api/v2/pokemon/";
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				// console.log(json); 
				json.results.forEach((el) => {
					fetch(el.url)
						.then((res) => res.json())
						.then((json) => {
							// console.log(json); 
							let tempPokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default,
							};

							//setPokemons([...Pokemons, tempPokemon]); // Este no se puede usar si utilizas el corchete de las dependencia vacio en el hook useEffect

							setPokemons((Pokemons) => [
								...Pokemons,
								tempPokemon,
							]); //Utilizar esta para hook useEffect con segundo paramatro vacio ---useEffect (() => {}, []) ----
						});
				});
			});

		return () => {
			console.log("Se fue");
			console.log("Lista Pokemons:", Pokemons);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h2>Peticiones Asincronas con Hooks</h2>
			{Pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				Pokemons.map((el) => (
					<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
				))
			)}
		</>
	); */

	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json();
			console.log(json);
			/* json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json();
				let tempPokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};

				//setPokemons([...Pokemons, tempPokemon]); // Este no se puede usar si utilizas el corchete de las dependencia vacio en el hook useEffect

				setPokemons((Pokemons) => [...Pokemons, tempPokemon]); //Utilizar esta para hook useEffect con segundo paramatro vacio ---useEffect (() => {}, []) ----
			}); */

			//Para solicitar los pokemons en order hay que llamar a una funcion en un bucle con await.
			const seqFetch = async (el) => {
				let res = await fetch(el.url),
					json = await res.json();
				let tempPokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};

				setPokemons((Pokemons) => [...Pokemons, tempPokemon]);
			};

			for (let i of json.results) {
				await seqFetch(i);
			}
		};

		getPokemons("https://pokeapi.co/api/v2/pokemon/");

		return () => {
			console.log("Se fue");
			console.log("Lista Pokemons:", Pokemons);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h2>Peticiones Asincronas con Hooks</h2>
			{Pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				Pokemons.map((el) => (
					<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
				))
			)}
		</>
	);
}

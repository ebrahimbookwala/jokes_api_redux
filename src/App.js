import React from "react";
import "./App.css";
import JokesList from "./features/jokes/JokesList";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Jokes</h1>
				<JokesList />
			</header>
		</div>
	);
}

export default App;

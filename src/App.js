import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Weather defaultCity="Radom" />
			<footer>
				This project was coded by{" "}
				<a
					href="https://github.com/gosiast"
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					Malgorzata Stano{" "}
				</a>
				and is
				<a
					href="https://github.com/gosiast/final-weather-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					{" "}
					open sourced{" "}
				</a>{" "}
			</footer>
		</div>
	);
}

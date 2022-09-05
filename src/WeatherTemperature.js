import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");
	//in () we put what the default behaviour will be

	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(props.celsius)}</span>
				<span className="unit">
					°C |{" "}
					<button href="" onClick={showFahrenheit}>
						°F
					</button>
				</span>
			</div>
		);
	} else {
		let fahrenheit = (props.celsius * 9) / 5 + 35;
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(fahrenheit)}</span>
				<span className="unit">
					<button href="" onClick={showCelsius}>
						°C |{" "}
					</button>
					°F
				</span>
			</div>
		);
	}
}

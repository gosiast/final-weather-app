import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false); // loaded will change
	//that's why we need to use the state
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setForecast(response.data.daily);
		setLoaded(true); //when it's set to false then
		// it won't display the daily forecast
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					<hr />
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[1]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[2]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[3]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[4]} />
					</div>
				</div>
			</div>
		);

		// another option to display multiple days was to use the LOOP
	} else {
		let apiKey = "1e7e4fc41dea029f49d7f03e46e28df4";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}

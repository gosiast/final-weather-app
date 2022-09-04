import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}
	let apiKey = "1e7e4fc41dea029f49d7f03e46e28df4";
	let longitude = props.coordinates.lon;
	let latitude = props.coordinates.lat;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<WeatherIcon code="01d" size={36} />
					<div className="WeatherForecast-tempretures">
						<span className="Weatherforecast-temperature-max">19°</span>
						<span className="Weatherforecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}

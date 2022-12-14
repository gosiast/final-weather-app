import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	function search() {
		const apiKey = "1e7e4fc41dea029f49d7f03e46e28df4";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		//search for city we need EVENT LISTENER
		search(); // API call with city
	}

	function handleCityChange(event) {
		setCity(event.target.value); //this will update the city
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
			//above in <WeatherForecast coordinates we are sending
			//the coordinates to the forecast
		);
	} else {
		search();
		return "Loading...";
	}
}

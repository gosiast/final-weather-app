import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	const [ready, setReady] = useState(false);
	const [temperature, setTemperature] = useState(null);
	function handleResponse(response) {
		console.log(response.data);
		setTemperature(response.data.main.temp);
		setReady(true);
	}
	if (ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control"
								autoFocus="on"
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
				<h1>Barcelona</h1>
				<ul>
					<li>Tuesday 09:30</li>
					<li>Mostly cloudy</li>
				</ul>
				<div className="row mt-3">
					<div className="col-6">
						<div className="d-flex">
							<img
								src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
								alt="sunny"
								className="float-left"
							/>
							<div className="float-left">
								<span className="temperature">{temperature}</span>
								<span className="unit">°C</span>
							</div>
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Precipitation: 2%</li>
							<li>Humidity: 63%</li>
							<li> Wind: 10 km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "1e7e4fc41dea029f49d7f03e46e28df4";
		let city = "Barcelona";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}

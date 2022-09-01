import React from "react";
import "./Weather.css";

export default function Weather() {
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
					<div className="clearfix">
						<img
							src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
							alt="sunny"
							className="float-left"
						/>
						<div className="float-left">
							<span className="temperature">27</span>
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
}

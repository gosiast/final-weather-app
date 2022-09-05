import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function maxTemperature() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}°`;
	}

	function minTemperature() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}°`;
	}
	//the 2 functions above will take care of formatting
	//the temperature

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat" ]
		return days[day];
	}
	//above we are improving the day so we don't see
	//the number but the actual day name
	return (
		<div>
			<div className="WeatherForecast-day">{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={36} />
			<div className="WeatherForecast-tempretures">
				<span className="Weatherforecast-temperature-max">
					{maxTemperature()}
				</span>
				<span className="Weatherforecast-temperature-min">
					{minTemperature()}
				</span>
			</div>
		</div>
	);
}

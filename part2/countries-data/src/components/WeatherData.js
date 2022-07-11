import axios from "axios";
import { useEffect, useState } from "react";

const WeatherData = ({ currentCountryData }) => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const [isLoading, setIsLoading] = useState(true);
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		console.info("fetching weather");
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${currentCountryData.capital}&appid=${apiKey}&units=metric`
			)
			.then((res) => setWeatherData(res.data))
			.finally(() => setIsLoading(false));
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentCountryData.capital]);

	const languagesList = Object.values(currentCountryData.languages);

	return (
		<div>
			<h2> {currentCountryData.name.common}</h2>

			<p>capital : {currentCountryData.capital}</p>
			<p>area : {currentCountryData.area}</p>

			<h3>languages</h3>
			<ul>
				{languagesList.map((lang) => {
					return <li key={lang}> {lang} </li>;
				})}
			</ul>
			<img alt="flag" src={currentCountryData.flags.png} />

			<h2> Weather in {currentCountryData.capital} </h2>
			<p> </p>
			{isLoading ? (
				"Loading..."
			) : (
				<div>
					{console.info("fetching icon")}
					<img
						alt="weather icon"
						src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
					/>
					<p>temperature {weatherData.main.temp} Celcius</p>
					<p>wind {weatherData.wind.speed} m/s</p>
				</div>
			)}
		</div>
	);
};

export default WeatherData;

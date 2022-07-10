import axios from "axios";
import { useEffect, useState } from "react"

const WeatherData = ({ currentCountryData }) => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const [iconCode, setIconCode] = useState('');

	useEffect(() => {

		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCountryData.capital}&appid=${apiKey}`)
			.then((res) => res.data.weather[0].icon)
			.then((iconCode) => setIconCode(iconCode))

	})
	

	const languagesList = Object.values(currentCountryData.languages)

	return (
		<div>
			<h2> {currentCountryData.name.common}</h2>

			<p>capital : {currentCountryData.capital}</p>
			<p>area : {currentCountryData.area}</p>

			<h3>languages</h3>
            <ul>
                {languagesList.map(lang => {
                    return(<li key={lang}> {lang} </li>)
                })}
            </ul>
			{iconCode !== '' 
			&& <img alt="weather icon" src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}/>}
			
			
		</div>
	);
};

export default WeatherData;

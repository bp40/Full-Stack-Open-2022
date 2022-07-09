import axios from "axios";

const WeatherData = ({ currentCountryData }) => {
	const apiKey = process.env.REACT_APP_API_KEY;

	//axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}`)
	//	.then((res) => {})

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
			
		</div>
	);
};

export default WeatherData;

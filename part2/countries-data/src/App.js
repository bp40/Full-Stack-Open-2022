import { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/CountriesList";
import WeatherData from "./components/WeatherData";

function App() {
	const [countries, setCountries] = useState([]);
	const [currentCountryData, setCurrentCountryData] = useState({})
	const [filterTerm, setFilterTerm] = useState("");
	const [displayCountriesList, setdisplayCountriesList] = useState(true)

	const apiKey = process.env.REACT_APP_API_KEY

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((res) => {
			setCountries(res.data);
		});
	}, []);

	const handleNameChange = (event) => {
		setFilterTerm(event.target.value);
	};
	

	const shownCountriesList = countries
		.filter((country) => country.name.common.toLowerCase().includes(filterTerm))
		.map((filteredCountry) => filteredCountry);


	return (
		<>
			<div>
				<label>find countries</label>
				<input onChange={handleNameChange} value={filterTerm} />
			</div>
			
			{displayCountriesList
			? <CountriesList countriesList={shownCountriesList} 
				setdisplayCountriesList={setdisplayCountriesList} 
				setCurrentCountryData={setCurrentCountryData}
				/>
			: <WeatherData currentCountryData={currentCountryData}/>}
			
		</>
	);
}

export default App;

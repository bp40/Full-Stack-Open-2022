import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [countries, setCountries] = useState([]);
	const [filterTerm, setFilterTerm] = useState("");

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((res) => {
			setCountries(res.data);
		});
	}, []);

	const handleNameChange = (event) => {
		setFilterTerm(event.target.value);
	};

	const shownCountries = countries
		.filter((country) => country.name.common.toLowerCase().includes(filterTerm))
		.map((filteredCountry) => filteredCountry);

	return (
		<>
			<div>
				<label>find countries</label>
				<input onChange={handleNameChange} value={filterTerm} />
			</div>
			{shownCountries.length > 10  
				? <p>Too many matches</p>
				: shownCountries.map(country => <p key={country.cca2}>{country.name.common}</p>)
			}
		</>
	);
}

export default App;

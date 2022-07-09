
import Country from "./Country";

const CountriesList = ({ countriesList, setdisplayCountriesList, setCurrentCountryData}) => {

	return (
		<div>
			{countriesList.length > 10 ? (
				<p>Too many matches</p>
			) : (
				countriesList.map((country) => (
					<Country 
                        key={country.cca2} 
                        country={country}
                        setdisplayCountriesList={setdisplayCountriesList}
                        setCurrentCountryData={setCurrentCountryData}
                    />
				))
			)}
		</div>
	);
};

export default CountriesList;

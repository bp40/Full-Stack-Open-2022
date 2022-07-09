const Country = ({
	country,
	setdisplayCountriesList,
	setCurrentCountryData,
}) => {
	const handleShowButton = (event) => {
		setdisplayCountriesList(false);
		setCurrentCountryData(country);
	};

	return (
		<div>
			{country.name.common}
			<button onClick={handleShowButton}>show</button>
		</div>
	);
};

export default Country;

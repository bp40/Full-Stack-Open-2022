import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import NewPersonForm from "./components/NewPersonForm";
import PersonsList from "./components/PersonsList";
import personsService from "./services/personsService";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [searchTerm, setNewSearchTerm] = useState("");

	useEffect(() => {
		personsService.getAll().then((data) => {
			setPersons(data);
		});
	}, []);

	const handleSearchChange = (event) => {
		event.preventDefault();
		setNewSearchTerm(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

			<NewPersonForm persons={persons} setPersons={setPersons} />

			<h2>Numbers</h2>
			<PersonsList
				persons={persons}
				searchTerm={searchTerm}
				setPersons={setPersons}
			/>
		</div>
	);
};

export default App;

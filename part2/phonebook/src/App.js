import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios"

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchTerm, setNewSearchTerm] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then(res => {
			setPersons(res.data)
		})
	}, [])

	const handleNameChange = (event) => {
		event.preventDefault();
		setNewName(event.target.value);
	};

	const handlePersonSubmit = (event) => {
		event.preventDefault();

		const newPersonObject = {
			name: newName,
			number: newNumber,
		};

		for (let i = 0; i < persons.length; i++) {
			if (persons[i].name === newName) {
				alert(`${newName} is already added to phonebook`);
				return;
			}
		}

		setPersons(persons.concat(newPersonObject));
	};

	const handleNumberChange = (event) => {
		event.preventDefault();
		setNewNumber(event.target.value);
	};

	const handleSearchChange = (event) => {
		event.preventDefault();
		setNewSearchTerm(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>

			<h2>add a new</h2>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				handlePersonSubmit={handlePersonSubmit}
			/>

			<h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm}/>
			
		</div>
	);
};

export default App;

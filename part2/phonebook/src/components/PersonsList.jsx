import React from "react";
import Person from "./Person";

function PersonsList({ persons, searchTerm, setPersons }) {
	return (
		<div>
			{persons
				.filter((person) => person.name.toLowerCase().includes(searchTerm))
				.map((person) => (
					<Person key={person.id} person={person} setPersons={setPersons} />
				))}
		</div>
	);
}

export default PersonsList;

import Person from "./Person";

const PersonsList = ({ persons, searchTerm, setPersons }) => {
	return (
		<div>
			{persons
				.filter((person) => person.name.toLowerCase().includes(searchTerm))
				.map((person) => {
					return (
						<Person key={person.id} person={person} setPersons={setPersons} />
					);
				})}
		</div>
	);
};

export default PersonsList;

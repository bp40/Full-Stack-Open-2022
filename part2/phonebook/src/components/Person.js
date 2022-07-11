import personsService from "../services/personsService";

const Person = ({ person, setPersons }) => {
	const handleDelete = (event) => {
		const removeIndex = event.target.value;
		if (window.confirm(`Delete ${person.name} ?`)) {
			personsService.remove(removeIndex).then(() => {
				personsService.getAll().then((data) => {
					setPersons(data);
				});
			});
		}
	};

	return (
		<div>
			<span key={person.name}>
				{" "}
				{person.name} {person.number}{" "}
			</span>
			<button onClick={handleDelete} value={person.id}>
				delete
			</button>
		</div>
	);
};

export default Person;

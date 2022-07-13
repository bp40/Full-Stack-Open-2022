import React from 'react';
import Person from './Person';

function PersonsList({
  persons, searchTerm, setPersons, setErrorMessage,
}) {
  return (
    <div>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(searchTerm))
        .map((person) => (
          <Person
            key={person.id}
            setErrorMessage={setErrorMessage}
            person={person}
            setPersons={setPersons}
          />
        ))}
    </div>
  );
}

export default PersonsList;

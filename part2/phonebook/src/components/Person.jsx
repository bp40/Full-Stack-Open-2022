import React from 'react';
import personsService from '../services/personsService';

function Person({ person, setPersons, setAlertMessage }) {
  const handleDelete = (event) => {
    const removeIndex = event.target.value;
    // eslint-disable-next-line no-alert
    if (window.confirm(`Delete ${person.name} ?`)) {
      personsService.remove(removeIndex).then(() => {
        personsService.getAll().then((data) => {
          setPersons(data);
        });
      }).catch((() => {
        setAlertMessage({
          message: `${person.name} is already removed`,
          isError: true,
        });
        setTimeout(() => {
          setAlertMessage({
            message: '',
            isError: false,
          });
        }, 5000);
      }));
    }
  };

  return (
    <div>
      <span key={person.name}>
        {person.name}
        {' '}
        {person.number}
      </span>
      <button type="button" onClick={handleDelete} value={person.id}>
        delete
      </button>
    </div>
  );
}

export default Person;

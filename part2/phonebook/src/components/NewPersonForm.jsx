import React, { useState } from 'react';

import personsService from '../services/personsService';

function NewPersonForm({ persons, setPersons, setAlertMessage }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const checkNameExist = (name) => {
    for (let i = 0; i < persons.length; i += 1) {
      if (persons[i].name === name) {
        return persons[i].contactId;
      }
    }
    return -1;
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();

    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const contactIdIfExist = checkNameExist(newPersonObject.name);

    if (contactIdIfExist !== -1) {
      if (
        // eslint-disable-next-line no-alert
        window.confirm(
          `${newPersonObject.name} is already added. Replace with new info?`,
        )
      ) {
        newPersonObject.id = contactIdIfExist;
        personsService.update(contactIdIfExist, newPersonObject).then(() => {
          personsService.getAll().then((data) => {
            setPersons(data);
          });
        });
        setAlertMessage({
          message: `Edited ${newPersonObject.name}`,
          isError: false,
        });
        setTimeout(() => {
          setAlertMessage({
            message: '',
            isError: false,
          });
        }, 5000);
      }
    } else {
      setPersons(persons.concat(newPersonObject));
      personsService.create(newPersonObject)
        .then(() => {
          setAlertMessage({
            message: `Added ${newPersonObject.name}`,
            isError: false,
          });
          setTimeout(() => {
            setAlertMessage({
              message: '',
              isError: false,
            });
          }, 5000);
        })
        .catch((error) => {
          console.log(error.response.data.error);

          setAlertMessage({
            message: error.response.data.error,
            isError: true,
          });
          setTimeout(() => {
            setAlertMessage({
              message: '',
              isError: false,
            });
          }, 5000);
        });
      personsService.getAll().then((data) => {
        setPersons(data);
      });
    }
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={handlePersonSubmit}>
        <div>
          name:
          {' '}
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          {' '}
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default NewPersonForm;

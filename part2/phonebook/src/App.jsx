import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import NewPersonForm from './components/NewPersonForm';
import Notification from './components/Notification';
import PersonsList from './components/PersonsList';
import personsService from './services/personsService';

function App() {
  const [persons, setPersons] = useState([]);
  const [searchTerm, setNewSearchTerm] = useState('');
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    isError: false,
  });

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
      <Notification alertMessage={alertMessage} />
      <NewPersonForm persons={persons} setPersons={setPersons} setAlertMessage={setAlertMessage} />
      <PersonsList
        persons={persons}
        searchTerm={searchTerm}
        setPersons={setPersons}
        setAlertMessage={setAlertMessage}
      />
    </div>
  );
}

export default App;

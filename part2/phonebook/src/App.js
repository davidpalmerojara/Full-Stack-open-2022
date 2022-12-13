import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import phoneService from './services/phoneServices';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    phoneService
      .getAll()
      .then((allPersons) => {
        setPersons(allPersons);
      })
      .catch((error) => {
        console.log(error);
        setError('Could not load data from the server');
      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const update = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    console.log(update);
    update ? updatePerson() : addPerson();

    setNewName('');
    setNewNumber('');
  };

  const addPerson = () => {
    const person = { name: newName, number: newNumber };

    phoneService
      .create(person)
      .then((newPerson) => {
        setPersons([...persons, newPerson]);
        setSuccess(`User ${person.name} was added succesfully`);
        setTimeout(() => setSuccess(null), 3000);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.error);
        setTimeout(() => setError(null), 3000);
      });
  };

  const updatePerson = () => {
    const person = { name: newName, number: newNumber };
    const id = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    ).id;
    const confirm = window.confirm(
      `${newName} is already added to phonebook, replace the old number with new one?`
    );

    if (confirm) {
      phoneService
        .update(id, person)
        .then((res) => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : res))
          );
          setSuccess(`User ${person.name} was updated succesfully`);
          setTimeout(() => setSuccess(null), 3000);
        })
        .catch((error) => {
          console.log(error);
          setError(
            `Information of ${person.name} has already been removed from server`
          );
          setTimeout(() => setError(null), 3000);
        });
    }
  };

  const deletePerson = (id) => {
    const name = persons.find((person) => person.id === id).name;
    const confirm = window.confirm(`Delete ${name}?`);

    if (confirm) {
      phoneService
        .deleteNumber(id)
        .then((res) => setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => {
          setError(
            `Information of ${name} has already been removed from server`
          );
          setTimeout(() => setError(null), 3000);
        });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-screen w-screen">
      <nav className="border border-gray-200 px-2 sm:px-4 py-2 mb-10 flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-3xl font-bold">Phonebook</h1>
        <Filter
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </nav>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-5 md:grid-rows-1 md:gap-20 gap-8 m-4">
        <PersonForm
          handleForm={handleForm}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          success={success}
          error={error}
        />
        <Persons
          handleSearchChange={handleSearchChange}
          persons={persons}
          searchTerm={searchTerm}
          deletePerson={deletePerson}
        />
      </div>
    </div>
  );
}

export default App;

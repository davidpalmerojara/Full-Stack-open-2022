const Persons = ({ persons, searchTerm, deletePerson }) => {
  return (
    <div>
      <h3>Numbers</h3>
      {persons.map(
        (person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
            <div key={person.name}>
              {person.name} {person.number}
              <button onClick={() => deletePerson(person.id)}>delete</button>
            </div>
          )
      )}
    </div>
  );
};

export default Persons;

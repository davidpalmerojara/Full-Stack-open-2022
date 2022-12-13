const Persons = ({ persons, searchTerm, deletePerson }) => {
  return (
    <div className="md:col-start-3 md:col-end-6 border bg-white rounded-lg overflow-scroll">
      <table className="min-w-full divide-y divide-gray-200 overflow-scroll w-full">
        <thead>
          <tr className="">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {persons.map(
            (person) =>
              person.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
                <tr key={person.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {' '}
                    {person.number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => deletePerson(person.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Persons;

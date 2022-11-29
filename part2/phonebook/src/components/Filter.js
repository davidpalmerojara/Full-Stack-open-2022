const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      <div>
        filter shown with{' '}
        <input value={searchTerm} onChange={handleSearchChange} />
      </div>
    </div>
  );
};

export default Filter;

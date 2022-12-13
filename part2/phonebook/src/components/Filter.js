const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      <form className="pt-2 pb-2">
        <div className="relative text-gray-700">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="" disabled className="p-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            placeholder="Search..."
            className="shadow appearance-none border w-full px-4 text-gray-700 leading-tight py-2 text-sm rounded-md pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;

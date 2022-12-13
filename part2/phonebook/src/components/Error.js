import React from 'react';

const Error = ({ error }) => {
  return (
    error && (
      <div className="bg-red-100 text-red-600 border border-red-600 rounded-lg p-2 mb-4 w-full">
        {error}
      </div>
    )
  );
};

export default Error;

//

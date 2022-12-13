import React from 'react';

const Notification = ({ success }) => {
  return (
    success && (
      <div className="bg-green-100 text-green-600 border border-green-600 rounded-lg p-2 mb-4">
        {success}
      </div>
    )
  );
};

export default Notification;

//

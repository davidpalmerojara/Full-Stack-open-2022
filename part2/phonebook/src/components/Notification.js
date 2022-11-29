import React from 'react';

const Notification = ({ success, error }) => {
  if (success === null && error === null) return null;

  return (
    <div className={success ? 'success' : 'error'}>
      {success ? success : error}
    </div>
  );
};

export default Notification;

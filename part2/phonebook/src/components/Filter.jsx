import React from 'react';

function Filter({ searchTerm, handleSearchChange }) {
  return (
    <div>
      filter shown with
      {' '}
      <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
}

export default Filter;

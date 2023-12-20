import React from 'react';

const FilterSidebar = ({ filters }) => {
  return (
    <div className="filter-sidebar">
      <h2>Фильтры</h2>
      <ul>
        {filters.map((filter) => (
          <li key={filter.id}>{filter.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;

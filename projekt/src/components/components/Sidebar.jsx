import React, { useState } from 'react';

const Sidebar = (props) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Handle filter selection
  const handleFilterChange = (size, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [size]: value
    }));
  };

  

  // Render filter options and handle their changes
  return (
    <div className="sidebar">
      {/* Size filter */}
      <select value={selectedFilters.size} onChange={(e) => handleFilterChange('size', e.target.value)}>
        <option value="">All Sizes</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="UNI">UNI</option>
        {/* Add more options */}
      </select>

      {/* Color filter */}
      {/* Implement color options and onChange event similarly */}

      {/* Price filter */}
      {/* Implement price range options and onChange event similarly */}

      {/* Category filter */}
      {/* Implement category options and onChange event similarly */}
    </div>
  );
}

export default Sidebar;

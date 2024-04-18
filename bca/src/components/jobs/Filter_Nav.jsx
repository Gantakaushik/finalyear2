import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import '../../styles/jobs/Filter_Nav.scss';
// import '../styles/Filter_Nav.scss';

const Filter_Nav = ({ onFilter }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleFilter = () => {
    onFilter(selectedDepartment, selectedLocation);
  };

  return (
    <>
      <div className="filter-navbar">
        <label htmlFor="departmentSelect">Select Jobtype:</label>
        <select
          id="departmentSelect"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All JobTypes</option>
          <option value="Fulltime">Fulltime</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>

        <label htmlFor="locationSelect">Select Location:</label>
        <select
          id="locationSelect"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="New York, NY">New York, NY</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
          <option value="Seattle, WA">Seattle, WA</option>
        </select>

        <button onClick={handleFilter}>Search</button>
        <Link to="/add_job"> <button >Add Jobs</button></Link>
      </div>
    </>
  );
};

export default Filter_Nav;
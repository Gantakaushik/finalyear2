import React from 'react'
import { FaMapMarker, FaBriefcase, FaEye } from 'react-icons/fa';
import '../../styles/jobs/Jobs_cards.scss';
import { Link } from 'react-router-dom';


const Jobs_cards = (props) => {
    const { jobName, jobType, location, experience,jobID } = props;

  return (
    <>
    <div className="job_container">
      <div className="job-card">
      <div className="job-info">
        <h2> {jobName} <span className="job-id">({jobID})</span></h2>
        <p>Job Type: {jobType}</p>
        <p>
          <FaMapMarker /> {location}
        </p>
        <p>
          <FaBriefcase /> {experience}  years
        </p>
      </div>
      <Link to={`/jobs/${jobID}`} className="view-button">
          <FaEye /> View
        </Link>
    </div>
    </div>
    </>
  )
}

export default Jobs_cards
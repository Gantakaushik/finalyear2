import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import "../../styles/jobs/Job_Description.scss";
import '../../styles/jobs/Application_popup.scss';
import Navbar from '../Navbar.jsx';

const Job_Description = ({ jobData }) => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [popupJobName, setPopupJobName] = useState("");
  const [popupLocation, setPopupLocation] = useState("");
  const [popupExperience, setPopupExperience] = useState("");
  
  const [fileInputRef, setFileInputRef] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); 

  const openPopup = (jobName, location, experience) => {
    setPopupJobName(jobName);
    setPopupLocation(location);
    setPopupExperience(experience);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleFileSelect = (e) => {
 
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const clearSelectedFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the input field
    }
    setSelectedFile(null);
    setFileInputRef(null);
  };
  const { jobId } = useParams();
  const job = jobData.find((job) => job.jobID === jobId);

  if (!job) {
    return <p>Job not found.</p>;
  }
  const formFields = [
    { name: "firstName", label: "First Name", required: true, placeholder: "Enter your first name" },
    { name: "lastName", label: "Last Name", required: true, placeholder: "Enter your last name" },
    { name: "contactNumber", label: "Contact Number", required: true, placeholder: "Enter your contact number" },
    { name: "email", label: "Email Address", required: true, placeholder: "Enter your email address" },
    { name: "currentCTC", label: "Current CTC (Annual)", required: false, placeholder: "Enter your current CTC" },
    { name: "expectedCTC", label: "Expected CTC (Annual)", required: false, placeholder: "Enter your expected CTC" },
    { name: "resume", label: "Resume", required: true, type: "file", placeholder: "Choose your resume file", autoComplete: "on" },
  ];
 
  
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, sending data to an API
    console.log(formData);
  };
  return (
    <>
     <Navbar/>
        <div className="job-description">
        <h2>{job.jobName}</h2>
        <p>Job Type: {job.jobType}</p>
        <p>Location: {job.location}</p>
        <p>Experience: {job.experience} years</p>
        

        <div className="role-and-responsibilities">
        <span>Company Overview:</span>
        <p className="Company">  {job.companyOverview}</p>
          <h3>Role and Responsibilities:</h3>
          <ul>
            {job.roleAndResponsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="candidate-qualifications">
          <h3>Candidate Qualifications:</h3>
          <ul>
            {job.candidateQualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
          <span>Required Skills: </span>
          <p className="required_skills"> {job.requiredSkills.join(', ')}</p>
        </div>

        <div className="job-Information"> 
        <p className="workplace">Workplace Type: {job.workplaceType}</p>
        <p className="income">Annual CTC: {job.annualCTC}</p>
        <p className="skills">Skills: {job.skills}</p>
        </div>

        <div className="job-actions">
          <Link to="/job-portal">
            <button className="back-button">
              <i className="fa fa-arrow-left">Back</i>
            </button>
          </Link>

          <button className="apply-button"  onClick={() =>
              openPopup(job.jobName, job.location, job.experience)
            }>Apply</button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="application-popup">
          <div className="popup-content ">
            <div className="job_detail"></div>
         <h2>Role:{job.jobName}</h2>
        <p>Job Type: {job.jobType}</p>
        <p>Location: {job.location}</p>
        <p>Experience: {job.experience} years</p>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div key={field.name}>
                  <label>{field.label}
                  {field.required && <span className="required-field red-star ">*</span>}</label>
                  {field.type === "file" ? (
              <div className="file-input">
                <label className="browse-button">
                  Browse
                  <input
                    type="file"
                    name={field.name}
                    accept=".pdf, .doc, .docx"
                    required={field.required}
                    onChange={handleFileSelect}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    ref={(input) => setFileInputRef(input)} 
                  />
                </label>
                {selectedFile && (
                  <div className="selected-file">
                    {selectedFile.name}
                    <button className="cancel-button" onClick={clearSelectedFile}>
                    <span className="cross-icon">X</span>
                    </button>
                  </div>
                )}
              </div>
                  ) : (
                    <input
                      type="text"
                      name={field.name}
                      required={field.required}
                      onChange={handleInputChange}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <button type="submit" >Apply Now </button>
              <button className="close_button" onClick={closePopup}>
              Close
            </button>
            </form>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Job_Description;
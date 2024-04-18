import React from 'react';
import '../styles/CompanyCard.css';
import logo from '../assets/images/HireXzo_Solutions_LLP_No_BG.png';

const CompanyCard = () => {
  return (
    <div className='CompnayCard-card'>
        <div className='CompnayCard-logo-container'>
           <img src={logo} className='logo' />
        </div>
        <div className='CompnayCard-company-name'>HIREXZO Solutions LLP</div>
        <div className='CompnayCard-gst-pan-container'>
            <div className='CompnayCard-content'>
                <div>GST :</div>
                <div>36AAQFH1987H1ZU</div>
            </div>
            <div className='CompnayCard-content'>
                <div>PAN : </div>
                <div>AAQFH1987H</div>
            </div>
        </div>
    </div>
  )
}

export default CompanyCard
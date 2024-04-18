import React, { useState } from 'react';
import {Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import "../styles/Refer/refer.scss"
import ReferCarousel from '../components/Refer/refer_carousel.jsx';
import ReferFaq from "../components/Refer/refer_faq.jsx";
import Referterms from '../components/Refer/refer-terms.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import referPhoto from "../assets/images/refer_photo.png";
import {
  faAngleUp
} from '@fortawesome/free-solid-svg-icons';
const Refer_earn = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
   <>
   <Navbar/>

   <div className="refer-and-earn-container">
      {/* Left Side Container */}
      <div className="refer-left-container">
        <h2 className='refer-tag'>Your <span className='bold'>Contacts</span>, Your <span  className='bold'>Gains</span> </h2>
        <p className='refer-line'>Invite your friends and earn rewards!</p>
        
        {/* Add your referral content here */}
        {/* <div className="referral-info">
          <p>Your referral link: <strong>https://example.com/referral</strong></p>
          <button>Copy Link</button>
        </div> */}
  <Link to="/course1">
         <button className="refer-now-button">Refer Now</button>
         </Link>

<div className='icon-container'>
                <FontAwesomeIcon className='upIcon' icon={faAngleUp } />
                <FontAwesomeIcon className='upIcon2' icon={faAngleUp } />
       </div>

       <div className="referral-info">
            <p>Your referral links:</p>
            <div className="copyable-links">
              <input type="text" value="https://www.hirexzo.com/course1" readOnly />
              <button  className="copybutton"onClick={() => copyToClipboard("https://www.hirexzo.com/course1")}>Copy</button>
            </div>
            <div className="copyable-links">
              <input type="text" value="https://www.hirexzo.com/course2" readOnly />
              <button className="copybutton" onClick={() => copyToClipboard("https://www.hirexzo.com/course2")}>Copy</button>
            </div>
            <div className="copyable-links">
              <input type="text" value="https://www.hirexzo.com/course3" readOnly />
              <button className="copybutton" onClick={() => copyToClipboard("https://www.hirexzo.com/course3")}>Copy</button>
            </div>
            <div className="copyable-links">
              <input type="text" value="https://www.hirexzo.com/course4" readOnly />
              <button  className="copybutton"onClick={() => copyToClipboard("https://www.hirexzo.com/course4")}>Copy</button>
            </div>
            {copied && <p className="copy-success">Link copied to clipboard!</p>}
          </div>
      </div>
     
     
       
      {/* Right Side Image */}
      <div className="refer-right-container">
        <img
          src={referPhoto}// Replace with your image URL
          alt="Refer and Earn"
          className="image"
        />
      </div>
    
         </div>
     <ReferCarousel />
     <Referterms/>
     <ReferFaq />
     
   </>
  )
}

export default Refer_earn

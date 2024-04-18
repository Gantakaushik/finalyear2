import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/merxpress.png";
// import Signup from "../pages/signup/Signup";
import { Outlet } from "react-router-dom";
// import HoverCard from "./HoverCard";
import profileLogo from '../assets/images/student.webp';
// import Complete_profile from "./Complete_profile";

import '../styles/navbar.css';

const Navbar = ({ openHover }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCoursesClicked, setCoursesClicked] = useState(false);
  const [isProfileNavOpen, setProfileNavOpen] = useState(false);
  const timerRef = useRef(null);

  const toggleNavTabs = () => {
    setNavOpen(!isNavOpen);
  };
  const handleProfileClick = () => {
    setProfileNavOpen(!isProfileNavOpen);
  };

  const closeProfileNav = () => {
    setProfileNavOpen(false);
  };
  const combinedClickHandler = () => {
    handleLinkClick();
    scrollToTop();
  };
 
  const closeNavTabs = () => {
    setNavOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openSignup = () => {
    setSignupOpen(true);
  };

  const closeSignup = () => {
    setSignupOpen(false);
  };

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  const handleCoursesHover = () => {
    if (isMobile && !isCoursesClicked) {
      setDropdownOpen(!isDropdownOpen);
    } else if (!isMobile) {
      setDropdownOpen(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };

  const handleCoursesClick = () => {
    if (isMobile) {
      setCoursesClicked(!isCoursesClicked);
      setDropdownOpen(!isDropdownOpen);
      window.scrollTo(0, 0);
    }
  };

  const handleCoursesHoverLeave = () => {
    if (!isMobile) {
      timerRef.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 10000);
      // window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <nav>
        <div className={`navbar container ${isNavOpen ? "open" : ""}`}>
          <div className="nav-left">
            <div className="nav-img ">
              <NavLink to={"/"} onClick={scrollToTop }>
                <img src={logo} alt="logo" />
              </NavLink>
              <span>
                <br />
                <strong></strong>
              </span>
            </div>
          </div>

          <div className={`nav-tabs ${isNavOpen ? "open" : ""}`}>
            {/* <button className="close-button" onClick={closeNavTabs}>
              &times;
            </button> */}
            <div className="learn-tab">
              <NavLink
                className="learn-tab-child"
              
                onMouseEnter={handleCoursesHover}
                onMouseLeave={handleCoursesHoverLeave}
                // onClick={handleCoursesClick}
              >
                <span className="tab-name">Courses</span>
                <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li>
                      <NavLink to="/course1" onClick={combinedClickHandler}>Core Python</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course2" onClick={combinedClickHandler}>Advanced Python</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course3" onClick={combinedClickHandler}>Machine Learning</NavLink>
                    </li>
                    <li>
                      <NavLink to="/course4" onClick={combinedClickHandler}>Deep Learning</NavLink>
                    </li>
                    
                  </ul>
                </div>
              </NavLink>
            </div>

            {/* <div className="practice-tab" >
              <NavLink to="/practice" onClick={combinedClickHandler}>
                <span className="tab-name">Practice</span>
              </NavLink>
            </div> */}

            <div className="jobs-tab">
              <NavLink to="/job-portal" onClick={combinedClickHandler}>
                <span className="tab-name">Opportunites</span>
              </NavLink>
            </div>

            <div className="compete-tab">
              <NavLink to="/contact-us" onClick={combinedClickHandler}>
                <span className="tab-name">Contact us</span>
              </NavLink>
            </div>

            <div className="refer-tab" >
              <NavLink to="/Refer" onClick={combinedClickHandler}>
                <span className="tab-name">Refer and Earn</span>
              </NavLink>
            </div>
            {/* <div className="web-login-button">
            <button className="btn host-btn" onClick={openSignup}>
              <span>Login</span>
            </button>
            </div> */}

            
          </div>

          {/* <div className="nav-btns">
            
              <Link to='/business' onClick={scrollToTop }>
                <button className="btn host-btn" >
                  <span>Business</span>
                </button>
              </Link>
            <div className="min-login">
            <button className="btn host-btn" onClick={openSignup}>
              <span>Login</span>
            </button>
            </div>
            <button className="btn profile-btn " onClick={handleProfileClick}>
              <img src={profileLogo} alt="Profile" />
            </button>
            <button className="menu-btn" onClick={toggleNavTabs}>
              <div className={`menu-icon ${isNavOpen ? "open" : ""}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </button>
          </div> */}
        </div>
        {/* <Signup isOpen={isSignupOpen} onClose={closeSignup} /> */}
      </nav>
      <div className={`profile-nav ${isProfileNavOpen ? "open" : ""}`}>
        <div className="profileHead"> <span id="heading"> Profile  </span>
            <button id="close" onClick={closeProfileNav}>X</button>
          </div>
          <hr id="black_line" />

          <div className="profile-info">
    <img src={profileLogo} alt="Profile Logo" className="profile-logo" />
    <div className="profile-details">
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-email">john.doe@example.com</p> 
      </div>
  </div>
   <div>  <NavLink to="/Completeprofile">
  <button className="complete-profile-button " onClick={closeProfileNav} >
    Complete Profile</button> 
    </NavLink></div> 
  </div>
    </>
  );
};

export default Navbar;
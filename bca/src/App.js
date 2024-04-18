// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { useState } from 'react';
// import "./styles/app.css";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Practice from "./pages/Practice";
// import JobPortal from "./pages/JobPortal";
// import MobileNav from "./components/MobileNav";
// import Signup from "./pages/signup/Signup";
// import NavHover from'./components/NavHover';
// import Courses from './pages/Courses';
// import BusinessHome from './pages/BusinessHome';
// import WhyUsHome from "./pages/WhyUsHome";
// import CollegesHome from "./pages/CollegesHome";


// function App() {
//   const [isHoverVisible, setHoverVisible] = useState(false);

//   const openHover = () => {
//     setHoverVisible(true);
//   };

//   const closeHover = () => {
//     setHoverVisible(false);
//   };


//   return (
//     <>
//     <Router>
//        <Navbar openHover={openHover} />
//       <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/Courses-list"
//           element={<NavHover/>}
//         />

// <Route
//   path="/business"
//   element={<BusinessHome/>}

// />

// <Route path="/why-us" element={<WhyUsHome/>}/>

//         <Route path='/courses' element={<Courses/>}/>

//         <Route path="/colleges" element={<CollegesHome/>} />

//         <Route
//           path="/practice"
//           element={<Practice />}
//         />
//         <Route
//           path="/job-portal"
//           element={<JobPortal />}
//         />
//       <Route path="/signup" element={<Signup/>} />
//       </Routes>
//       <MobileNav />

//       <Footer /> 
//       {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}

//     </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import React, { useState } from 'react';
import "./styles/Home/App.css";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Practice from "./pages/Practice";
// import MobileNav from "./components/MobileNav";
// import Signup from "./pages/signup/Signup";
// import NavHover from './components/NavHover';
import CorePython from "./pages/courses/CorePython";
import AdvancedPython from "./pages/courses/AdvancedPython.jsx";
import MachineLearning from "./pages/courses/MachineLearning.jsx";
import DeepLearning from "./pages/courses/DeepLearning.jsx";
import Jobs from "./pages/Jobs";
// // import Compete from './pages/Compete';
import Job_Description from './components/jobs/Job_Description.jsx';
import jobData from "./jobData.js";
// import Complete_profile from "./components/Complete_profile";
// import BusinessHome from "./pages/BusinessHome.jsx";
// import WhyUsHome from "./pages/WhyUsHome.jsx";
// import CollegesHome from "./pages/CollegesHome.jsx";
// import CommingSoonPage from "./pages/CommingSoonPage.jsx";
// import PricingPage from './pages/PricingPage.jsx';
// import BusinessNavbar from './components/BusinessNavbar.jsx'
import Contact from './pages/contact.jsx';
// import Mock1 from './components/mock1.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
// import Posted_jobs from "./components/Posted_jobs.jsx";
// import JobHunt from "../src/components/JobHunt.jsx";
import Refer_earn from "./pages/Refer_earn.jsx";
import Create from "./pages/AddJob/Create.jsx";
import Edit from "./pages/AddJob/Edit.jsx";
import Read from "./pages/AddJob/Read.jsx";

import Addjobhome from "./pages/AddJob/Home.jsx"
function App() {
  // const [isHoverVisible, setHoverVisible] = useState(false);

  // const openHover = () => {
  //   setHoverVisible(true);
  // };

  // const closeHover = () => {
  //   setHoverVisible(false);
  // };



  return (
    <>
      <Router>

        <Routes>

          <Route
            path="/"
            element={<Home  />}
          />
          {/*         
              <Route
                path="/Courses-list"
                element={<NavHover/>}
              /> */}

          <Route path='/course1' element={<CorePython />} />
          <Route path="/course2" element={<AdvancedPython  />} />
          <Route path="/course3" element={<MachineLearning  />} />
          <Route path="/course4" element={<DeepLearning  />} />
          {/* <Route path="/Mock1" element={<Mock1 />} />  */}
          {/* <Route
            path="/practice"
            element={<Practice openHover={openHover} />}
          /> */}
          <Route
            path="/job-portal" 
            element={<Jobs />}
          />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Refer" element={<Refer_earn  />} />
          <Route path="/add_job" element={<Addjobhome/>} />

          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/read/:id' element={<Read />} />
          {/* <Route
            path="/business"
            element={<BusinessHome openHover={openHover} />}

          /> */}
        {/* {/* //  <Route path="/Refer" element={<Refer_earn openHover={openHover} />} */}
          {/* <Route path="/why-us" element={<WhyUsHome openHover={openHover} />} /> */}

          {/* <Route path="/colleges" element={<CollegesHome openHover={openHover} />} /> */}
          {/* <Route path="/posted-jobs" element={<Posted_jobs openHover={openHover} />} /> */}
          {/* <Route path="/pricing-page" element={<PricingPage openHover={openHover} />} /> */}
          {/* <Route path="/Job_post" element={<JobHunt/>} /> */}


          <Route path="/jobs/:jobId" element={<Job_Description jobData={jobData}  />} />



          <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
          {/* <Route
                path="/compete"
                element={<Compete/>}
              /> */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/CompleteProfile" element={<Complete_profile openHover={openHover} />} /> */}



          {/* <Route path="/comming-soon" element={<CommingSoonPage openHover={openHover} />} /> */}
        </Routes>
        {/* <MobileNav /> */}

        <Footer />
        {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}

      </Router>
    </>
  );
}

export default App;

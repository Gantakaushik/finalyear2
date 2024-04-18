import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../styles/Home/ournumbers.css";
import  brandsLogo from '../../assets/images/student.webp';
import  countriesLogo from '../../assets/images/recruit.jpg';
import candidatesLogo from '../../assets/images/colege.png';





const OurNumbers = () => {
  const [brandsCount, setBrandsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [candidateCount, setCandidateCount] = useState(0);
  const targetBrandsCount = 25; // Set the target number for Brands
  const targetCountriesCount = 78; // Set the target number for Countries
  const targetCandidatesCount = 20;

  const brandsSpeed = 5; // Speed for Brands
  const countriesSpeed = 8; // Speed for Countries
  const candidatesSpeed = 5;

  // Create a ref for the section element to be observed
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true });

  // Function to increment the numbers
  const incrementBrandsCount = () => {
    if (brandsCount < targetBrandsCount) {
      setBrandsCount(brandsCount + brandsSpeed);
    }
  };
  const incrementCandidateCount = () => {
    if (candidateCount < targetCandidatesCount) {
      setCandidateCount(candidateCount + candidatesSpeed);
    }
  };

  const incrementCountriesCount = () => {
    if (countriesCount < targetCountriesCount) {
      setCountriesCount(countriesCount + countriesSpeed);
    }
  };

  useEffect(() => {
    if (sectionInView) {
      // Start both intervals when the section is in view
      const brandsInterval = setInterval(
        incrementBrandsCount,
        1000 / brandsSpeed
      );
      const countriesInterval = setInterval(
        incrementCountriesCount,
        1000 / countriesSpeed
      );
      const candidatesInterval = setInterval(
        incrementCandidateCount,
        1000 / candidatesSpeed
      );

      return () => {
        // Clear both intervals when the component unmounts or section is out of view
        clearInterval(brandsInterval);
        clearInterval(countriesInterval);
        clearInterval(candidatesInterval);
      };
    }
  }, [
    sectionInView,
    brandsCount,
    countriesCount,
    candidateCount,
    targetBrandsCount,
    targetCountriesCount,
    targetCandidatesCount,
    brandsSpeed,
    countriesSpeed,
    candidatesSpeed,
  ]);

  return (
    <section className="ournumbers" ref={sectionRef}>
      <div className="ournumbers-container container">
        <h2>
          Our
          <strong>Stats
</strong>
          {/* <img
            src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
            alt="increasing"
            loading="lazy"
          /> */}
        </h2>
        <div className="numbers-container">
          <div className="brands-box box-hover">
          <img src={brandsLogo} alt="Brands Logo" />
            <h3>{brandsCount} <span className="CAP">K</span>+</h3>
            <span className="our-num-span">Students</span>
          </div>
          <div className="countries-box box-hover">
          <img src={countriesLogo} alt="Countries Logo" />
            <h3>{countriesCount}+</h3>
            <span className="our-num-span">Recruiters</span>
          </div>
          <div className="CandidatesBox box-hover">
           <img src={candidatesLogo} alt="Candidates Logo" /> 
            <h3>{candidateCount}+</h3>
            <span className="our-num-span">Colleges</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
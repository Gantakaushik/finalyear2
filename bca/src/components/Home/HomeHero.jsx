import React from "react";
import "../../styles/Home/homehero.css";
import Typewriter from 'typewriter-effect';
// import image from '../assets/images/Onlin'
const HomeHero = () => {
  const images = [
    {
      title: "learn",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
      link: "https://unstop.com/courses",
    },
    {
      title: "practice",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
      link: "https://unstop.com/practice",
    },
    {
      title: "mentorships",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
      link: "https://unstop.com/mentor",
    },
    {
      title: "compete",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406",
      link: "https://unstop.com/compete",
    },
    {
      title: "jobs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406",
      link: "https://unstop.com/job-portal",
    },
    {
      title: "blogs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406",
      link: "https://unstop.com/blog",
    },
  ];
  
  return (
    <section className="home-hero">
      <div className="home-hero-container container">
        <div className="home-hero-left">
          <h1>
            <strong>
            Transforming Lives <br/>
            through Collaboration
            </strong>
            {/* Transforming Lives through Collaboration */}
          </h1>
          <p>
          <span className="type-write-span">
            <strong>
            <Typewriter
              options={{
                strings: ['Bridging Students, Universities, and Employers!'],
                autoStart: true,
                loop: true,
                
              }}
              />
              </strong>
              </span>
          </p>
        </div>
        <div className="home-hero-right-image">
          <div className="home-hero-right-images">
            <img className="home-hero-image" src=''></img>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

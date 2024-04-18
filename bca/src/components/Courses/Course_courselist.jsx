import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/Courses/Course_courselist.scss';
import CourseImg4 from '../../assets/images/Courses_images/Deep_learning.png';
import CourseImg2 from "../../assets/images/Courses_images/Advanced_python.png";
import CourseImg1 from "../../assets/images/Courses_images/Core_python.png";
import CourseImg3 from "../../assets/images/Courses_images/Machine_learning.png";



const Course_courselist = ({ currentCourseId }) => {

  const courses = [
    {
      id: 1,
      title: ' Core Python',
      description: 'Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | JQuery',
      rating: 4.5,
      hours: 10,
      imageUrl: CourseImg1,
    },
    {
      id: 2,
      title: 'Advanced Python',
      description: 'Create Elegant, Powerful Web and Mobile Applications Using AJAX.',
      rating: 4.0,
      hours: 12,
      imageUrl: CourseImg2,
    },
    {
      id: 3,
      title: 'Machine Learning',
      description: 'Professional Coding Skills for Beginners',
      rating: 4.5,
      hours: 10,
      imageUrl: CourseImg3,
    },
    {
      id: 4,
      title: 'Deep Learning',
      description: 'MySQL: Learn how to use MySQL and PHP to build Reports and work with Databases for Web Applications',
      rating: 4.0,
      hours: 12,
      imageUrl: CourseImg4,
    }
  
  ];
  const Courses = courses.filter(course => course.id !== currentCourseId);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="head"> More Courses by <span className='span-gradient'>HireXzo</span></div>
      <div className="course-list">
        {Courses.map(course => (
                   <Link to={`/course${course.id}`}  key={course.id} className="course-card" onClick={scrollToTop}>
            <img src={course.imageUrl} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <div className="rating">
                  Rating: {course.rating}
                </div>
                <div className="hours">
                  Hours: {course.hours}
                </div>
              </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Course_courselist;
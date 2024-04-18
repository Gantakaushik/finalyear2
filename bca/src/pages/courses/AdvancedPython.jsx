import React from 'react'
import course1 from "../../assets/images/c1.jpg";
// import HeroSection from '../components/Course_herosection';
import CourseHeroSection from '../../components/Courses/CourseHeroSection';
import Rating from "../../components/Courses/Course_Rating";
import Coursellist from '../../components/Courses/Course_courselist';
import CourseWhatYouWillLearn from "../../components/Courses/CourseWhatYouWillLearn";
import Faq from "../../components/Courses/Course_Faq";
import '../../styles/Courses/Courses.scss';
import CourseImg from "../../assets/images/Courses_images/Core_python.png";
import Navbar from '../../components/Navbar';


const courseData = {
  title: "Advanced Python",
  description: "Elevate your Python prowess in our Advanced Python course, exploring object-oriented mastery, advanced libraries, and real-world problem-solving to become a proficient Python developer.",
  rating: "4.5",
  studentsCount: "300+",
  language: "English",
  lecturesCount: "45+",
  image: course1,
  newCost: "7999",
  color: '#7E7BF7',
  oldCost: "14000",
  courseDetails: [
    "Object-Oriented Programming: Understanding and applying OOP principles.",
    "Advanced Libraries: Delving into libraries such as NumPy, Pandas, and more.",
    "Real-World Projects: Applying advanced concepts in practical scenarios.",
    // "No Pre-requisite Required",
    // "170+ hours On-Demand Video",
    // "400+ Coding Questions (asked by Top Companies)",
    // "Expert Sessions by Sr .SDE, StartUp Devs, VPs, Recruiters etc.",
    // "Live Resume & Interview Preparation",
    // "DSA - Extreme Beginner to Advanced with Doubt Assistance",
  ],
  whatYouWillLearn: [
     "In-depth knowledge of Python's advanced features.",
    "Expertise in data manipulation and analysis.",
    "Problem-solving skills through challenging projects.",
    "Ability to integrate Python with databases for data storage.",
    "Knowledge of decorators and generators for elegant code design",
    // "Lab Exercises",
    // "Lab Solution Sets",
    // "All Powerpoint Demonstrations Used in Course",
    // "Instructor contact Email for questions and clarifications",
    // "Coverage of all important primary Javascript concepts",
  ],
};

const contentData = [
  { question: 'NumPy', answer: 'Arrays Creation , Array Indexing , Slicing and Iterating in Arrays , Basic Arithmetic Operations on NumPy Arrays , Mathematical Functions in NumPy , Changing the Shape of an Array , Stacking and Splitting of Arrays' },
  { question: 'PANDAS', answer: 'Data Structures , Reshaping Data , Handling Missing Data , Combining Data , Transforming , Basic Plotting with PyPlot, Getting to Know Other Plot Types, Mastering Embellishments, Plotting with Pandas' },
];
const AdvancedPython = () => {
  return (
    <>
    <Navbar/>
    <div className='Courses'>
     <CourseHeroSection course={courseData} imageCourse={CourseImg}/>
     <CourseWhatYouWillLearn contentDatas={contentData}/>
     <Rating/>
     <Coursellist currentCourseId={2}/>
     <Faq/>
     </div>
    </>
  )
}

export default AdvancedPython
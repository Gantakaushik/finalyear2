import React from 'react'
import course1 from "../../assets/images/c1.jpg";
import CourseHeroSection from '../../components/Courses/CourseHeroSection';
import Rating from "../../components/Courses/Course_Rating";
import Coursellist from '../../components/Courses/Course_courselist';
import CourseWhatYouWillLearn from "../../components/Courses/CourseWhatYouWillLearn";
import Faq from "../../components/Courses/Course_Faq";
import '../../styles/Courses/Courses.scss';
import CourseImg from "../../assets/images/Courses_images/Core_python.png";
import Navbar from '../../components/Navbar';
// import "../styles/CorePython.scss";

const courseData = {
  title: " Core Python ",
  description: "Master the essentials with our Core Python course, where you'll dive into the fundamentals tackle hands-on projects, and build a robust foundation for coding excellence.",
  rating: "4.8",
  studentsCount: "300+",
  language: "English",
  lecturesCount: "45+",
  image: course1,
  newCost: "7999",
  oldCost: "14000",
   color: ' #535dc9',
  courseDetails: [
    "Fundamental Concepts: Covering basic syntax, data types, and control structures.",
    "Hands-on Projects: Engage in practical exercises to reinforce your learning.",
    "Building Blocks: Lay the foundation for building robust applications",

    // "No Pre-requisite Required",
    // "170+ hours On-Demand Video",
    // "400+ Coding Questions (asked by Top Companies)",
    // "Expert Sessions by Sr .SDE, StartUp Devs, VPs, Recruiters etc.",
    // "Live Resume & Interview Preparation",
    // "DSA - Extreme Beginner to Advanced with Doubt Assistance",
  ],
  whatYouWillLearn: [
    "Mastery of Python basics",
    "Proficiency in handling data structures.",
    "Ability to write efficient and clean code.",
    "Proficiency in applying algorithms and logical thinking to problem-solving.",
    "Basics of web scraping for data acquisition.",
    // "Lab Exercises",
    // "Lab Solution Sets",
    // "All Powerpoint Demonstrations Used in Course",
    // "Instructor contact Email for questions and clarifications",
    // "Coverage of all important primary Javascript concepts",
  ],
};

const contentData = [
  { question: 'Introduction to Python & its Features', answer: 'Learn to code in Python' },
  { question: 'Data types, Variables, Key words, Identifiers, Statements', answer: 'Understanding Pure Basics' },
  { question: 'Strings', answer: 'String slicing, String functions, String Methods, Formatting Strings' },
  { question: 'Lists', answer: 'List operations, List slicing, List methods, Nested List' },
  { question: 'Tuple', answer: 'Operations on Tuple , Tuple methods' },
  { question: 'Files', answer: 'Types of Files , Creating and Reading Text Data , File Methods to Read and Write Data , Reading and Writing Binary Files , The Pickle Module , Reading and Writing CSV Files , Working with EXCEL Files' },
  { question: 'JSON', answer: 'JavaScript Object Notation' },
];
const CorePython = () => {
  
  return (
    <>
    <Navbar/>
    <div className='Courses'>
     <CourseHeroSection course={courseData} imageCourse={CourseImg}  />
     <CourseWhatYouWillLearn contentDatas={contentData}/>
     <Rating/>
     <Coursellist currentCourseId={1} />
     <Faq/>
     </div>
    </>
  )
}

export default CorePython
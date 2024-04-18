import React from 'react'
import course1 from "../../assets/images/c1.jpg";
// import HeroSection from '../components/Course_herosection';
import CourseHeroSection from '../../components/Courses/CourseHeroSection';
import Rating from "../../components/Courses/Course_Rating";
import Coursellist from '../../components/Courses/Course_courselist';
import CourseWhatYouWillLearn from "../../components/Courses/CourseWhatYouWillLearn";
import Faq from "../../components/Courses/Course_Faq";
import '../../styles/Courses/Courses.scss';
// import CourseImg from "../../assets/images/Courses_images/Core_python.png";
import Navbar from '../../components/Navbar';
import CourseImg from "../../assets/images/Courses_images/Machine_learning.png";

const courseData = {
  title: " Machine Learning",
  description: "Unlock the power of data with our Machine Learning course, where you'll grasp foundational concepts, apply techniques in real-world scenarios, and emerge ready to shape the future of data-driven decision-making.",
  rating: "4.7",
  studentsCount: "300+",
  language: "English",
  lecturesCount: "45+",
  image: course1,
  newCost: "7999",
  color: '#AB63CF',
  oldCost: "14000",
  courseDetails: [
    "Principles of Machine Learning: Understanding core concepts and algorithms.",
    " Hands-On Applications: Implement machine learning in practical scenarios, solving real-world problems.",
    "Project-based Learning: Developing a machine learning project from start to finish.",


    // "No Pre-requisite Required",
    // "170+ hours On-Demand Video",
    // "400+ Coding Questions (asked by Top Companies)",
    // "Expert Sessions by Sr .SDE, StartUp Devs, VPs, Recruiters etc.",
    // "Live Resume & Interview Preparation",
    // "DSA - Extreme Beginner to Advanced with Doubt Assistance",
  ],
  whatYouWillLearn: [
     "Solid understanding of machine learning principles.",
    "Ability to implement machine learning algorithms.",
    "Practical experience in solving data-driven problems.",
    "Practical Applications: Applying machine learning to real-world scenarios.",
    "Introduction to neural networks and their applications.",
    // "Complete Code demonstrated in lecture",
    // "Lab Exercises",
    // "Lab Solution Sets",
    // "All Powerpoint Demonstrations Used in Course",
    // "Instructor contact Email for questions and clarifications",
    // "Coverage of all important primary Javascript concepts",
  ],
};

const contentData = [
  { question: 'Introduction', answer: '' },
  { question: 'Real World Applications of Machine Learning', answer: '' },
  { question: 'Supervised & Unsupervised Learning', answer: '' },
  { question: 'Decision Tree', answer: 'List operations, List slicing, List methods, Nested List' },
  { question: 'K – Nearest Neighbours', answer: 'Inductive Bias , Cluster , Hyper Parameter' },
  { question: 'Decision Boundaries', answer: '' },
  { question: 'Perceptron Algorithm', answer: 'Understanding & Intializing Weights , Margin , Limitations' },
  { question: 'Support Vector Machines', answer: '' },
  { question: 'Naïve Bayes Theorem', answer: '' },
  { question: 'Multi Layer Neural Network', answer: '' },
  { question: 'Kernels', answer: '' },
  { question: 'Back Propogation Algorithm', answer: '' },
  { question: 'Types Of Classifiers', answer: '' },
  { question: 'Types Of Clustering', answer: 'Density Based Clustering , K - Means Clustering' },
];
const MachineLearning = () => {
  return (
    <>
    <Navbar/>
    <div className='Courses'>
     <CourseHeroSection course={courseData} imageCourse={CourseImg} />
     <CourseWhatYouWillLearn contentDatas={contentData}/>
     <Rating/>
     <Coursellist currentCourseId={3}/>
     <Faq/>
     </div>
    </>
  )
}

export default MachineLearning
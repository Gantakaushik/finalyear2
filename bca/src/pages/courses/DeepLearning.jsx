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
// import "../styles/DeepLearning.scss";
import CourseImg from "../../assets/images/Courses_images/Deep_learning.png";

const courseData = {
  title: " Deep Learning",
  description: "Dive into the future of AI with our Deep Learning course, delving into neural networks, specialized architectures, and advanced projects to propel your expertise into cutting-edge developments.",
  rating: "4.9",
  studentsCount: "300+",
  language: "English",
  lecturesCount: "45+",
  image: course1,
  newCost: "7999",
  oldCost: "14000",
  color: '#DE5687',
  courseDetails: [
     "Neural Networks: Exploring architectures and principles.",
    "Deep Learning Applications: Understanding real-world applications.",
    "Advanced Projects: Engaging in hands-on projects to deepen understanding.",
    // "No Pre-requisite Required",
    // "170+ hours On-Demand Video",
    // "400+ Coding Questions (asked by Top Companies)",
    // "Expert Sessions by Sr .SDE, StartUp Devs, VPs, Recruiters etc.",
    // "Live Resume & Interview Preparation",
    // "DSA - Extreme Beginner to Advanced with Doubt Assistance",
  ],
  whatYouWillLearn: [
    "Mastery of deep neural architectures.",
    "Application of deep learning in various domains.",
    "Ability to contribute to cutting-edge developments in AI.",
    "Understanding of specialized architectures such as CNNs and RNNs.",
    "Exploration of advanced topics like GANs and Autoencoders..",
    // "Lab Exercises",
    // "Lab Solution Sets",
    // "All Powerpoint Demonstrations Used in Course",
    // "Instructor contact Email for questions and clarifications",
    // "Coverage of all important primary Javascript concepts",
  ],
};

const contentData = [
  { question: 'History/Introduction', answer: '' },
  { question: 'Neural Networks', answer: 'Single Layer , Multi Layer' },

  { question: 'Back Propagation Algorithm', answer: '' },

  { question: 'Underfitting & Overfitting', answer: '' },

  { question: 'Convolutional Neural Network (CNN)', answer: 'Dense Layers' },

  { question: 'Tensors', answer: '0-D Tensors , 1-D Tensors , 2-D Tensors , 3-D Tensors , Manipulating Tensors in Numpy' },

  { question: 'Tensor operations', answer: 'Element-wise operations , Broadcasting , Tensor dot' },

  
];
const DeepLearning = () => {
  return (
    <>
    <Navbar/>
    <div className='Courses'>
     <CourseHeroSection course={courseData} imageCourse={CourseImg} />
     <CourseWhatYouWillLearn contentDatas={contentData}/>
     <Rating/>
     <Coursellist currentCourseId={4}/>
     <Faq/>
     </div>
    </>
  )
}

export default DeepLearning
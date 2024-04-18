import React, { useState, useRef, useEffect } from "react";
import "../../styles/Courses/Course_Faq.scss";
import { FiPlus } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Can I customize a package to suit my organization's unique needs?",
    answer:
      "Absolutely! We understand that each organization has unique requirements. Our business solutions are highly customizable, and our team will work closely with you to create a package that aligns with your specific needs and objectives.",
  },
  {
    id: 2,
    question: "Is there a limit to the number of participants in events or challenges?",
    answer:
      "The participant limit can vary based on the specific package you choose. We offer scalability to accommodate both small and large-scale events.",
  },
  {
    id: 3,
    question: "What types of business solutions does HireXzo offer?",
    answer: "HireXzo offers a range of business solutions, including customizable packages for Hackathons, Ideathons, Online Events, Hiring Challenges, Scholarships, and Quizzes, designed to meet the diverse needs of organizations. They can also be costomized",
  },
  {
    id: 4,
    question: "Can I upgrade my business plan as our needs change?",
    answer: "Yes, we understand that business needs to evolve. You can easily upgrade your business plan to better align with your organization's changing requirements. Our team is here to assist with any modifications.",
  },
  {
    id: 5,
    question: "Can we get a demo of the business solutions before making a commitment?",
    answer: "Certainly! We offer personalized demos of our business solutions to give you a firsthand look at the features and functionalities. Contact our sales team at support@hirexzo.com to schedule a demo tailored to your organization's needs.",
  },
  {
    id: 6,
    question: "How to reach the sales team? What is the typical response time for support inquiries?",
    answer: "We strive to provide prompt support. Our typical response time is within 24 hours for standard inquiries. For urgent matters, we offer expedited support with quicker response times. For support email us at sales@hirexzo.com",
  },
];

const initializeContentRefs = () => {
  return faqData.map(() => useRef(null));
};

export default function App() {
  const [activeItems, setActiveItems] = useState({});
  const contentRefs = initializeContentRefs();

  useEffect(() => {
    faqData.forEach((item, index) => {
      contentRefs[index].current.style.maxHeight = activeItems[index]
        ? `${contentRefs[index].current.scrollHeight}px`
        : "0px";
    });
  }, [activeItems]);

  const toggleAccordion = (index) => {
    setActiveItems((prevActiveItems) => {
      const newActiveItems = { ...prevActiveItems };
      newActiveItems[index] = !prevActiveItems[index];
      return newActiveItems;
    });
  };

  return (

      <div className="question-App">
      <p>Frequently Asked Questions</p>
        <div className="question-container">
          {faqData.map((item, index) => (
            <button
              key={item.id}
              className={`question-section ${activeItems[index]}`}
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <div className="question-align">
                  <h4 className="question-style">{item.question}</h4>
                  <FiPlus
                    className={
                      activeItems[index] ? `question-icon rotate` : `question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRefs[index]}
                  className={
                    activeItems[index] ? `answer answer-divider` : `answer`
                  }
                >
                  <p className="question-App-answer-p">{item.answer}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

  );
}














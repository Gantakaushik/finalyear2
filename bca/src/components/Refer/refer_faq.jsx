import React, { useState, useRef, useEffect } from "react";
import "../../styles/Refer/PricingFaq.css";
import "../../styles/Refer/refer_faq.scss";
import { FiPlus } from "react-icons/fi";
// import  "../styles/refer_faq.scss";
const faqData = [
  {
    id: 1,
    question: "How does the Refer and Earn program work?",
    answer:
      "Simply refer someone to our platform using your unique referral link. When they sign up or make a purchase, you earn rewards..",
  },
  {
    id: 2,
    question: "Is there a limit to how many people I can refer?",
    answer:
      "No, there is usually no limit. Refer as many people as you like and earn rewards for each successful referral..",
  },
  {
    id: 3,
    question: "What rewards can I earn through the program?",
    answer: "The rewards may vary, but typically include discounts, cashback, or other incentives. Check the program details for specific rewards.",
  },
  {
    id: 4,
    question: "Can I redeem my rewards for cash?",
    answer: "Check the terms and conditions. In some cases, rewards may be redeemable for cash or used towards future purchases..",
  },
  {
    id: 5,
    question: "What should I do if my referral link is not working?",
    answer: "Contact our customer support, and we'll assist you in resolving the issue.",
  },
  {
    id: 6,
    question: "I referred someone, but my account hasn't been credited. What should I do?",
    answer: "Give it some time, as there might be a delay. If the issue persists, contact customer support with details.",
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

      <div className="refer-question-App">
      <p>Frequently Asked Questions</p>
        <div className="refer-question-container">
          {faqData.map((item, index) => (
            <button
              key={item.id}
              className={`refer-question-section ${activeItems[index]}`}
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <div className="refer-question-align">
                  <h4 className="refer-question-style">{item.question}</h4>
                  <FiPlus
                    className={
                      activeItems[index] ? `refer-question-icon rotate` : `refer-question-icon`
                    }
                  />
                </div>
                <div
                  ref={contentRefs[index]}
                  className={
                    activeItems[index] ? `refer-answer refer-answer-divider` : `refer-answer`
                  }
                >
                  <p className="refer-question-App-answer-p">{item.answer}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

  );
}














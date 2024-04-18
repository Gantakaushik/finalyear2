import React ,  { useState } from 'react'
import '../../styles/Courses/Course_Faq.scss';
const Course_Faq = () => {
    const [faqs] = useState([
        { question: 'How do I enroll in a course at HireXzo?', answer: 'To enroll in a course, simply visit the course page and click on the "Enroll Now" button. Follow the prompts to create an account if you dont have one, and complete the enrollment process.' },
        { question: 'Can I access the course materials after completing the program?', answer: 'NO, you will Not have  access to the course materials after completing the program. You can Learn From the live Classes Only! ' },
        { question: 'Are there any prerequisites for the courses?', answer: 'Each course has its own set of prerequisites, which are outlined on the course page. Generally, prerequisites are designed to ensure participants have a foundational understanding of relevant concepts before diving into more advanced topics.' },
        { question: ' Is there tutor support available?', answer: 'Yes, our courses come with varying levels of tutor support. You can Get More Information about This In live Classes.' },
        { question: 'Can I receive a certificate upon course completion?', answer: 'Yes, upon successful completion of a course, you will receive a certificate. This certificate can be a valuable addition to your professional profile, showcasing your newly acquired skills and knowledge.' },
        { question: 'What payment options are available?', answer: 'We offer various payment options, including credit/debit cards, NetBanking , UPI and other secure online payment methods. For specific payment-related queries, feel free to contact our support team at Support@Hirexzo.com .' },
        // Add more FAQ items here
      ]);
  return (
    <>
    <div className='faqcontainer'>
 
       <h1>FREQUENTLY ASKED QUESTIONS</h1>
       <div>
         {faqs.map((faq, index) => (
           <div key={index} className='combine'>
             <button className="faq-question">{faq.question}</button>
             <div className="faq-answer">{faq.answer}</div>
           </div>
         ))}
       </div>
     </div>
     </>
  )
}

export default Course_Faq
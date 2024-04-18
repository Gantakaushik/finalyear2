import React, { useState } from 'react';
import '../../styles/Courses/CourseWhatYouWillLearn.scss';
import {BsCheck2Circle} from 'react-icons/bs';

const CourseWhatYouWillLearn = ({contentDatas}) => {
  
  return (
    <div className='cwywl-faqcontainer'>
      <h1>Course Content</h1>
      <div>
        {contentDatas.map((contentData, index) => (
          <div key={index} className='combine'>
            <button className="faq-question">{contentData.question}</button>
            <div className="faq-answer">
              {contentData.answer.split(', ').map((part, partIndex) => (
                <div key={partIndex} style={{'marginBottom':"10px"}}><BsCheck2Circle className='green-span'/> {part}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseWhatYouWillLearn;

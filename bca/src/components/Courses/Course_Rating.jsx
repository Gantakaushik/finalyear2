import React, { useState } from 'react';
import { AiFillStar, AiOutlineLike } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import userimage from "../../assets/images/images.png";
import"../../styles/Courses/Course_Rating.scss";

// import"../styles/Course_Rating.scss";

const Course_Rating = () => {
    const [likedReviews, setLikedReviews] = useState([]);

    // Function to handle like button click
    const handleLikeClick = (index) => {
      if (!likedReviews.includes(index)) {
        setLikedReviews([...likedReviews, index]);
      } else {
        setLikedReviews(likedReviews.filter((item) => item !== index));
      }
    };
  return (
    <>
    <div className="course-review-section">
      <h2><AiFillStar /> 4.4 course rating <RxDotFilled/>2K+ ratings</h2>
      <div className="course-review-section-container">
        {reviewsData.map((review, index) => (
          <div className="course-review-container" key={index}>
            <div className='rev-img rounde-image'><img src={userimage} alt="" /></div>
            <div className="name-star">
              <div className="name">{review.name}</div>
              <div className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className="updated">{review.updated}</div>
            <div className="like">
            <button
              className={`like-button ${likedReviews.includes(index) ? 'liked' : ''}`}
              onClick={() => handleLikeClick(index)}
            >
              <AiOutlineLike /> Like
            </button> </div>
            <div className="comment">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

const reviewsData = [
    {
      name: "Adarsh T.",
      updated: "3 Days ago",
      comment: "Easy to understand",
    },
    {
      name: "Kaushik D",
      updated: "2 Days ago",
      comment: "It was a great learning",
    },
    {
      name: "Srinivas.",
      updated: "4 Days ago",
      comment: "very good",
    },
    {
      name: "Jhanvi Yadav.",
      updated: "1 Day ago",
      comment: "Just Like a Wow",
    },
  ];

export default Course_Rating
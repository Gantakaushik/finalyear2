import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../styles/Refer/refer_carousel.scss';
import '../../styles/Refer/refer_carousel.scss';
import url1 from "../../assets/images/refer/airpods-gen-icon.webp"
import url2 from "../../assets/images/refer/apple-watch-icon.webp"
import url3 from "../../assets/images/refer/iphone-icon.webp"
import url4 from "../../assets/images/refer/macbook-air-icon.webp"
import url5 from "../../assets/images/refer/refer-image.webp"


const products = [
  { id: 1, title: 'Airpods', imageUrl: url1  },
  { id: 2, title: 'Apple Watch SE', imageUrl: url2 },
  { id: 3, title: 'Iphone 14 pro', imageUrl: url3  },
  { id: 4, title: 'Mac Book Air m1', imageUrl: url4 },
  { id: 5, title: 'Cash Rewards', imageUrl: url5 },
  { id: 6, title: 'Airpods', imageUrl: url1 },
  { id: 7, title: 'Apple Watch SE', imageUrl: url2 },
  { id: 8, title: 'Iphone 14 pro', imageUrl: url3},
  { id: 9, title: 'Mac Book Air m1', imageUrl: url4 },
  { id: 10, title: 'Cash Rewards', imageUrl: url5 },

];
const refer_carousel = () => {
  const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true, // Add this line
  autoplaySpeed: 1000, 
  arrows: false, /// Adjust the speed as needed

  responsive: [
    {
      breakpoint: 600, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };
  
  return (
   <>
   <div className="refer-carousel-container">
   <h1 className="carousel-heading">Rewards</h1>
        <p className="carousel-tagline">
Unlock cash and amazing rewards simply by referring our platform to your friends!</p>
<Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={{  margin: '0 5px' }}>
            <div className="product-card">
              <h2>{product.title}</h2>
              <img src={product.imageUrl} alt={product.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
   
   </>
  )
}

export default refer_carousel

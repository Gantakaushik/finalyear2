import React from 'react';
import GetHired from "../components/Home/GetHired";
import HomeHero from "../components/Home/HomeHero";
import OurNumbers from "../components/Home/OurNumbers";
import SlidingBrands from "../components/Home/SlidingBrands";
import FeaturedOpp from '../components/Home/FeaturedOpp';
import Showcase from '../components/Home/Showcase';
import '../styles/Home/home.css';
import Navbar from '../components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LPM from '../components/Home/LPM';

const Home = ({openHover}) => {
   // const [isHoverVisible, setHoverVisible] = useState(false);

  // const openHover = () => {
  //   setHoverVisible(true);
  // };

  // const closeHover = () => {
  //   setHoverVisible(false);
  // };
  return (
    
    <div style={{"display":'flex' ,"flexDirection":"column"}}>
        

        <Navbar openHover={openHover} />
        <div className="Home">
          {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}
          {/* <Navbar openHover={openHover} />- */}
          <HomeHero />
        </div>
     <SlidingBrands/>
       
     <GetHired />
       
        
        <FeaturedOpp type={"home"} />
        
        
        <Showcase type={"home"} />
       
        
        <LPM />
        <OurNumbers />
      
    </div>
  );
};

export default Home;
import React from 'react';
// import BusinessNavbar from './BusinessNavbar';
import Navbar from '../components/Navbar';
import { FaRegHandshake } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import "../styles/contact.css";

function contact() {
    return (
        <div>
            {/* <BusinessNavbar/> */}
            <Navbar/>
            <div className="contact-div">
                <div className='div-lef'>
                    <h1 className="fa "> <span><FaRegHandshake /></span><b>_Let’s get in touch</b></h1>
                    <p>
                        Talk to a member of our sales team to schedule a demo, pick the best plan for your team,
                         or learn more about everything HireXzo has to offer.
                    </p>
<br />
                    <h1 className="fa fa-cart-plus"><span><FaCartArrowDown /></span><b> _Sales Inquiries</b></h1>
                    <div> <span>   +91 77991 12167  (India) / sales@hirexzo.com     </span> </div>
<br />
                    <h1 className="	fa fa-comments" > <span><IoChatbubblesSharp /></span><b>_Support</b></h1>

                    <p>Please fill in the form to get in touch over team</p>

                    (Sales/ Support / Partnership)
<br />
                    <br />
                    <h1 className="fa fa-envelope" ><span><IoMdMail /></span><b>_Email</b></h1> 
                    <div>
                        <span className='emaild' >
                            support@hirexzo.com
                        </span><br />


                    </div> <br />
                    <h1 className="fa fa-home"><span><FaHome /></span><b>_Address</b></h1>
                    <div>
                <p>HIREXZO SOLUTIONS LLP-  8-57 Balaji Nagar Mallapur, <br /> Balapur, Hyderabad, Telangana, PIN: 500005</p>    

                    </div>
                </div>


                <div className='div-rit  '>

                    <h3 className='fa fa-comments contact-form '> <span><IoChatbubblesSharp /></span>_Contact Form</h3> <br /><br />

                    <form  action="">

                        <label className='label-text' for="fname">Email</label>
                        <input type="text" id="Email" name="Email" placeholder="Your Email.." />

                        <label className='label-text' for="Phone">Phone Number</label>
                        <input type="text" id="Phone" name="Phone" placeholder="Your Phone Number.." />

                        <label className='label-text' for="country">How can we help you?</label>
                        <select id="country" name="country">
                        <option className='option' value="australia"> Select</option>
                            <option className='option' value="australia"> Chat with sales</option>
                            <option className='option' value="canada">Submit with media quiry</option>
                            <option className='option' value="usa">Get support with my subscription</option>
                        </select>
                        <br /> <br />
                        <label className='label-text' for="subject">Subject</label>
                        <input type="text" id="messege" name="messege" placeholder="Tell Us About Your Reqirement.." />
                        <input className='botn' type="submit" value="Submit" />
                    </form>



                </div>
            </div>

        <div className="news-section">
        <div className="newslater">
            <h1 className='nl'>NEWSLETTER</h1>
            <p className='pn'>keep up our latest news and elements. subscribe our newslatter</p>
            <div className="inp">
                <input id='emi' type="text" placeholder='Email Address..'/>
                <input className='botni' type="submit" value="Subscribe" />
            </div>
            
        </div>
        </div>


        </div>
    )
}

export default contact
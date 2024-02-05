// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import weblogo from './weblogo (1).png';
import locimg from './icons8-location-50 (1).png';
import emailimg from './icons8-email-50.png';
import phoneimg from './icons8-phone-50.png';
import fimg from './icons8-f-50 (1).png';
import linkimg from './icons8-in-50 (1).png';
import globimg from './icons8-globe-50.png';
import cimg from './icons8-c-24.png';
import clutch from './clutchimg.png';
import gurur from './gurur.png';
import agency from './agencyimg.png'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className='logocontainer'>
            <div>
              <img src={weblogo} alt="" className="weblogo" />
            </div>
            <span
              style={{ fontSize: "20px", color: "white", paddingLeft: "12px" }}
            >
              Webestic
            </span>
          </div>
         <div className='imagecontainer'>
         <div>
            <img src={locimg} alt="" className="locimg" />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div>
            <img src={emailimg} alt="" className="locimg" />
            <span>admin@webistic.com</span>
          </div>
          <div>
            <img src={phoneimg} alt="" className="locimg" />
            <span>sales Enquiry:+91 XXXXXXXXXX</span>
            <br></br>
            <span style={{ fontSize: "16px", color: "white",paddingLeft:'37px' }}>Talent Acquisition:+91 XXXXXXXXXX</span>
          </div>
         </div>


          <div className='imgcotainer'>
          <span>
            <img src={fimg} alt="" className="img1" />
          </span>
          <span>
            <img src={linkimg} alt="" className="img1" />
          </span>
          <span>
            <img src={globimg} alt="" className="img1" />
          </span>
          </div>

          <div style={{marginTop:'30px'}}>
            <img src={cimg} alt="" className="locimg" style={{height:'15px',width:'15px'}} />
            2023 Webistic
          </div>
        </div>
        <div className="col-md-3">
          <div className='lastimgcontainer'>
            <div className='clutch1'>
            <img src={clutch} alt="" className="clutch1" style={{height:'80px',width:'90px', paddingTop:'20px'}} />
            </div>
            <div className='gurur1'>
            <img src={gurur} alt="" className="gurur1" style={{height:'80px',width:'100px',paddingTop:'10px'}} />
            </div>
          </div>
          <div>
            <h3 className="mt-5 mb-4">Consulting</h3>
            <div className='text'>
            <p>Product Design</p>
            <p>Data Science</p>
            <p>Cyber Security</p>
            <p>Staff Augmentation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <div className='imgagency'>
            <img src={agency} alt="" className="imgagency"/>
            </div>
            <div className='lasttext'>
              <p>Contact Us</p>
              <p>Portfolio</p>
              <p>Services</p>
              <p>Career</p>
              <p>Terms & Condition</p>
              <p> Privacy Policy</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

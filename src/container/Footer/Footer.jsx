import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';
import './Footer.css';


import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay   />
    <Newsletter />
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>Residency No.-1486, Sec-46, Gurgaon, 122001</p>
      <p className='p__opensans'>Phone No. : +91-7827307872</p>
      <p className='p__opensans'>E-mail: Viveksaboo39@gmail.com</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src ={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>"The best way to find yourself is to be lose yourself in the service of others."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:"15px"}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday: </p>
        <p className='p__opensans'>10:00Am - 06:30Pm</p>
        <p className='p__opensans'>Saturday-Sunday: </p>
        <p className='p__opensans'>09:30Pm - 06:00Am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights Reserved.</p>
    </div>
    
  </div>
);

export default Footer;

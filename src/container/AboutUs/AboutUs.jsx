import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

// Facing an issue the About us div is not rendering on left side check it

const AboutUs = () => (
  <div className='app__aboutus app__bg  flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt ="about__spoon" className='spoon__img' />
        <p className='p__opensans'>Our journey starts on 09-Dec-2023,Where I've built one of the finest restaurant in the world. Our only motive is Nobody should sleep in hunger</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about__knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt ="about__spoon" className='spoon__img' />
        <p className='p__opensans'>Our journey has just started we're highly motivated by the response of you guys, We're always open to any suggestions. We're here to learn and grow. This is our first time experience in restaurant department</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

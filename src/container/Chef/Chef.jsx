import React from 'react';

import { images } from "../../constants"
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Being a chef is never like a job, it becomes a true passion.</p>
        </div>
        <p className='p__opensans'>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>

      </div>
      <div className='app__chef-sign'>
        <p>Vivek Saboo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='Sign'></img>
      </div>
    </div>
  </div>
);

export default Chef;

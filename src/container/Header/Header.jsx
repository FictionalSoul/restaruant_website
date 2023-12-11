import React from 'react';
import { images } from "../../constants";

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      {/* Double Click something then press ctrl+ space to directly import something/components from another ifle or folder */}
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>The most wonderful restaurant out here in india. Our secret ingredient is Love ❤️ & Care. We hope you'll visit us again soon</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' />
    </div>
  </div>
);

export default Header;

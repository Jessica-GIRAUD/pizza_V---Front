import React from 'react';
import Arrows from './Arrows';
import Actus from './Actus';
import '../../styles/accueil.css';
import Slogan from './Slogan';

const Hero = () => {
  return (
    <div id='accueil' className='background'>
      <Actus />
      <Slogan />
      <Arrows />
    </div>
  );
};

export default Hero;

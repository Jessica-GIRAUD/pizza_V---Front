import React from 'react';
import HeaderNavbar from './hero/HeaderNavbar';
import Pizzas from './pizzas/Pizzas';
import Hero from './hero/Hero';

import ScrollArrow from '../../component/ScrollArrow.tsx';
import Contact from './contact/Contact';
import Footer from './contact/Footer';

const HomePage = () => {
  return (
    <div>
      <HeaderNavbar />
      <Hero />
      <Pizzas />
      <Contact />
      <Footer />
      <ScrollArrow />
    </div>
  );
};

export default HomePage;

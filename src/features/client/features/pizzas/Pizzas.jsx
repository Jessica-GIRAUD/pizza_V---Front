import React from 'react';
import Creme from './Creme';

import strings from '../../utils/title.json';
import '../../styles/pizzas.css';
import Tomato from './Tomate';
import Originale from './Originale';
import useAuth from '../../../admin/hooks/useAuth';

const Pizzas = () => {
  const { pizzas } = useAuth();
  return (
    <section
      className={pizzas?.length === 0 ? 'pizzas-page no-data' : 'pizzas-page'}
      id='pizzas'
    >
      <h1> {strings.discoverTitle}</h1>
      <p>
        Nos pizzas sont réalisées avec une pate 100% fait maison. <br /> Tous
        nos produits sont issus de producteurs français et pour la plupart,
        locaux.
      </p>
      <Creme />
      <Tomato />
      <Originale />
    </section>
  );
};

export default Pizzas;

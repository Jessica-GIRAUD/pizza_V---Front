import React from 'react';
import useAuth from '../../../admin/hooks/useAuth';

const Slogan = () => {
  const { contact, format } = useAuth();

  return (
    <div className='slogan'>
      <h1>Prenez un moment pour </h1>
      <h4>Commandez vite vos pizzas cuites au feu de bois</h4>
      <a href={`tel:+33${contact?.phone}`}>{format(contact?.phone)}</a>
    </div>
  );
};

export default Slogan;

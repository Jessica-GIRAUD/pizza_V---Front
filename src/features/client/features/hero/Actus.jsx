import React from 'react';
import useAuth from '../../../admin/hooks/useAuth';
import Spinner from '../../../component/Spinner.tsx';
import '../../styles/accueil.css';

const Actus = () => {
  const { actus, isLoading } = useAuth();

  return (
    <div className='position bandeau'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='actu'>
          {actus?.map((actu, index) => {
            const { description, name } = actu;
            return (
              <div className='actu_titre' key={index}>
                <span style={{ color: '#ff6233', paddingRight: '20px' }}>
                  {name?.toUpperCase()}
                </span>
                {description}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Actus;

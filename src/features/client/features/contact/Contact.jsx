import React, { useEffect, useRef } from 'react';
import '../../styles/contact.css';
import useAuth from '../../../admin/hooks/useAuth';
import Spinner from '../../../component/Spinner.tsx';
import { FiPhoneCall } from 'react-icons/fi';
import strings from '../../utils/title.json';
import gsap from 'gsap';
import Error from '../error/Error';

const Contact = () => {
  const { contact, format, isLoading, pizzas } = useAuth();
  const titleRefContact = useRef();

  // animation title
  useEffect(() => {
    if (!isLoading && pizzas.length > 0) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: titleRefContact.current,
            start: '20px bottom',
            end: '20% 30%',
            scrub: 1,
            // markers: true,
          },
        })
        .fromTo(
          titleRefContact.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
          }
        );
    }
  }, [isLoading, pizzas]);

  return (
    <section className='container-contact' id='contact'>
      <h1 ref={titleRefContact}>{strings.contactTitle}</h1>

      {isLoading ? (
        <Spinner spinner={true} />
      ) : pizzas?.length > 0 ? (
        <div className='container-horaire-adresse'>
          <div className='horaire-adresse'>
            <div className='horaire'>
              <h4>Horaires d'ouverture</h4>
              {contact?.horaires?.map((horaire, index) => {
                return (
                  <div style={{ display: 'flex', width: '300px' }} key={index}>
                    <p>{horaire.jour}</p>
                    <p>{horaire.horaire}</p>
                  </div>
                );
              })}
            </div>

            <div className='adresse'>
              <h4>Adresse</h4>
              <a
                href={`http://maps.google.com/?daddr=${contact?.address
                  ?.split(' ')
                  ?.join('+')}+${contact?.post_code}+${contact?.city}+FRANCE`}
                target='_blank'
                rel='noreferrer'
              >
                <p className='adresse-text'>
                  {contact?.address ? contact?.address : ''} <br />
                  {`${contact?.post_code ? contact?.post_code : ''} ${
                    contact?.city ? contact?.city : ''
                  }`}
                </p>
              </a>
              <a href={`tel:+33${contact?.phone}`}>
                <div className='tel-container'>
                  <h4>Commandez vite au</h4>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      paddingBottom: 0,
                    }}
                  >
                    <FiPhoneCall color='#ffffffe1' fontSize={20} />

                    <p>{format(contact?.phone)}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Error errorType='contact' />
      )}
    </section>
  );
};

export default Contact;

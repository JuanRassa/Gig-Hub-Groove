import React, { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import cymaticTrendy3 from './../../assets/cymaticSpin3.png';
import './Popup.css';

export const Popup = () => {
  const {
    isPopupOpenCtx: [isPopupOpen],
    popupMessageCtx: [popupMessage],
  } = useContext(LoginContext);

  return (
    <>
      {isPopupOpen ? (
        <div className='Popup'>
          <div className='Popup_wrapper'>
            <p>
              {popupMessage}
              <img src={cymaticTrendy3} alt='cymatics' />
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

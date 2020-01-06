import React from 'react';
import logoIBM from '../../img/IBM-logo-black.png';
import logoIG from '../../img/IG-logo-black.png';
import '../../styles/Footer.scss';

const linkIBM = 'https://ibm.com/ar';
const linkIG = 'https://innovation-growth.mybluemix.net/';

const Footer = ({ external = false }) => {
  return (
    <div className="footer-container gray">
      <div className="left">
        <div className="logo">
          <img src={logoIBM} alt="IBM" width="70" />
        </div>
      </div>
      <div className="right">
        <span className="sign">
          Powered by{' '}
          {external ? (
            <a
              href={linkIBM}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBM Argentina 2019 ©
            </a>
          ) : (
            <a
              href={linkIG}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Innovation Team
            </a>
          )}
        </span>
        <div className="logo">
          {external ? null : (
            <img src={logoIG} alt="Innovation Team" width="28" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import footerImage from '../../images/gavin-foster.jpg'

const Footer = ({ toggleSetting }) =>  {
  return (
    <footer>
      <div className="footer-top">
        <p className="footer-top__text">703.254.8467</p>
        <p className="footer-top__text">gavinnfoster@gmail.com</p>
        <p className="footer-top__text">🐸</p>
      </div>
      <section className="footer-bottom">
        <div className="footer-bottom__text">
          <p>
            I'm Gavin and I'm a web developer. <br/>I want to build better tools.
          </p>
        </div>
        <div className="footer-bottom__image">
          <img src={footerImage} alt="" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;

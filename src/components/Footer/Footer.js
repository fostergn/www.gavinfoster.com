import React from 'react';
import footerImage from '../../images/portrait.jpg'

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
            Some more info about gavin like who he is, what he enjoys, and most importantly why you would hire someone who is so mother fucking silly amiright? Let's keep this going. I'll teach me about you if you teach me about you.
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

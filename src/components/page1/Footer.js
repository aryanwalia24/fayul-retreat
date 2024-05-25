import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../css/style.css';

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="f0">
          <img src="images/logo.png" alt="Fayul Retreat Logo" />
        </div>
        <div className="f1">
          <div className="about" id="about">
            <div className="fch">About</div>
            <div className="fcc">
              At Fayul Retreat, we strive to offer exceptional hospitality, comfortable accommodations, and top-notch amenities to ensure that every guest's stay is memorable and relaxing. Whether you are seeking a peaceful retreat or an adventurous getaway, we are dedicated to making your stay with us unforgettable.
            </div>
          </div>
          <div className="fcont">
            <div className="fc1">
              <div className="fch">Contact</div>
              <div className="fcc">
                <div>Address: Chaka road, village kalpa, district kinnaur, H.p.</div>
                <div>Ph.: +91 78074 11180</div>
                <div>Email: fayulretreat@gmail.com</div>
              </div>
            </div>
            <div className="fc1">
              <div className="fch">Get Social</div>
              <div className="fcc">
                <span>Follow us on social media and keep in touch with Fayul Retreat.</span>
                <div className="icons">
                  <a href="https://www.instagram.com/fayul_retreat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button>
                      <i className="fa-brands fa-instagram"></i>
                    </button>
                  </a>
                  <a href="https://wa.me/+917807411180" target="_blank" rel="noopener noreferrer">
                    <button>
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                  </a>
                  <a href="mailto:fayulretreat@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button>
                      <i className="fa-regular fa-envelope"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="f2">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Fayul Retreat™ Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;

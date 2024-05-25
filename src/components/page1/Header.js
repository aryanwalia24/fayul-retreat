import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../../css/style.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleBookNowClick = () => {
    window.location.href = '/booknow';
  };

  return (
    <>
      <div className="stwa">
        <a href="https://wa.me/+917807411180?text=hello">
          <img src="images/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
      <header>
        <video autoPlay muted loop id="myVideo" preload="auto">
          <source src="images/mount.mp4" type="video/mp4" />
        </video>
        <div className="grad">
          <div className="gradt">
            <p>experience tranquil luxury at</p>
            <h1>Fayul Retreat</h1>
          </div>
        </div>
        <div className={`nav ${menuVisible ? 'show1' : ''}`}>
          <div className="navup">
            <div className="logo">
              <img src="images/logo.png" alt="logo" />
            </div>
            <span className="secondary-btn" onClick={toggleMenu}>
              <i className={`material-symbols-outlined ${menuVisible ? 'show2' : ''}`}>
                menu
              </i>
            </span>
          </div>
          <div className={`navdown ${menuVisible ? 'show3' : ''}`}>
            <div className="lul">
              <ul>
                <li>
                  <a href="#stwa">home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#rooms">rooms</a>
                </li>
                <li>
                  <a href="#pages">pages</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="rul">
              <div>
                <h1>Welcome to </h1>
                <h1>Fayul Retreat</h1>
              </div>
              <Link to="/booknow" className="primary-btn" onClick={handleBookNowClick}>
                Book Now
              </Link>
              <div>
                <div className="fcc1">
                  <div>
                    Address: Chaka road, village kalpa, district kinnaur, H.P.
                  </div>
                  <div>Ph.: +91 78074 11180</div>
                  <div>Email: fayulretreat@gmail.com</div>
                </div>
                <div className="icons">
                  <a href="https://www.instagram.com/fayul_retreat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <button>
                      <i className="fa-brands fa-instagram" />
                    </button>
                  </a>
                  <a href="https://wa.me/917807411180" target="_blank" rel="noopener noreferrer">
                    <button>
                      <i className="fa-brands fa-whatsapp" />
                    </button>
                  </a>
                  <a href="mailto:fayulretreat@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button>
                      <i className="fa-regular fa-envelope" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

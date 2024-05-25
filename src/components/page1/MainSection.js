import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/style.css'

const MainSection = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="intro">
          <div className="ir">
            <div className="iru">
              ~Fayul Retreat
            </div>
            <div className="ird">
              <img src="images/map.png" alt="" />
              <div>
                Welcome to Fayul Retreat, a luxurious haven in Kinnaur, Himachal Pradesh. Experience breathtaking Himalayan views, exceptional hospitality, and serene tranquility in a perfect blend of modern comfort and traditional charm.
              </div>
            </div>
          </div>
          <div className="il">
            <div className="hed1">
              <div className="back">Welcome</div>
              <div className="front">Fayul Retreat</div>
            </div>
            <div className="contt">
              Welcome to Fayul Retreat, a premier hotel nestled in the breathtaking Kinnaur region of Himachal Pradesh, India. Experience the perfect blend of comfort, serenity, and warm hospitality amidst the picturesque landscapes. Discover a tranquil haven where every detail is crafted to ensure an unforgettable stay.
            </div>
            <div className="iimg">
              <img src="images/2.JPG" alt="" />
              <img src="images/1.JPG" alt="" />
            </div>
            <div className="contt">
              At Fayul Retreat, we strive to offer exceptional hospitality, comfortable accommodations, and top-notch amenities to ensure that every guest's stay is memorable and relaxing. Whether you are seeking a peaceful retreat or an adventurous getaway, we are dedicated to making your stay with us unforgettable.
            </div>
          </div>
        </div>

        <div id="rooms">
          <div className="hed">
            <div className="back">Explore</div>
            <div className="front">Our Rooms</div>
          </div>
          <div className="rcont">
            <div className="rcard">
              <div className="rimg">
                <img src="images/1.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">Mud Room</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <div className="cprc">
                    <span className="cu">Rs 3,499</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/2.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">Premium Wooden Room</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <div className="cprc">
                    <span className="cu">Rs 6,499</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/3.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">Glamping dome</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <div className="cprc">
                    <span className="cu">Rs 6,899</span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rcard">
              <div className="rimg">
                <img src="images/1.JPG" alt="" />
              </div>
              <div className="textr">
                <div className="rtext">
                  <span className="ch">Hammock</span>
                  <span className="ct">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa!</span>
                </div>
                <div className="rbook">
                  <div className="cprc">
                    <span className="cu">Rs </span>
                    <span className="cd">Per Night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pages" className="insta">
          <div className="igrid">
            <div className="igc">
              <img src="images/1.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r1vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/2.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r2vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/3.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/r2vid.MOV" />
              </video>
            </div>
            <div className="igc">
              <img src="images/3.JPG" alt="" />
            </div>
            <div className="igc">
              <video autoPlay muted loop>
                <source src="images/outvid.MP4" />
              </video>
            </div>
            <div className="igc">
              <img src="images/1.JPG" alt="" />
            </div>
            <div id="hide" className="igc">
              <video autoPlay muted loop>
                <source src="images/r1vid.MOV" />
              </video>
            </div>
          </div>
          <div className="itg">
              <a href="https://www.instagram.com/fayul_retreat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer">      
                    <button className="inb">
                      <span>Follow us on Instagram</span>
                      <i className="fa-brands fa-instagram"></i>
                    </button>
              </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainSection;

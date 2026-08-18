import React from 'react'
import './AboutUs.css'
import Navbar from './Navbar'

const AboutUs = () => {
  return (
    <div> <Navbar/>
       <section className="about-section">
      <div className="about-container">

        <div className="about-left">
          <span className="about-label">ABOUT PARKGO</span>

          <h2>
            Parking should be
            <span> effortless.</span>
          </h2>

          <p className="about-description">
            ParkGo is built to make parking simpler. We connect drivers
            with convenient parking spaces around the city, helping you
            spend less time searching and more time getting where you
            need to go.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <h3>01</h3>
              <p>Find parking faster</p>
            </div>

            <div className="about-stat">
              <h3>02</h3>
              <p>Choose the right spot</p>
            </div>

            <div className="about-stat">
              <h3>03</h3>
              <p>Get where you're going</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-card">


            <div className="about-image-overlay">
              <span className="status-dot"></span>
              <div>
                <strong>ParkGo</strong>
                <p>Making parking easier</p>
              </div>
            </div>
          </div>

          <div className="about-floating-card">
            <span>LOCATION</span>
            <strong>TASHKENT</strong>
            <p>Built around your destination.</p>
          </div>
        </div>

      </div>
    </section>
    </div>
   
  )
}

export default AboutUs
import React from 'react'
import '../components/Service.css'
import Navbar from '../components/Navbar'
const Services = () => {
  return (
    <div>
      <Navbar/>
      <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <span className="services-label">PARKGO SERVICES</span>

          <h1>
            Everything you need
            <span> before you park.</span>
          </h1>

          <p>
            From finding the right parking spot to charging your car,
            ParkGo makes every part of your journey easier.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card service-large">
            <div className="service-number">01</div>

            <div className="service-icon">P</div>

            <h2>Find a Parking Spot</h2>

            <p>
              Search for parking near your destination and
              discover convenient spots around Tashkent.
            </p>

            <div className="service-bottom">
              <span>MAP SEARCH</span>
              <span>→</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>

            <div className="service-icon">R</div>

            <h2>Reserve Your Spot</h2>

            <p>
              Choose a parking space ahead of time and
              arrive knowing your spot is ready.
            </p>

            <div className="service-bottom">
              <span>RESERVATIONS</span>
              <span>→</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>

            <div className="service-icon">⚡</div>

            <h2>EV Charging</h2>

            <p>
              Find charging stations near you and keep
              your electric vehicle ready for the road.
            </p>

            <div className="service-bottom">
              <span>CHARGING</span>
              <span>→</span>
            </div>
          </div>

          <div className="service-card service-wide">
            <div className="service-number">04</div>

            <div className="service-icon">M</div>

            <h2>Private Parking & Memberships</h2>

            <p>
              Access private parking spaces and membership
              options designed for people who park regularly.
            </p>

            <div className="service-bottom">
              <span>MEMBERSHIPS</span>
              <span>→</span>
            </div>
          </div>

        </div>

        <div className="how-section">

          <div className="how-header">
            <span className="services-label">HOW IT WORKS</span>

            <h2>
              Parking made
              <span> simple.</span>
            </h2>
          </div>

          <div className="how-steps">

            <div className="how-step">
              <span>01</span>
              <h3>Search</h3>
              <p>
                Tell ParkGo where you're going.
              </p>
            </div>

            <div className="step-line"></div>

            <div className="how-step">
              <span>02</span>
              <h3>Choose</h3>
              <p>
                Compare parking spots near you.
              </p>
            </div>

            <div className="step-line"></div>

            <div className="how-step">
              <span>03</span>
              <h3>Park</h3>
              <p>
                Arrive and park without the hassle.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </div>
    
  )
}

export default Services
'use client'

import React from 'react'
import './Service.css'
import Navbar from './Navbar'

const Service = () => {
  return (
    <div>
      <Navbar/>
       <main className="service-page">

      <section className="service-hero">
        <div className="service-hero-content">
          <h1>
            Parking made
            <span> simpler.</span>
          </h1>

          <p>
            ParkGo connects drivers with parking locations around their
            destination, making parking in Tashkent faster and easier.
          </p>
        </div>
      </section>

      <section className="services-section">

        <div className="section-heading">
          <h2>Everything you need to park smarter.</h2>

          <p>
            From finding your destination to discovering nearby parking,
            ParkGo brings the experience together in one place.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card featured">
            <div className="service-number">01</div>

            <div className="service-icon">⌖</div>

            <h3>Find Parking</h3>

            <p>
              Discover parking locations around your destination using
              our interactive map.
            </p>

            <div className="service-tag">
              CORE SERVICE
            </div>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>

            <div className="service-icon">⌕</div>

            <h3>Smart Search</h3>

            <p>
              Search for a location in Tashkent and quickly find parking
              options nearby.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>

            <div className="service-icon">◉</div>

            <h3>Interactive Map</h3>

            <p>
              Explore parking locations visually and understand where
              they are before you arrive.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">04</div>

            <div className="service-icon">★</div>

            <h3>Parking Discovery</h3>

            <p>
              Compare nearby options and choose a parking location that
              works best for your destination.
            </p>
          </div>

        </div>

      </section>

      <section className="driver-section">

        <div className="driver-content">

          <h2>
            Less searching.
            <br />
            More driving.
          </h2>

          <p>
            ParkGo is designed around one simple idea: drivers should
            spend less time looking for parking and more time getting
            where they need to go.
          </p>

          <div className="driver-flow">

            <div>
              <strong>01</strong>
              <p>Search</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Discover</p>
            </div>

            <div>
              <strong>03</strong>
              <p>Choose</p>
            </div>

            <div>
              <strong>04</strong>
              <p>Park</p>
            </div>

          </div>

        </div>

      </section>

      <section className="business-section">

        <div className="business-header">

          <h2>
            Turn parking spaces
            <br />
            into opportunities.
          </h2>

          <p>
            ParkGo is also designed to connect parking businesses with
            drivers who are actively looking for a place to park.
          </p>

        </div>

        <div className="business-grid">

          <div>
            <strong>01</strong>

            <h3>Reach more drivers</h3>

            <p>
              Make your parking location easier for drivers to discover.
            </p>
          </div>

          <div>
            <strong>02</strong>

            <h3>Increase visibility</h3>

            <p>
              Put your parking location directly on the ParkGo map.
            </p>
          </div>

          <div>
            <strong>03</strong>

            <h3>Grow with ParkGo</h3>

            <p>
              Build your digital presence as ParkGo expands across
              Tashkent and beyond.
            </p>
          </div>

        </div>

      </section>

      <section className="future-section">

        <h2>
          We're building more
          <br />
          than a parking map.
        </h2>

        <p>
          ParkGo's long-term vision is to create a complete parking
          ecosystem connecting drivers, parking businesses and cities.
        </p>

        <div className="future-list">

          <div>
            <span>→</span>
            Real-time parking availability
          </div>

          <div>
            <span>→</span>
            Parking reservations
          </div>

          <div>
            <span>→</span>
            User accounts and reviews
          </div>

          <div>
            <span>→</span>
            Expansion to more cities
          </div>

        </div>

      </section>

      <section className="service-cta">

        <span>PARKGO</span>

        <h2>
          Find your spot.
          <br />
          Get where you're going.
        </h2>

        <p>
          Parking in Tashkent doesn't have to be complicated.
        </p>

      </section>

    </main>
    </div>
   
  )
}

export default Service
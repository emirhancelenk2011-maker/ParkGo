'use client'

import React from 'react'
import './AboutUs.css'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
        <main className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            Changing the way
            <span> Tashkent parks.</span>
          </h1>

          <p>
            ParkGo is built to make parking simpler, faster and
            more accessible for everyone.
          </p>
        </div>
      </section>

      <section className="about-story">

        <div className="about-story-title">
          <h2>
            Parking should
            <br />
            be simple.
          </h2>
        </div>

        <div className="about-story-text">
          <p>
            Finding a parking spot shouldn't mean driving around
            the city hoping something becomes available.
          </p>

          <p>
            ParkGo brings drivers, parking spaces and businesses
            together in one connected platform, making it easier
            to find the right place before you even arrive.
          </p>
        </div>

      </section>

      <section className="about-image-section">

        <div className="about-image">
          <img
            src="/about-parking.jpg"
            alt="ParkGo parking"
          />

          <div className="about-image-overlay">
            <span>Park smarter.</span>
            <span>Move faster.</span>
          </div>
        </div>

      </section>

      <section className="about-values">

        <div className="about-values-heading">
          <h2>
            Built around
            <span> people.</span>
          </h2>

          <p>
            ParkGo isn't just about parking spaces. It's about
            creating a better experience for everyone involved.
          </p>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <span>01</span>

            <h3>Simple</h3>

            <p>
              Everything is designed to make finding and using
              parking feel effortless.
            </p>
          </div>

          <div className="value-card">
            <span>02</span>

            <h3>Connected</h3>

            <p>
              Drivers and parking owners can connect through
              one easy-to-use platform.
            </p>
          </div>

          <div className="value-card">
            <span>03</span>

            <h3>Local</h3>

            <p>
              Built with the streets, drivers and parking
              challenges of Tashkent in mind.
            </p>
          </div>

          <div className="value-card">
            <span>04</span>

            <h3>Future-ready</h3>

            <p>
              We're building a platform that can grow with
              cities and the way people move around them.
            </p>
          </div>

        </div>

      </section>

      <section className="about-vision">

        <div className="about-vision-content">

          <h2>
            We're not just
            <br />
            finding parking.
          </h2>

          <p>
            We're building a smarter way for people to move
            through the city.
          </p>

          <div className="vision-line"></div>

          <span>ParkGo</span>

        </div>

      </section>

    </main>
    </div>
  
  )
}

export default About
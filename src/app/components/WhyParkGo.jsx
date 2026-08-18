"use client";

import React from "react";
import "../WhyParkGo.css";

const WhyParkGo = () => {
  return (
    <section className="why-section">

      <div className="why-intro">
        <span className="section-label">WHY PARKGO?</span>

        <h2>
          Parking is more than
          <span> finding a location.</span>
        </h2>

        <p>
          ParkGo is built specifically around parking — helping you
          discover available spots, reserve them quickly, and spend
          less time searching.
        </p>
      </div>

      <div className="parking-card">

        <div className="parking-card-content">

          <span className="card-label">BUILT FOR PARKING</span>

          <h3>
            Maps show you the city.
            <span> ParkGo shows you where to park.</span>
          </h3>

          <p>
            Normal maps help you navigate between places.
            ParkGo focuses on one thing — helping you find
            parking that actually works for you.
          </p>

          <div className="feature-tags">
            <span>Available spots</span>
            <span>Parking focused</span>
            <span>Less searching</span>
          </div>

        </div>

        <div className="map-visual">

          <div className="map-road road-one"></div>
          <div className="map-road road-two"></div>
          <div className="map-road road-three"></div>
          <div className="map-road road-four"></div>

          <div className="parking-pin pin-one">P</div>
          <div className="parking-pin pin-two">P</div>
          <div className="parking-pin pin-three">P</div>

          <div className="available-popup">
            <div className="popup-icon">P</div>

            <div>
              <strong>Parking available</strong>
              <small>2 minutes away</small>
            </div>
          </div>

        </div>

      </div>

      <div className="how-section">

        <div className="how-heading">
          <span className="section-label">SIMPLE BY DESIGN</span>

          <h3 className="dark: text-white">
            Find it. Reserve it. Park.
          </h3>

          <p className="dark: text-white">
            No complicated process. Just the information you need
            to get parked and move on with your day.
          </p>
        </div>


        <div className="steps-grid">
          <div className="step-card">

            <div className="step-top">
              <span>01</span>
              <div className="step-icon search-icon">⌕</div>
            </div>

            <h4>Search</h4>

            <p>
              Enter where you're going and discover parking
              options near your destination.
            </p>

            <div className="step-line"></div>

          </div>

          <div className="step-card">

            <div className="step-top">
              <span>02</span>
              <div className="step-icon reserve-icon">✓</div>
            </div>

            <h4>Reserve</h4>

            <p>
              Choose the spot that works best for you and
              reserve it before you arrive.
            </p>

            <div className="step-line"></div>

          </div>

          <div className="step-card">

            <div className="step-top">
              <span>03</span>
              <div className="step-icon park-icon">→</div>
            </div>

            <h4>Park</h4>

            <p>
              Arrive, park, and get on with your day.
              That's the whole point.
            </p>

            <div className="step-line"></div>

          </div>

        </div>

      </div>

      <div className="membership-section">

        <div className="membership-content">

          <span className="section-label">
            PARKGO MEMBERSHIP
          </span>

          <h3>
            More spots.
            <span> Better prices.</span>
          </h3>

          <p>
            Membership gives you access to additional parking
            locations and member pricing on selected spots.
            If you park regularly, the extra options and savings
            can make membership worth it.
          </p>

          <button>
            Explore Membership
          </button>

        </div>


        <div className="membership-card">

          <div className="membership-card-top">
            <strong>
              Park<span>Go</span>
            </strong>

            <small>MEMBER</small>
          </div>

          <div className="membership-main">
            <small>MEMBERSHIP BENEFITS</small>

            <h4>More parking.</h4>
            <h4>Less searching.</h4>
          </div>

          <div className="membership-bottom">
            PARKGO / 2026
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyParkGo;
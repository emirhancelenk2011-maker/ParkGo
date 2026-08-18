import React from 'react'
import './Support.css'

const Support = () => {
  return (
    <section className="support-section">
      <div className="support-container">

        <div className="support-header">
          <span className="support-label">PARKGO SUPPORT</span>

          <h1>
            How can we
            <span> help?</span>
          </h1>

          <p>
            Find answers to common questions or get in touch
            with our support team.
          </p>
        </div>

        <div className="support-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search for help..."
          />

          <button>
            Search
          </button>
        </div>

        <div className="support-grid">

          <div className="support-card">
            <div className="support-icon">P</div>

            <h3>Finding Parking</h3>

            <p>
              Learn how to find available parking
              spots near your destination.
            </p>

            <button className="support-link">
              Learn more →
            </button>
          </div>

          <div className="support-card">
            <div className="support-icon">R</div>

            <h3>Reservations</h3>

            <p>
              Everything you need to know about
              reserving a parking spot.
            </p>

            <button className="support-link">
              Learn more →
            </button>
          </div>

          <div className="support-card">
            <div className="support-icon">$</div>

            <h3>Payments</h3>

            <p>
              Questions about prices, payments,
              refunds or transactions?
            </p>

            <button className="support-link">
              Learn more →
            </button>
          </div>

          <div className="support-card">
            <div className="support-icon">A</div>

            <h3>Account</h3>

            <p>
              Manage your account, profile and
              personal information.
            </p>

            <button className="support-link">
              Learn more →
            </button>
          </div>

        </div>

        <div className="support-contact">

          <div>
            <span className="support-label">STILL NEED HELP?</span>

            <h2>
              Talk to the ParkGo team.
            </h2>

            <p>
              Can't find what you're looking for?
              Our team is ready to help.
            </p>
          </div>

          <button className="contact-button">
            Contact Support
          </button>

        </div>

      </div>
    </section>
  )
}

export default Support
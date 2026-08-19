'use client'

import React, { useState } from 'react'
import './Support.css'
import Navbar from './Navbar'

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: 'How does ParkGo work?',
      answer:
        'ParkGo helps you discover available parking around your destination. Search for a place, explore nearby parking options, and choose the one that works best for you.'
    },
    {
      question: 'Can I find parking anywhere in Tashkent?',
      answer:
        'ParkGo is designed to make finding parking across Tashkent easier. More locations and parking partners can be added as the platform grows.'
    },
    {
      question: 'Can I rent out my parking spot?',
      answer:
        'Yes. ParkGo is designed to connect parking owners with drivers looking for convenient places to park.'
    },
    {
      question: 'What if I have a problem with a parking location?',
      answer:
        'You can contact our support team and provide the details of the problem. We will help you find the right solution.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div>
       <main className="support-page">

      <section className="support-hero">
        <div className="support-hero-content">
          <h1>
            We're here to
            <span> help.</span>
          </h1>

          <p>
            Have a question about ParkGo? Find an answer below or
            get in touch with our support team.
          </p>
        </div>
      </section>

      <section className="support-options">

        <div className="support-card">
          <div className="support-card-number">01</div>

          <h2>Find an answer.</h2>

          <p>
            Browse the most common questions about parking,
            locations, accounts and using ParkGo.
          </p>

          <a href="#faq">
            View FAQs <span>↗</span>
          </a>
        </div>

        <div className="support-card">
          <div className="support-card-number">02</div>

          <h2>Talk to us.</h2>

          <p>
            Can't find what you're looking for? Send us a message
            and we'll help you figure it out.
          </p>

          <a href="#contact">
            Contact support <span>↗</span>
          </a>
        </div>

      </section>

      <section className="faq-section" id="faq">

        <div className="faq-heading">
          <h2>
            Frequently asked
            <br />
            questions.
          </h2>

          <p>
            Everything you need to know about using ParkGo.
          </p>
        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openFaq === index ? 'active' : ''
              }`}
              key={index}
            >
              <button onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </section>

      <section className="contact-section" id="contact">

        <div className="contact-content">

          <h2>
            Still need
            <span> help?</span>
          </h2>

          <p>
            Our support team is ready to help you with questions,
            feedback or problems with ParkGo.
          </p>

          <div className="contact-actions">
            <a href="mailto:support@parkgo.uz" className="contact-button">
              Contact support
              <span>↗</span>
            </a>

            <a href="tel:+998000000000" className="contact-phone">
              +998 00 000 00 00
            </a>
          </div>

        </div>

      </section>

    </main>
    </div>
  )
}

export default Support
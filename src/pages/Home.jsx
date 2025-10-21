// src/pages/Home.jsx
import React from 'react';
import './home.css';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container grid grid-2">
          <div className="hero__left">
            <div className="tag">Move to Spain the Smart Way</div>

            <h1 className="hero__title">
              Admissions ▸ Visa ▸ Relocation — handled.
            </h1>

            <p className="hero__subtitle">
              From language schools to universities, NLV/Student visas and residence —
              Interlink guides you end-to-end and keeps you calm.
            </p>

            <ul className="kpi">
              <li><strong>98%</strong> visa success</li>
              <li><strong>48h</strong> first response</li>
              <li>Barcelona-based team</li>
            </ul>

            <div className="cta">
              <a
                className="btn"
                href="https://calendly.com/studyinterlink/30min"
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </a>
              <a className="btn btn--secondary" href="/services">
                See services
              </a>
            </div>
          </div>

          <div className="hero__right">
            {/* Положи изображение в /public/images/barcelona.jpg */}
            <img
              className="hero__img"
              src="/images/pexels-aleksandar-pasaric-1388030.jpg"
              alt="Barcelona skyline"
            />
          </div>
        </div>
      </section>

      {/* Плейсхолдер под следующие секции */}
      <section className="container blocks">
        <div className="card">
          <h3>Get a free 15-min assessment</h3>
          <p>Tell us your situation — we’ll map out the fastest legit route for Spain.</p>
          <div className="chips">
            <span>Admissions</span><span>Visa</span><span>Relocation</span>
          </div>
        </div>

        <div className="card">
          <h3>Contact us</h3>
          <p>We’ll reply within 24 hours.</p>
          <a className="link" href="/contact">Go to contact form →</a>
          <form className="contact-form" action="https://formspree.io/f/xdkwvwrq" method="POST">
  <div className="grid-2">
    <input name="name" type="text" placeholder="Your name" required aria-label="Your name" />
    <input name="email" type="email" placeholder="Email" required aria-label="Email" />
  </div>
  <textarea name="message" placeholder="Tell us briefly about your case…" rows="4" required aria-label="Message"></textarea>
  <button className="btn" type="submit">Send</button>
</form>

        </div>
      </section>
    </>
  );
}


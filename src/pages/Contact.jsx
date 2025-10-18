import React from 'react'
import LeadForm from '../components/LeadForm.jsx'
export default function Contact(){
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div>
          <h2>Contact us</h2>
          <p className="muted">Prefer WhatsApp? Write +34 635 99 48 44 or book via Calendly.</p>
          <div style={{marginTop:'.8rem'}}>
            <a className="btn" href="https://calendly.com/studyinterlink/30min" target="_blank" rel="noreferrer">Calendly 30 min</a>
          </div>
        </div>
        <div className="card"><LeadForm/></div>
      </div>
    </section>
  )
}

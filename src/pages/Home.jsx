import React from 'react'
export default function Home(){
  return (
    <section className="hero">
      <div className="container grid grid-2">
        <div>
          <div className="tag">Move to Spain the Smart Way</div>
          <h1 style={fontSize:'clamp(32px,4vw,50px)', margin:'12px 0 8px'}>Admissions ▸ Visa ▸ Relocation — handled.</h1>
          <p className="muted" style={fontSize:'1.1rem'}>From language schools to universities, NLV/Student visas and residence — Interlink guides you end‑to‑end and keeps you calm.</p>
          <div className="kpi">
            <div>98% visa success</div>
            <div>48h first response</div>
            <div>Barcelona-based team</div>
          </div>
          <div style={marginTop:'1.1rem', display:'flex', gap:'.6rem', flexWrap:'wrap'}>
            <a className="btn" href="https://calendly.com/studyinterlink/30min" target="_blank" rel="noreferrer">Book a call</a>
            <a className="btn secondary" href="/services">See services</a>
          </div>
        </div>
        <div>
          <img className="img-cover" src="/images/pexels-aleksandar-pasaric-1388030.jpg" alt="Barcelona view"/>
        </div>
      </div>
    </section>
  )
}

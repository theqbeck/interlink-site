import React from 'react'
export default function Services(){
  return (
    <section className="section">
      <div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
        {[
          {title:'Admissions', text:'Language schools & universities. Application strategy, documents, and acceptance.'},
          {title:'Student Visa', text:'Student/NLV, switches, and renewals. We prepare your full dossier.'},
          {title:'Relocation', text:'NIE, empadronamiento, bank, SIM, health insurance — end to end.'},
          {title:'Consulting', text:'1:1 sessions to plan your route, budget and timelines.'}
        ].map((c,i)=>(
          <div className="card" key={i}>
            <h3>{c.title}</h3>
            <p className="muted">{c.text}</p>
            <div style={{marginTop:'.8rem'}}><a className="btn" href="/contact">Get started</a></div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
export default function Testimonials(){
  return (
    <section className="section">
      <div className="container grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
        {[
          {name:'Maria', text:'I’m very grateful for the team’s care and competent case handling. I now live in Spain thanks to you.'},
          {name:'Gleb', text:'Got my A2 certificate after a year at BCN school — everything was smooth and on time.'},
        ].map((t,i)=>(
          <div key={i} className="card">
            <p className="muted">“{t.text}”</p>
            <div style={{marginTop:'.8rem', fontWeight:700}}>{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

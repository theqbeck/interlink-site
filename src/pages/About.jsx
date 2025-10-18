import React from 'react'
export default function About(){
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div>
          <h2>About Interlink</h2>
          <p className="muted">Barcelona-based team focused on student admissions, visas and relocation. We combine local process expertise with calm, transparent communication.</p>
          <ul className="list">
            <li>Partner schools & universities in Spain</li>
            <li>English, Spanish & Russian speaking support</li>
            <li>Clear pricing & documented checklists</li>
          </ul>
        </div>
        <div>
          <img className="img-cover" src="/images/pexels-ken-cheung-11025841.jpg" alt="Barcelona"/>
        </div>
      </div>
    </section>
  )
}

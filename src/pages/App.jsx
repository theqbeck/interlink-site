import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import LeadForm from '../components/LeadForm.jsx'

export default function App(){
  return (
    <>
      <header className="nav">
        <div className="container inner">
          <div className="logo">
            <img src="/images/interlink_logo_web.png" alt="Interlink logo"/>
            <span>INTERLINK</span>
          </div>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/how-it-works">How it works</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <a className="btn" href="https://calendly.com/studyinterlink/30min" target="_blank" rel="noreferrer">Book 30 min</a>
        </div>
      </header>
      <Outlet/>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Get a free 15‑min assessment</h3>
            <p className="muted">Tell us your situation — we’ll map out the fastest legit route for Spain.</p>
            <div style={{marginTop:'.8rem'}}>
              <span className="tag">Admissions ▸ Visa ▸ Relocation</span>
            </div>
          </div>
          <div className="card">
            <LeadForm compact />
          </div>
        </div>
      </section>
      <footer>
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
          <div>© {new Date().getFullYear()} Interlink</div>
          <div className="muted">Move to Spain the Smart Way</div>
        </div>
      </footer>
    </>
  )
}

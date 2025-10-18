import React, { useState } from 'react'

// Google Apps Script webhook URL (safe to be public for this purpose)
const WEBHOOK = 'https://script.google.com/macros/s/AKfycbzeUtEkipy-f8Goa0keMGjG0yb76--jovBLFWdJJHH23acSi2nyZ7mjDCUTEflSxtie/exec'

export default function LeadForm({compact=false}){
  const [status, setStatus] = useState(null)
  const [pending, setPending] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', amount:'', comment:'' })

  async function onSubmit(e){
    e.preventDefault()
    setPending(true)
    setStatus(null)
    try{
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          amount: Number(form.amount || 0),
          comment: form.comment
        })
      })
      const txt = await res.text()
      if(res.ok){
        setStatus({ok:true, msg:'Thanks! Check your email for confirmation.'})
        setForm({ name:'', email:'', phone:'', amount:'', comment:'' })
      }else{
        setStatus({ok:false, msg:txt || 'Something went wrong.'})
      }
    }catch(err){
      setStatus({ok:false, msg: err.message})
    }finally{
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{compact ? 'Contact us' : 'Request a consultation'}</h3>
      <div className="muted" style={{marginBottom:'1rem'}}>We’ll reply within 24 hours.</div>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
      </div>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr', marginTop:'.8rem'}}>
        <input placeholder="Phone / WhatsApp" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
        <input type="number" min="0" placeholder="Budget (optional)" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})}/>
      </div>
      <textarea placeholder="Tell us about your case (optional)" style={{marginTop:'.8rem', minHeight: compact? '80px':'110px'}} value={form.comment} onChange={e=>setForm({...form, comment:e.target.value})}></textarea>
      <div style={{display:'flex', gap:'.6rem', marginTop:'.9rem'}}>
        <button className="btn" disabled={pending}>{pending?'Sending…':'Send request'}</button>
        <a className="btn secondary" href="https://calendly.com/studyinterlink/30min" target="_blank" rel="noreferrer">Or pick time</a>
      </div>
      {status && (
        <div className="notice" style={{marginTop:'1rem', color: status.ok ? '#065f46':'#991b1b', background: status.ok ? '#ecfdf5':'#fff1f2', borderColor: status.ok ? '#6ee7b7':'#fecdd3'}}>
          {status.msg}
        </div>
      )}
      <style>{`
        input, textarea{
          width:100%; padding:.85rem .9rem; border-radius:12px; border:1px solid #e5e7eb; font-size:15px;
          outline: none; transition: border-color .15s ease, box-shadow .15s ease;
        }
        input:focus, textarea:focus { border-color:#c7b9ff; box-shadow:0 0 0 4px rgba(199,185,255,.25) }
      `}</style>
    </form>
  )
}

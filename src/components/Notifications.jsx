import React, { useState } from 'react'
import api from '../api/apiClient'

export default function Notifications(){
  const [target,setTarget] = useState('all')
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [sending,setSending] = useState(false)

  const send = async ()=>{
    if(!body) return alert('Message body required')
    setSending(true)
    try{
      await api.post('/notifications/send',{ to: target, title, body })
      alert('Notification queued')
      setTitle(''); setBody('')
    }catch(e){ alert('Failed to send') }
    setSending(false)
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Notifications</h3>
      <select value={target} onChange={e=>setTarget(e.target.value)} className="input w-full">
        <option value="drivers">Drivers</option>
        <option value="riders">Riders</option>
        <option value="frequent">Frequent users</option>
        <option value="all">All users</option>
      </select>

      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title (optional)" className="w-full input" />
      <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Message body" className="w-full input h-28" />

      <div className="flex gap-2">
        <button onClick={send} disabled={sending} className="btn">Send</button>
        <button onClick={()=>{setTitle(''); setBody('')}} className="btn">Clear</button>
      </div>
    </div>
  )
}

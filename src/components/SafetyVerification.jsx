import React, { useState } from 'react'
import api from '../api/apiClient'

export default function SafetyVerification(){
  const [files,setFiles]=useState(null)
  const [status,setStatus]=useState('')
  const upload = async ()=>{
    if(!files) return alert('Select files first')
    const fd = new FormData()
    Array.from(files).forEach(f=>fd.append('documents', f))
    try{
      const res = await api.post('/safety/verify', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
      setStatus(res.data?.status || 'submitted')
    }catch(e){ setStatus('error') }
  }
  return (
    <div>
      <h3 className="font-semibold">Safety Verification</h3>
      <p className="text-sm text-gray-600">Upload identity and vehicle documents. Server will handle KYC and background checks.</p>
      <input type="file" multiple onChange={e=>setFiles(e.target.files)} className="mt-2" />
      <div className="mt-2 flex gap-2">
        <button onClick={upload} className="btn">Upload & Verify</button>
        <button onClick={()=>setFiles(null)} className="btn">Clear</button>
      </div>
      {status && <div className="mt-2 text-sm">Status: {status}</div>}
    </div>
  )
}

import React, { useState } from 'react'
import api from '../api/apiClient'

export default function RouteOptimizer(){
  const [stops,setStops]=useState([''])
  const [plan,setPlan]=useState(null)
  const [loading,setLoading]=useState(false)

  const optimizeServer = async () => {
    // try server-side optimization first
    setLoading(true)
    try{
      const payload = { stops: stops.filter(Boolean) }
      const res = await api.post('/routes/optimize', payload)
      setPlan(res.data)
    }catch(e){
      // fallback to local heuristic
      setPlan({ optimized: [...stops].filter(Boolean).reverse(), distanceKm: Math.max(1, stops.length * 2), note: 'local-fallback' })
    }finally{ setLoading(false) }
  }

  const optimizeLocal = ()=>{
    setPlan({ optimized: [...stops].filter(Boolean).sort(), distanceKm: Math.max(1, stops.length * 1.8), note: 'local-heuristic' })
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Route Optimization</h3>
      {stops.map((s,i)=>(
        <input
          key={i}
          value={s}
          onChange={e=>{const arr=[...stops];arr[i]=e.target.value;setStops(arr)}}
          placeholder={`Stop ${i+1}`}
          className="w-full input"
        />
      ))}

      <div className="flex gap-2">
        <button type="button" onClick={()=>setStops([...stops,''])} className="btn">Add Stop</button>
        <button type="button" onClick={optimizeLocal} className="btn">Optimize (local)</button>
        <button type="button" onClick={optimizeServer} disabled={loading} className="btn">Optimize (server)</button>
      </div>

      {plan && (
        <div className="mt-2 p-3 border rounded bg-white">
          <div className="mb-2"><strong>Strategy:</strong> {plan.note || 'server'}</div>
          <div><strong>Optimized stops:</strong></div>
          <ol className="list-decimal ml-5">{plan.optimized.map((p,i)=><li key={i}>{p}</li>)}</ol>
          <div className="mt-2"><strong>Estimated distance:</strong> {plan.distanceKm} km</div>
        </div>
      )}
    </div>
  )
}

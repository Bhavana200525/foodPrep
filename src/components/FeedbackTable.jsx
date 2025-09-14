import React, { useEffect, useState } from 'react'
import api from '../api/apiClient'

export default function FeedbackTable(){
  const [rows,setRows]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    let mounted=true
    const load = async ()=>{
      setLoading(true)
      try{
        const res = await api.get('/feedback?limit=50')
        if(mounted) setRows(res.data || [])
      }catch(e){
        // fallback sample
        if(mounted) setRows([{id:1, ride:'R-100', rating:5, comment:'Great'}, {id:2, ride:'R-101', rating:3, comment:'Late pickup'}])
      }finally{ if(mounted) setLoading(false) }
    }
    load()
    return ()=> mounted=false
  },[])

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold mb-2">Ride Feedback</h3>
        {loading ? <div className="text-sm">Loading...</div> : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">Ride</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=> (
              <tr key={r.id} className="border-t"><td className="p-2">{r.ride}</td><td className="p-2">{r.rating}</td><td className="p-2">{r.comment}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

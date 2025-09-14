import React, { useState } from 'react'
import api from '../api/apiClient'


export default function RideMatcher(){
const [pickup,setPickup]=useState('')
const [drop,setDrop]=useState('')
const [match,setMatch]=useState(null)


const findMatch = async ()=>{
// placeholder: server should return a matched driver
try{
const res = await api.post('/rides/match',{pickup,drop})
setMatch(res.data || { driver: 'Demo Driver', eta: '5m' })
}catch(e){ setMatch({ driver: 'Demo Driver', eta: '5m' }) }
}


return (
<div className="space-y-3">
<h3 className="font-semibold">Match Rides</h3>
<input value={pickup} onChange={e=>setPickup(e.target.value)} placeholder="Pickup address" className="w-full input" />
<input value={drop} onChange={e=>setDrop(e.target.value)} placeholder="Drop address" className="w-full input" />
<div className="flex gap-2">
<button onClick={findMatch} className="btn">Find Match</button>
</div>
{match && (
<div className="mt-2 p-3 border rounded">
<div><strong>Driver:</strong> {match.driver}</div>
<div><strong>ETA:</strong> {match.eta}</div>
</div>
)}
</div>
)
}
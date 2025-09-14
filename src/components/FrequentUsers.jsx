import React, { useEffect, useState } from 'react'
import api from '../api/apiClient'

export default function FrequentUsers(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get('/users/frequent')
        setUsers(res.data || [])
      }catch(e){ setUsers([{id:'U1',name:'Alice',rides:34},{id:'U2',name:'Bob',rides:21}]) }
    }
    load()
  },[])
  return (
    <div>
      <h3 className="font-semibold mb-2">Frequent Users</h3>
      <ul className="list-disc ml-5">
        {users.map(u=> <li key={u.id}>{u.name} — {u.rides} rides</li>)}
      </ul>
    </div>
  )
}

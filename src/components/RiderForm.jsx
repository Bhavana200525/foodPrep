import React, { useState } from 'react'
import api from '../api/apiClient'


export default function RiderForm(){
const [form,setForm]=useState({name:'',phone:''})
const [msg,setMsg]=useState('')
const submit=async(e)=>{e.preventDefault();try{await api.post('/riders',form);setMsg('Rider added');setForm({name:'',phone:''})}catch(e){setMsg('Error')}}
return (
<form onSubmit={submit} className="space-y-3">
<h3 className="font-semibold">Register Rider</h3>
<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full input" />
<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="w-full input" />
<button className="btn">Add Rider</button>
{msg && <div className="text-sm text-gray-600">{msg}</div>}
</form>
)
}
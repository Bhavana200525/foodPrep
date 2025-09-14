import React, { useState } from 'react'
import api from '../api/apiClient'


export default function DriverForm() {
const [form, setForm] = useState({ name: '', vehicle: '', license: '' })
const [msg, setMsg] = useState('')


const submit = async (e) => {
e.preventDefault()
try {
// placeholder: replace with real endpoint
await api.post('/drivers', form)
setMsg('Driver registered')
setForm({ name: '', vehicle: '', license: '' })
} catch (err) {
setMsg('Error registering')
}
}


return (
<form onSubmit={submit} className="space-y-3">
<h3 className="font-semibold">Register Driver</h3>
<input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full input" />
<input value={form.vehicle} onChange={(e)=>setForm({...form,vehicle:e.target.value})} placeholder="Vehicle" className="w-full input" />
<input value={form.license} onChange={(e)=>setForm({...form,license:e.target.value})} placeholder="License No" className="w-full input" />
<button className="btn">Register</button>
{msg && <div className="text-sm text-gray-600">{msg}</div>}
</form>
)
}
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const sample = [
  { day: 'Mon', rides: 30 },
  { day: 'Tue', rides: 45 },
  { day: 'Wed', rides: 38 },
  { day: 'Thu', rides: 50 },
  { day: 'Fri', rides: 70 },
]

export default function ReportsPanel({ showFull=false }){
  return (
    <div>
      <h3 className="font-semibold mb-3">Activity (weekly)</h3>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={sample}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="rides" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {showFull && <div className="mt-4 text-sm text-gray-600">More detailed reports can be shown here. Use date filters and export options from the Reports page.</div>}
    </div>
  )
}

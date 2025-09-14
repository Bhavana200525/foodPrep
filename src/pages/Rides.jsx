import React from "react";
import mapIcon from "../assets/map.png";

export default function Rides() {
  return (
    <div>
      <div className="card">
        <img src={mapIcon} alt="Rides" />
        <h1>Ride Management</h1>
        <p>
          Match riders with available drivers, optimize routes for efficiency,
          and split payments fairly. This section gives you full control over
          active and past rides.
        </p>
      </div>

      <div className="card">
        <h2>Today's Highlights</h2>
        <p>🚖 10 ongoing rides</p>
        <p>✅ 35 completed rides</p>
        <p>⚠️ 1 reported issue</p>
      </div>
    </div>
  );
}

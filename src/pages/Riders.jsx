import React from "react";
import userIcon from "../assets/user.png";

export default function Riders() {
  return (
    <div>
      <div className="card">
        <img src={userIcon} alt="Riders" />
        <h1>Rider Management</h1>
        <p>
          Monitor registered riders, track their frequent trips, and analyze
          feedback. This helps ensure passenger safety and satisfaction.
        </p>
      </div>

      <div className="card">
        <h2>Popular Destinations</h2>
        <p>🏙 Downtown - 45 rides this week</p>
        <p>🏢 Business Park - 32 rides this week</p>
      </div>
    </div>
  );
}

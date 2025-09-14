import React from "react";
import carIcon from "../assets/car.png";

export default function Drivers() {
  return (
    <div>
      <div className="card">
        <img src={carIcon} alt="Drivers" />
        <h1>Manage Drivers</h1>
        <p>
          Here you can add, edit, or remove drivers. Ensure every driver passes
          safety verification before being approved for rides.
        </p>
      </div>

      <div className="card">
        <h2>Driver Actions</h2>
        <button className="btn">➕ Add New Driver</button>
        <button className="btn" style={{ marginLeft: "10px" }}>
          🔍 View Driver List
        </button>
      </div>

      <div className="card">
        <h2>Safety Tip</h2>
        <p>
          Always verify driver license, vehicle documents, and background check
          before approving them for live rides.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import dashboardIcon from "../assets/dashboard.png";

export default function Dashboard() {
  return (
    <div>
      <div className="card">
        <img src={dashboardIcon} alt="Dashboard" />
        <h1>Welcome to Carpool Dashboard</h1>
        <p>
          This is your central control panel where you can monitor driver and
          rider activity, analyze ride statistics, and access reports. Use the
          sidebar to navigate to different sections.
        </p>
      </div>

      <div className="card">
        <h2>Quick Stats</h2>
        <ul>
          <li>👨‍✈️ 12 Registered Drivers</li>
          <li>🚖 28 Active Rides</li>
          <li>🧍 95 Registered Riders</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tips</h2>
        <p>
          Keep an eye on frequent users and recent ride logs to spot trends and
          improve service quality. Check the reports section for detailed
          analytics.
        </p>
      </div>
    </div>
  );
}

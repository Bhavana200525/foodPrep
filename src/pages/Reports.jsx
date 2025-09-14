import React from "react";
import chartIcon from "../assets/chart.png";

export default function Reports() {
  return (
    <div>
      <div className="card">
        <img src={chartIcon} alt="Reports" />
        <h1>Reports & Analytics</h1>
        <p>
          Access detailed analytics on rides, payments, driver ratings, and
          rider feedback. Use these insights to improve the service experience.
        </p>
      </div>

      <div className="card">
        <h2>Weekly Summary</h2>
        <ul>
          <li>📈 150 rides completed</li>
          <li>💰 Total revenue: ₹45,000</li>
          <li>⭐ Avg. rating: 4.7/5</li>
        </ul>
      </div>
    </div>
  );
}

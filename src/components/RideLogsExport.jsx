import React from "react";

export default function RideLogsExport({ logs }) {
  const handleExport = () => {
    if (!logs || logs.length === 0) {
      alert("No ride logs to export.");
      return;
    }

    // Convert to CSV format
    const headers = Object.keys(logs[0]);
    const rows = logs.map(obj => headers.map(h => obj[h]));
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

    // Download CSV
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ride_logs.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
      onClick={handleExport}
    >
      Export Ride Logs
    </button>
  );
}

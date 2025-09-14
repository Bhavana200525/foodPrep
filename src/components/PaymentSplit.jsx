import React, { useState } from "react";

export default function PaymentSplit() {
  const [amount, setAmount] = useState("");
  const [driverShare, setDriverShare] = useState(0);
  const [companyShare, setCompanyShare] = useState(0);

  const handleSplit = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }
    const amt = parseFloat(amount);
    const driver = amt * 0.7; // 70% driver share
    const company = amt * 0.3; // 30% company share
    setDriverShare(driver);
    setCompanyShare(company);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow space-y-4">
      <h2 className="text-lg font-semibold">Payment Split</h2>
      <input
        type="number"
        placeholder="Enter total fare"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        onClick={handleSplit}
      >
        Calculate Split
      </button>
      <div className="space-y-2">
        <p>Driver Share: ₹{driverShare.toFixed(2)}</p>
        <p>Company Share: ₹{companyShare.toFixed(2)}</p>
      </div>
    </div>
  );
}

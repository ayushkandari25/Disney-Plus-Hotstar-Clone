import React, { useState } from "react";
import "./Styles/Payment.css"; // Importing the CSS file

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      setStatus("⚠️ Please enter a valid amount!");
      return;
    }
    setStatus("⏳ Processing...");
    setTimeout(() => {
      setStatus("✅ Payment Successful! Thank you.");
    }, 2000);
    setAmount(""); // Fake delay
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2 className="payment-title">Enter Amount</h2>

        {/* Input Field */}
        <input
          type="number"
          className="payment-input"
          placeholder="Enter amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Payment Button */}
        <button onClick={handlePayment} className="payment-button">
          Pay ₹{amount || "0"}
        </button>

        {/* Status Message */}
        {status && <p className="payment-status">{status}</p>}
      </div>
    </div>
  );
};

export default Payment;

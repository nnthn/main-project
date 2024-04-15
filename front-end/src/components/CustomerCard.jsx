import React, { useState } from 'react';
import customerIcon from "../assets/customer-icon.svg";
import "./customercard.css";

export default function CustomerCard({ setCustomerId }) {
  const [customerIdInput, setCustomerIdInput] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setCustomerIdInput(newValue);
    setCustomerId(newValue); // Update parent state with new customerId
  };

  return (
    <div className="customer-card">
      <img src={customerIcon} alt="user" />
      <div className="customer-details">
        <h4 className="normal-weight">CustomerId</h4>
        <input
          className="customer-number"
          type="input"
          value={customerIdInput}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";

function TransferModal({ isOpen, onClose, onSubmit, tankers, fromId, fuelType }) {
  const [amount, setAmount] = useState("");
  const [toId, setToId] = useState("");

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (!toId || isNaN(numAmount) || numAmount <= 0) return;
    onSubmit(parseInt(toId), numAmount);
    setAmount("");
    setToId("");
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-80">
          <h2 className="modal-title">Transfer {fuelType}</h2>

          <label className="block mb-2 text-sm font-bold">To Tanker:</label>
          <select
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="w-full mb-4"
          >
            <option value="">Select</option>
            {tankers
              .filter((t) => t.id !== fromId)
              .map((t) => (
                <option key={t.id} value={t.id}>
                  Tanker #{t.id}
                </option>
              ))}
          </select>

          <label className="block mb-2 text-sm font-bold">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter % to transfer"
            className="w-full mb-4"
          />

          <div className="flex justify-between">
            <button className="fuel-button" onClick={handleSubmit}>
              Transfer
            </button>
            <button className="fuel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default TransferModal;
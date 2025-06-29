import React, { useState } from "react";
import Tanker from "./Tanker";
import TransferModal from "./TransferModal";

const initialTankers = [
  { id: 1, fuel: { Diesel: 40, Electric: 20, Hybrid: 10, Petrol: 30 } },
  { id: 2, fuel: { Diesel: 25, Electric: 25, Hybrid: 30, Petrol: 20 } },
  { id: 3, fuel: { Diesel: 15, Electric: 35, Hybrid: 25, Petrol: 25 } },
  { id: 4, fuel: { Diesel: 10, Electric: 40, Hybrid: 20, Petrol: 30 } },
];

function Dashboard() {
  const [tankers, setTankers] = useState(initialTankers);
  const [modalOpen, setModalOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState({ from: null, fuelType: null });

  const handleTransfer = (fromId, fuelType) => {
    setTransferDetails({ from: fromId, fuelType });
    setModalOpen(true);
  };

  const executeTransfer = (toId, amount) => {
    const updatedTankers = JSON.parse(JSON.stringify(tankers));
    const fromIndex = updatedTankers.findIndex((t) => t.id === transferDetails.from);
    const toIndex = updatedTankers.findIndex((t) => t.id === toId);
    const fuelType = transferDetails.fuelType;

    if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;

    const available = updatedTankers[fromIndex].fuel[fuelType];
    const capacityLeft = 100 - updatedTankers[toIndex].fuel[fuelType];
    const transferAmount = Math.min(Number(amount), available, capacityLeft);

    if (transferAmount <= 0) return;

    updatedTankers[fromIndex].fuel[fuelType] -= transferAmount;
    updatedTankers[toIndex].fuel[fuelType] += transferAmount;

    setTankers(updatedTankers);
    setModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tankers.map((tanker) => (
        <Tanker
          key={tanker.id}
          data={tanker}
          onTransfer={(type) => handleTransfer(tanker.id, type)}
        />
      ))}
      {modalOpen && (
        <TransferModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={executeTransfer}
          tankers={tankers}
          fromId={transferDetails.from}
          fuelType={transferDetails.fuelType}
        />
      )}
    </div>
  );
}

export default Dashboard;
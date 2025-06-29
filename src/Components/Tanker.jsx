import React from "react";
import FuelGauge from "./FuelGauge";

function Tanker({ data, onTransfer }) {
  const fuelColors = {
    Diesel: "#FFD700",   // Yellow
    Electric: "#00BFFF", // Blue
    Hybrid: "#32CD32",   // Green
    Petrol: "#FF69B4",   // Pink
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl p-5 mb-8 shadow-2xl border-2 border-cyan-500 hover:shadow-cyan-400 transition-all">
      <h2 className="text-2xl font-bold mb-4 text-cyan-200">Tanker #{data.id}</h2>

      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Buttons and fuel controls on the left */}
        <div className="flex flex-wrap gap-3 justify-start flex-1">
          {Object.keys(data.fuel).map((type) => (
            <button
              key={type}
              onClick={() => onTransfer(type)}
              className="fuel-button"
            >
              Transfer {type} ({data.fuel[type]}%)
            </button>
          ))}
        </div>

        {/* Pie chart on the right */}
        <div className="w-40 h-40">
          <FuelGauge data={data.fuel} colors={fuelColors} />
        </div>
      </div>
    </div>
  );
}

export default Tanker;
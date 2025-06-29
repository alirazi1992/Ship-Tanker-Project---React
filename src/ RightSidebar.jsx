import React from "react";
import FuelGauge from "./FuelGauge";

const colors = {
  Diesel: "#FFD700",
  Electric: "#00BFFF",
  Hybrid: "#32CD32",
  Petrol: "#FF4500",
};

function RightSidebar({ tankers }) {
  return (
    <div className="space-y-6">
      {tankers.map((tanker) => (
        <div key={tanker.id} className="text-center">
          <h3 className="font-bold mb-2 text-cyan-200">Tanker #{tanker.id}</h3>
          <div className="w-full h-40">
            <FuelGauge data={tanker.fuel} colors={colors} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightSidebar;
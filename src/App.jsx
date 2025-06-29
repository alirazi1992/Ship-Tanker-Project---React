import React from "react";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4">
      <h1 className="text-4xl font-extrabold text-cyan-300 text-center mt-10 mb-6">
        🚢 Ship Fuel Pro Dashboard
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;




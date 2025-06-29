import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

function FuelGauge({ data, colors }) {
  // Convert data object to array format for chart
  const chartData = Object.entries(data).map(([type, value]) => ({
    name: type,
    value: value,
  }));

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            paddingAngle={3}
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[entry.name]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "10px",
              color: "#e0f2f1",
              fontSize: "0.875rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FuelGauge;
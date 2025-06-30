import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function FuelGauge({ data, colors }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value: value,
  }));

  const colorList = Object.entries(data).map(([key]) => colors[key]);

  return (
    <div style={{ width: 200, height: 200 }}>
      <PieChart width={200} height={200}>
        <Pie
          data={chartData}
          dataKey="value"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          isAnimationActive={true}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorList[index]} stroke="#000" />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ backgroundColor: "#111827", border: "none", borderRadius: 10 }}
          itemStyle={{ color: "#ffffff", fontWeight: "bold" }}
          formatter={(value, name) => [`${value}`, `${name}`]}
        />
      </PieChart>
    </div>
  );
}

export default FuelGauge;

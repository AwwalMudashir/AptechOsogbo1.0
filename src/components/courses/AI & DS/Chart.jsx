import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { country: "USA", AIAdoption: 75 },
  { country: "China", AIAdoption: 85 },
  { country: "UK", AIAdoption: 65 },
  { country: "Germany", AIAdoption: 60 },
  { country: "India", AIAdoption: 70 },
];

const AIAdoptionChart = () => {
  return (
    <div className="w-full h-96">
      <h2 className="text-left text-[#A60000]  text-3xl font-semibold mb-4">AI Adoption Rate by Country</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" className="cursor-pointer">
          <XAxis type="number" />
          <YAxis dataKey="country" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="AIAdoption" fill="#FFB900" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AIAdoptionChart;

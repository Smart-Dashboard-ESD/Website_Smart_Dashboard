import React from "react";
import Chart from "react-apexcharts";

export default function LineChart() {
  const options = {
    chart: {
      id: "statistik-customer",
    },
    xaxis: {
      categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
  };

  const series = [
    {
      name: "Kuartal 4",
      data: [300, 510, 1000, 250, 750, 500, 250, 780, 500, 800],
    },
  ];
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width={700}
        height={225}
      />
    </div>
  );
}

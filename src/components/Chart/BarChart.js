import React from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  const options = {
    chart: {
      id: "statistik-customer",
    },
    xaxis: {
      categories: [
        "1/10/22",
        "8/10/22",
        "16/10/22",
        "23/10/22",
        "30/10/22",
        "6/11/22",
        "13/11/22",
        "21/11/22",
        "28/11/22",
        "9/12/22",
      ],
    },
  };

  const series = [
    {
      name: "Kuartal 4",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150],
    },
  ];

  return (
    <div className="ml-[35px]">
      <Chart
        options={options}
        series={series}
        type="bar"
        width={600}
        height={200}
      />
    </div>
  );
}

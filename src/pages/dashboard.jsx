import React, { useState } from "react";
import Chart from "react-apexcharts";
function Dashboard() {
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [0, 45, 50, 49, 60, 70, 91, 4],
    },
    {
      name: "series-3",
      data: [40, 45, 50, 49, 60, 70, 30, 91],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    title: {
      text: "GRAFIK SAMPAH",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const label = {
    labels: ["A", "B", "C", "D", "E"],
  };
  const optionDonut = {};

  return (
    <div>
      {/* component */}
      <div className="flex flex-col items-center text-center gap-5 my-5">
        <span>
          Home {">"} <span className="text-yellow-500">Dashboard</span>
        </span>
        <h1 className="text-3xl font-semibold">Smart Dashboard</h1>
        <h1 className=" font-normal">
          Sustainable Life,Sustainable Environtment
        </h1>
      </div>
      <div className="ml-auto mb-6 ">
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 grid-cols-2   w-11/12 mx-auto">
          <div class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-50 dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Nasabah
                </p>
                <p class="text-lg mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  100
                </p>
                <span class="text-sm font-normal text-gray-700 dark:text-gray-200">
                  <span class="text-green-300 font-medium">3.48% </span>since
                  last month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-6 2xl:container">
          <div className="grid grid-rows md:grid-cols-2  gap-6  ">
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="450"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="450"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <Chart
                    options={optionDonut}
                    series={[44, 55, 41, 17, 15]}
                    label={["A", "B", "C", "D", "E"]}
                    type="donut"
                    width="450"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

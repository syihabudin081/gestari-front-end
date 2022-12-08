import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
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




  const optionDonut = {
    width: "600px",
  };

  return (
    <div>
      {/* component */}
      <div className="flex flex-col items-center text-center gap-5 my-5">
        <span>
          <Link to="/"> Home</Link> {">"}{" "}
          <span className="text-yellow-500">Dashboard</span>
        </span>
        <h1 className="text-3xl font-semibold">Smart Dashboard</h1>
        <h1 className=" font-normal">
          Sustainable Life,Sustainable Environtment
        </h1>
      </div>
      <div className="ml-auto mb-6 ">
        <div className="grid gap-6 m-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total clients
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  6389
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Account balance
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  $ 46,760.89
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  New sales
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  376
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Pending contacts
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  35
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-6 2xl:container">
          <div className="grid grid-rows md:grid-cols-3  gap-6  ">
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white w-3/4 md:w-full">
                <div>
                  <Chart options={options} series={series} type="bar" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white w-3/4 md:w-full">
                <div>
                  <Chart options={options} series={series} type="line"  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white w-3/4 md:w-full">
                <div>
                  <Chart
                    options={optionDonut}
                    series={[44, 55, 41, 17, 15]}
                    label={["A", "B", "C", "D", "E"]}
                    type="donut"
                    
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

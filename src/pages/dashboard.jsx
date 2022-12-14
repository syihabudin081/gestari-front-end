import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
function Dashboard() {
  const series = [
    {
      name: "Plastik",
      data: [376, 924, 376, 200, 200],
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
      categories: ["Plastik", "Kertas", "Kaca", "Logam", "Khusus"],
    },
  };
  const lineoptions = {
    chart: {
      id: "line",
    },
    title: {
      text: "GRAFIK OMSET BANK SAMPAH",
    },
    xaxis: {
      categories:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  };

  const optionDonut = {
    title: {
      text: "Kategori Sampah",
    },
    width: "600px",
  };

  return (
    <div className="">
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
              <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-300 dark:bg-orange-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Nasabah
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  100
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-300 dark:bg-green-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Kertas
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  924
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-300 dark:bg-blue-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Kaca
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  376
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-300 dark:bg-teal-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Khusus
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  200
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-300 dark:bg-blue-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Plastik
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  376
                </p>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
            <div className="p-4 flex items-center">
              <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-300 dark:bg-teal-500 mr-4"></div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Logam
                </p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  200
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
                  <Chart
                    options={lineoptions}
                    series={[
                      {
                        name: "",
                        data: [28000, 29000, 33000, 36000, 32000, 32000, 33000],
                      },
                      {
                        name: "",
                        data: [12000, 11000, 14000, 18000, 17000, 13000, 13000],
                      },
                    ]}
                    type="line"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white w-3/4 md:w-full">
                <div>
                  <Chart
                    options={optionDonut}
                    series={[44, 55, 41, 17, 15]}
                    label={["Plastik", "Kertas", "Kaca", "Logam", "Khusus"]}
                    
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

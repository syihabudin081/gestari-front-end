import React from "react";
import { Link } from "react-router-dom";

function Statistics() {
  return (
   <>
<div className="grid gap-6 m-10 md:grid-cols-2 xl:grid-cols-4">
  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-300 dark:bg-orange-500 mr-4">
       
      </div>
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
      <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-300 dark:bg-green-500 mr-4">
       
      </div>
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
      <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-300 dark:bg-blue-500 mr-4">
        
      </div>
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
      <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-300 dark:bg-teal-500 mr-4">
       
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Total Khusus
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">200</p>
      </div>
    </div>
  </div>
  <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-slate-100 dark:bg-gray-800">
    <div className="p-4 flex items-center">
      <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-300 dark:bg-blue-500 mr-4">
        
      </div>
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
      <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-300 dark:bg-teal-500 mr-4">
       
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Total Logam
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">200</p>
      </div>
    </div>
  </div>
</div>
<div className="m-10">
<Link to="/dashboard">
<h1 className="font-semibold text-end text-green-400 w-auto">Lihat Selengkapnya...</h1>
</Link>
</div>
</>
  );
}

export default Statistics;

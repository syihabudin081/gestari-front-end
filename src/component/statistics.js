import React from "react";

function Statistics() {
  return (
    <div class=" w-full items-center my-10">
      <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
        Statistic
      </h2>
      <div class="flex mb-7">
        <div class="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 w-11/12">
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Nasabah
                </p>
                <p class="text-lg mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  100
                </p>
                <span class="text-sm font-normal text-gray-700 dark:text-gray-200">
                <span class="text-green-300 font-medium">3.48% </span>since last month
                </span>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Kertas
                </p>
                <p class="text-lg mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  3021
                </p> 
                <span class="text-sm font-normal text-gray-700 dark:text-gray-200">
                <span class="text-green-300 font-medium">3.48% </span>since last month
                </span>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  New sales
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  376
                </p>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Pending contacts
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  35
                </p>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Nasabah
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  100
                </p>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Account balance
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  $ 46,760.89
                </p>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  New sales
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  376
                </p>
              </div>
            </div>
          </div>
          <div class="min-w-0 rounded-lg drop-shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <div class="p-4 flex items-center">
              <div class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="w-full">
                <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Pending contacts
                </p>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  35
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center">
        <a href="/dashboard" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-1/2">
          Discover more
        </a>
      </div>
    </div>
  );
}

export default Statistics;

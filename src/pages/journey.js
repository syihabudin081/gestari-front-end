import React from "react";
import Mainnews from "../component/mainnews";
import Sidebarnews from "../component/sidebarnews";

function Journey() {
  return (
    <>
      <div class="flex flex-col items-center text-center gap-5 my-5">
        <span>
          Home {">"} <span class="text-yellow-500">Gestari's Journey</span>
        </span>
        <h1 class="text-3xl font-semibold">Bank Sampah Gestari</h1>
        <h1 class=" font-normal">Sustainable Life, Sustainable Environtment</h1>
      </div>{" "}
      <form class="md:w-1/2 w-3/4 mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div class="md:flex md:flex-row flex flex-col ">
      <Mainnews/>
        <Sidebarnews />
      </div>
    </>
  );
}

export default Journey;

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "flowbite";
function Homecatalogcard() {
  return (
    <div class="bg-[#F5F5F5] h-full flex flex-col justify-center py-10">
      <div class="flex w-3/4 mx-auto items-center justify-between ">
        <div class="flex flex-col gap-3">
          <h1 class="text-3xl font-semibold">Katalog Sampah</h1>
          <h2 class="text-lg text-slate-500">
            Lihat Jenis Sampah Yang Kami Terima
          </h2>
        </div>
        <div>
          <h1 class="p-2 bg-black text-white font-normal rounded-full">
            Read More...
          </h1>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide relative w-11/12 mx-auto"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-11/12 mx-auto">
              <div class="max-w-sm bg-yellow-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <h1 class="p-3 bg-yellow-300 w-1/4 text-center rounded-full m-3">
                  Plastik
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2666/2666681.png"
                  class="w-32 self-center justify-center m-10"
                />
              </div>

              <div class="max-w-sm bg-red-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <h1 class="p-3 bg-red-300 w-1/4 text-center rounded-full m-3">
                  Logam
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/646/646671.png"
                  class="w-32 self-center justify-center m-10"
                />
              </div>
              <div class="max-w-sm bg-green-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <h1 class="p-3 bg-green-300 w-1/4 text-center rounded-full m-3">
                  Kertas
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
                  class="w-32 self-center justify-center m-10"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item  relative float-left w-full">
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-11/12 mx-auto">
              <div class="max-w-sm bg-purple-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <h1 class="p-3 bg-purple-300 w-1/4 text-center rounded-full m-3">
                  Khusus
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3134/3134212.png"
                  class="w-32 self-center justify-center m-10"
                />
              </div>

             
            </div>
          </div>
          
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat bg-black rounded-full"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat bg-black rounded-full"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Homecatalogcard;

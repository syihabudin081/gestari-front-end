/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../assets/logo2.png'
function Aboutuscaroussel() {
  return (
    <div
    id="carouselExampleCaptions"
    class="carousel slide relative"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div class="carousel-item active relative float-left w-full">
        <div class="w-full h-screen">
          <div class="w-full h-full flex flex-col-reverse md:flex-row items-center justify-evenly bg-[#DCF2D4]">
            <div class="flex flex-col gap-6 ">
              <h1 class="text-6xl text-left font-bold">
                Apa Itu <br></br>Gestari?
              </h1>
            </div>
            <div>
              <img src={logo} class="w-32 md:w-96" />
            </div>
          </div>
        </div>
        <div class="carousel-caption hidden md:block absolute text-center">
          <h5 class="text-xl text-black">1/2</h5>
        </div>
      </div>
      <div class="carousel-item relative float-left w-full">
        <div class="w-full h-screen bg-[#DCF2D4]">
          <div class="w-full h-full flex flex-col-reverse md:flex-row items-center justify-evenly ">
            <div class="flex flex-col gap-6 md:w-1/4">
              <p class="md:text-2xl text-sm md:text-left text-center font-normal">
                Gestari merupakan salah satu komunitas pengelola sampah di
                Dusun Gesikan, Sewon, Bantul yang komunitas pengelolaan sampah
                terpadu, reduse, reuse, recycle, memanfaatkan sampah, sampah
                jadi berkah, sampah jadi rupiah, bebas sampah, cara mengolah
                sampah, komposter, membuat kompos, mengelola sampah dapur,
                sampah organik, dan sampah anorganik.
              </p>
            </div>
            <div>
              <img src={logo} class="w-32 md:w-96" />
            </div>
          </div>
        </div>
        <div class="carousel-caption hidden md:block absolute text-center">
          <h5 class="text-xl text-black">2/2</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat bg-black p-3 rounded-full"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat bg-black p-3 rounded-full"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Aboutuscaroussel
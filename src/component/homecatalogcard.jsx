/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Homecatalogcard() {
  return (
    <div class="bg-[#F5F5F5] h-full flex flex-col justify-center py-10 gap-5">
      <div class="flex w-3/4 mx-auto items-center justify-between ">
        <div class="flex flex-col gap-3">
          <h1 class="text-3xl font-semibold">Katalog Sampah</h1>
          <h2 class="text-lg text-slate-500">
            Lihat Jenis Sampah Yang Kami Terima
          </h2>
        </div>
        <div>
          <h1 class="p-2  text-yellow-400 font-normal rounded-full">
            Read More...
          </h1>
        </div>
      </div>
      <div class="w-11/12  mx-auto ">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="p-5"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div class="max-w-sm bg-yellow-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col w-[95%] mx-auto">
            <h1 class="p-3 bg-yellow-300 w-1/4 text-center rounded-full m-3">
              Plastik
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2666/2666681.png"
              class="w-32 self-center justify-center m-10"
            />
          </div>

          <div class="max-w-sm bg-red-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  w-[95%] mx-auto">
            <h1 class="p-3 bg-red-300 w-1/4 text-center rounded-full m-3">
              Logam
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/646/646671.png"
              class="w-32 self-center justify-center m-10"
            />
          </div>
          <div class="max-w-sm bg-green-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  w-[95%] mx-auto">
            <h1 class="p-3 bg-green-300 w-1/4 text-center rounded-full m-3">
              Kertas
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
              class="w-32 self-center justify-center m-10"
            />
          </div>
          <div class="max-w-sm bg-red-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  w-[95%] mx-auto">
            <h1 class="p-3 bg-red-300 w-1/4 text-center rounded-full m-3">
              Logam
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/646/646671.png"
              class="w-32 self-center justify-center m-10"
            />
          </div>

          <div class="max-w-sm bg-purple-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  w-[95%] mx-auto">
            <h1 class="p-3 bg-purple-300 w-1/4 text-center rounded-full m-3">
              Khusus
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3134/3134212.png"
              class="w-32 self-center justify-center m-10"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Homecatalogcard;

/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function Homecatalogcard() {
  return (
    <div className="bg-[#F5F5F5]  h-full flex flex-col justify-center py-10 gap-5  items-center content-center">
      <div className="flex w-11/12 mx-auto items-center justify-between  ">
        <div className="flex flex-col gap-3 ">
          <h1 class="md:text-3xl text-lg font-semibold">Katalog Sampah</h1>
          <h2 class="md:text-lg text-base text-slate-500">
            Lihat Jenis Sampah Yang Kami Terima
          </h2>
        </div>
        <div>
          <Link to="/catalog" className="p-2 md:text-sm text-xs  text-yellow-400 font-normal rounded-full">
            Read More...
          </Link>
        </div>
      </div>

   
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
  infinite
  itemClass="pr-5 py-5"
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    superdesktop: {
      breakpoint: {
        max: 4000,
        min: 2000
      },
      items: 4,
      partialVisibilityGutter: 0
    },
    desktop: {
      breakpoint: {
        max: 2000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
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
  <div class="hover:scale-110 max-w-sm m-4  bg-yellow-100 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
          <h1 class="p-3 bg-yellow-300 w-1/4 text-center rounded-full m-3">
            Plastik
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2666/2666681.png"
            class="w-32 self-center justify-center m-10"
          />
        </div>

        <div class="hover:scale-110 max-w-sm m-4 bg-red-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          <h1 class="p-3 bg-red-300 w-1/4 text-center rounded-full m-3">
            Logam
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/646/646671.png"
            class="w-32 self-center justify-center m-10"
          />
        </div>
        <div class="hover:scale-110 max-w-sm m-4 bg-green-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          <h1 class="p-3 bg-green-300 w-1/4 text-center rounded-full m-3">
            Kertas
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
            class="w-32 self-center justify-center m-10"
          />
        </div>
        <div class="hover:scale-110 max-w-sm m-4 bg-blue-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          <h1 class="p-3 bg-blue-300 w-1/4 text-center rounded-full m-3">
            Kaca
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3283/3283610.png"
            class="w-32 self-center justify-center m-10"
          />
        </div>

        <div class="hover:scale-110 max-w-sm m-4 bg-purple-200 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
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
  );
}

export default Homecatalogcard;

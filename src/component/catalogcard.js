/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import datakertas from "../data/datakertas.json"
import "react-multi-carousel/lib/styles.css";
import axios from "axios";



function Catalogcard() {

const [data,setData] = useState();


  let fetchdata = async () => {
    console.log("halo");
    try {
      let res = await axios.get(
        "https://hammerhead-app-zfi4g.ondigitalocean.app/katalog"
      );
      
      setData(res.data.data)
    

    } catch (error) {
      console.log(error.message);
    }

  };





  useEffect(() => {
    fetchdata();

  }, []);




  return (
    <>
      <div className="flex flex-col justify-center items-center content-center pb-10 gap-5">
        <h1 class=" px-5 font-semibold text-lg p-2 bg-[#F5F5F5] rounded-full">
          Kertas
        </h1>

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
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
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
          {datakertas.map((data, index) => {
            return (
              <>
                <div class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                  <img
                    src={data.url}
                    class="w-32 self-center justify-center m-10 mb-1"
                  />
                  <h1 class="p-3  w-1/4 text-center text-xl font-semibold  mx-auto mb-10">
                    {data.name}
                  </h1>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>{" "}
      {/* <div>
        <h1 class="w-11/12 mx-auto text-left px-5 font-semibold text-lg">
          Plastik
        </h1>
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
            {dataplastik.map((data, index) => {
              return (
                <>
                  <div class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <img
                      src={data.url}
                      class="w-32 self-center justify-center m-10 mb-1"
                    />
                    <h1 class="p-3  text-center text-xl font-semibold  mx-auto mb-10">
                      {data.name}
                    </h1>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div>
        <h1 class="w-11/12 mx-auto text-left px-5 font-semibold text-lg">
          Logam
        </h1>
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
            {datalogam.map((data, index) => {
              return (
                <>
                  <div class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <img
                      src={data.url}
                      class="w-32 self-center justify-center m-10 mb-1"
                    />
                    <h1 class="p-3  text-center text-xl font-semibold  mx-auto mb-10">
                      {data.name}
                    </h1>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div>
        <h1 class="w-11/12 mx-auto text-left px-5 font-semibold text-lg">
          Kaca
        </h1>
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
            {datakaca.map((data, index) => {
              return (
                <>
                  <div class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <img
                      src={data.url}
                      class="w-32 self-center justify-center m-10 mb-1"
                    />
                    <h1 class="p-3  text-center text-xl font-semibold  mx-auto mb-10">
                      {data.name}
                    </h1>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div>
        <h1 class="w-11/12 mx-auto text-left px-5 font-semibold text-lg">
          Logam
        </h1>
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
            {datakhusus.map((data, index) => {
              return (
                <>
                  <div class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <img
                      src={data.url}
                      class="w-32 self-center justify-center m-10 mb-1"
                    />
                    <h1 class="p-3  text-center text-xl font-semibold  mx-auto mb-10">
                      {data.name}
                    </h1>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div> */}
    </>
  );
}

export default Catalogcard;

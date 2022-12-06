/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
function Newscard() {
  //const [isAuthorize, setIsAuthorize] = useState(false)
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  });

  const getNews = async () => {
    const news = await fetch(
      `https://berita-indo-api.vercel.app/v1/cnn-news?title=sampah+plastik`
    ).then((response) => response.json());
    // console.log(users.data);
    setNews( news?.data );
  }


  return (
    <>
      <div class="w-11/12 mx-auto flex flex-col items-center justify-center my-16 ">
        <h1 class="text-center text-2xl font-semibold">
          Berita Lingkungan Hari Ini
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
            itemClass="p-3 md:p-5"
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
            {news.length > 0 && 
              news.slice(0, 15).map((berita, index) => {
                return (
                  <div key={index} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href={berita.link} target="_blank" rel="noopener noreferrer">
                      <img
                        class="rounded-t-lg"
                        src={berita.image.small}
                        alt=""
                        />
                    </a>
                    <div class="p-2 sm:p-3 md:p-5">
                      <a href={berita.link} target="_blank" rel="noopener noreferrer">
                        <h5 class="line-clamp-2 mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {berita.title}
                        </h5>
                      </a>
                      <p class="line-clamp-3 hover:line-clamp-none mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {berita.contentSnippet}
                      </p>
                      <a
                        href={berita.link} target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Read more
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Newscard;

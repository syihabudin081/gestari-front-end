import Carousel from "react-multi-carousel";

export default function CarouselItem({ groupedData, title }) {
  console.log(groupedData);
  return (
    <div className="flex flex-col justify-center items-center content-center pb-10 gap-5">
      <h1 class=" px-5 font-semibold text-lg p-2 bg-[#F5F5F5] rounded-full">
        {title}
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
        {groupedData.map((item) => {
          return (
            <div
              key={item.id}
              class="max-w-sm bg-[#F5F5F5] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col"
            >
              <div
                class="flex flex-col justify-center items-center content-center"
                style={{ height: "200px" }}
              >
                <img
                  src={item.image}
                  class="w-32 self-center justify-center m-10 mb-1 object-contain"
                  height="200px"
                  width="100%"
                />
              </div>
              <h1 class="p-3  w-1/4 text-center text-xl font-semibold  mx-auto mb-10">
                {item.name}
              </h1>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

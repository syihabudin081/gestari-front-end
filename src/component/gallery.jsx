import axios from "axios";
import React, { useEffect, useState } from "react";

function Gallery() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchdata = async () => {
    let res = await axios.get(
      "https://hammerhead-app-zfi4g.ondigitalocean.app/journey"
    );
    console.log("succes");
    setData(res.data.data);
  };

  return (
    <div class="py-10 ">
      <h1 class="text-3xl font-medium text-center">Our Activity</h1>
      <h1 class="text-lg text-center ">Kegiatan Yang Berlangsung Di Gestari</h1>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap  -m-1 md:-m-2">
            {data != null &&
              data.map((res, index) => {
                return (
                  <div className="flex flex-wrap w-1/3" >
                    <div className="w-full p-1 md:p-2" key={res.id}>
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-[446px] h-[310px] rounded-lg"
                        src={res.image}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

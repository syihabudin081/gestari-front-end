import axios from "axios";
import React, { useEffect, useState } from "react";

function Sidebarnews() {
  const [data, setData] = useState();

  let fetchdata = async () => {
    let res = await axios.get(
      "https://hammerhead-app-zfi4g.ondigitalocean.app/journey"
    );
    setData(res.data.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container md:my-16 mx-auto md:w-[40%]">
      <section className="mb-32 text-gray-800 text-center md:text-left">
        {data != null &&
          data.map((res, index) => {
            return (
              <div className="flex flex-wrap shadow py-5 mb-2 rounded justify-center items-center" key={res.id}>
                <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12    md:mb-0 ml-auto">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={res.image}
                      className="w-full h-28 object-cover"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto ">
                  <h5 className="text-lg font-bold ">
                    {res.title}
                  </h5>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Sidebarnews;

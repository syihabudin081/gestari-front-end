import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.png";

function Mainnews() {
  const [data, setData] = useState();

  let fetchdata = async () => {
    let res = await axios.get(
      "https://hammerhead-app-zfi4g.ondigitalocean.app/journey"
    );
    setData(res.data.data);
  };

  let changeDate = (d) => {
    let date = d.substring(0, 10);
   
    return date;
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container mt-16 mb-0 md:my-16 px-6 mx-auto  md:w-[60%]">
      {/* Section: Design Block */}
      <section className="mb-32 text-gray-800 text-center">
        <div className="grid lg:grid-cols-1 gap-6 xl:gap-x-12">
          {data != null &&
            data.map((res, index) => {
              return (
                <>
                  <div className="mb-6 lg:mb-0 shadow p-5 rounded" key={res.id}>
                    <div>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={res.image}
                          className="w-full md:h-[520px] object-cover"
                          alt="Louvre"
                        />
                        <a href="#!">
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)"
                            }}
                          />
                        </a>
                      </div>
                      <h5 className="md:text-lg font-bold mb-3">{res.title}</h5>
                      <div className="mb-3 text-green-600 font-medium text-sm flex items-center justify-center">
                        <img className="w-6 h-6 mr-2" src={logo} alt="logo" />
                        Gestari
                      </div>
                      <p className="text-gray-500 mb-6">
                        <small>
                          Published <u>{changeDate(res.date)}</u>
                        </small>
                      </p>
                      <p className="text-gray-500 text-left">
                        {res.description}
                      </p>
                    </div>
                  </div>
                  
                </>
              )
            })}

          
        </div>
      </section>
    </div>
  );
}

export default Mainnews;

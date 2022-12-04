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
    console.log(date);
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
                  <div className="mb-6 lg:mb-0 shadow p-5 rounded">
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
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
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
                  ;
                </>
              );
            })}

          {/* <div className="mb-6 lg:mb-0">
            <div>
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Exhibition in Paris</h5>
              <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                  />
                </svg>
                Art
              </div>
              <p className="text-gray-500 mb-6">
                <small>
                  Published <u>12.01.2022</u> by
                  <a href className="text-gray-900">
                    Halley Frank
                  </a>
                </small>
              </p>
              <p className="text-gray-500">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-0">
            <div>
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  />
                </a>
              </div>
              <h5 className="text-lg font-bold mb-3">Stock market boom</h5>
              <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                  />
                </svg>
                Business
              </div>
              <p className="text-gray-500 mb-6">
                <small>
                  Published <u>10.01.2022</u> by
                  <a href className="text-gray-900">
                    Joe Svan
                  </a>
                </small>
              </p>
              <p className="text-gray-500">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Mainnews;

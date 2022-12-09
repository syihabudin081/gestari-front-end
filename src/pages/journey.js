import React, { useState, useEffect } from "react";
import Mainnews from "../component/mainnews";
import Sidebarnews from "../component/sidebarnews";
import axios from "axios";
import logo from "../assets/logo2.png";
function Journey() {
  const [data, setData] = useState();
  const [searchStatus, setsearchStatus] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [value, setValue] = useState("");

  let fetchdata = async () => {
    let res = await axios.get(
      "https://hammerhead-app-zfi4g.ondigitalocean.app/journey"
    );
    setData(res.data.data);
  };

  let changeDate = (d) => {
    let date = d.substring(0, 10);
    // console.log(date);
    return date;
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  const handleChange = (event) => {
    let value = event.target.value.toLowerCase();
    setValue(value);
  };

  const handleSearch = () => {
    let result = data.filter((e) => {
      return e.title.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    console.log(result);
    setFilteredData(result);
    setsearchStatus(true);
  };

  return (
    <div className="">
      <div class="flex flex-col items-center text-center gap-5 my-5">
        <span>
          Home {">"} <span class="text-yellow-500">Gestari's Journey</span>
        </span>
        <h1 class="text-3xl font-semibold">Bank Sampah Gestari</h1>
        <h1 class=" font-normal">Sustainable Life, Sustainable Environtment</h1>
      </div>

      <div class="md:w-1/2 w-3/4 mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative flex gap-2">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Journeys..."
            value={value}
            onChange={handleChange}
            required
          />
          <button
            class="text-white  bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-2 md:px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSearch}
          >
            Search
          </button>{" "}
          <button
            class="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-2 md:px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              setsearchStatus(false);
              setValue("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {searchStatus ? (
        <div className="container my-24 px-6 mx-auto h-screen">
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 text-center">Result</h2>
            <div className="grid lg:grid-cols-2 gap-6 xl:gap-x-12">
              {filteredData.map((res, index) => {
                return (
                  <div className="mb-6 lg:mb-10 shadow-md pb-10">
                    <div>
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover  ripple shadow-lg rounded-lg mb-6"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={res.image}
                          className="w-full md:h-[460px] object-cover"
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
                      <h5 className="text-lg font-bold mb-3">{res.title}</h5>
                      <div className="mb-3 text-green-600 font-medium text-sm flex items-center justify-center">
                        <img className="w-6 h-6 mr-2" src={logo} alt="logo" />
                        Gestari
                      </div>
                      <p className="text-gray-500 mb-6">
                        <small>
                          Published <u>{changeDate(res.date)}</u>
                        </small>
                      </p>
                      <p className="text-gray-500">{res.description}</p>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </section>
        </div>
      ) : (
        <div class="md:flex md:flex-row flex flex-col ">
          <Mainnews />
          <Sidebarnews />{" "}
        </div>
      )}
    </div>
  );
}

export default Journey;

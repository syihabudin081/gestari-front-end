/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo2 from "../assets/logo2.png";
// import Gallery from "../component/gallery";
import Homecatalogcard from "../component/homecatalogcard";
import Newscard from "../component/newscard";

function Landingpage() {
  return (
    <>
      <div class="w-full h-screen ">
        <div class="w-full h-full flex flex-col-reverse md:flex-row items-center justify-evenly ">
          <div class="flex flex-col gap-6 md:text-left text-center">
            <h1 class="text-xl md:text-6xl text-center md:text-left font-bold">
              Bank Sampah <br></br>Gestari
            </h1>
            <h2 class="text-lg md:text-3xl  font-medium">
              Sustainable Life, Sustainable<br></br> Environtment
            </h2>
            <button
              type="button"
              class="self-center justify-center md:self-auto md:justify-start text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-1/2"
            >
              Selengkapnya
            </button>
          </div>
          <div>
            <img src={logo2} class="w-32 md:w-96" />
          </div>
        </div>
        <div class="absolute m-auto left-0 right-0 bottom-0  -z-40  ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#DCF2D4"
              fill-opacity="1"
              d="M0,160L15,176C30,192,60,224,90,250.7C120,277,150,299,180,288C210,277,240,235,270,186.7C300,139,330,85,360,74.7C390,64,420,96,450,90.7C480,85,510,43,540,53.3C570,64,600,128,630,160C660,192,690,192,720,202.7C750,213,780,235,810,240C840,245,870,235,900,208C930,181,960,139,990,154.7C1020,171,1050,245,1080,256C1110,267,1140,213,1170,176C1200,139,1230,117,1260,138.7C1290,160,1320,224,1350,229.3C1380,235,1410,181,1425,154.7L1440,128L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <Newscard />
      <Homecatalogcard />
      {/* <Gallery/> */}
    </>
  );
}

export default Landingpage;

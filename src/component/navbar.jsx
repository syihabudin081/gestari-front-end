/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navbarcomponent = () => {
  return (
    //       <nav class="bg-gradient-to-r from-green-400 via-green-300 to-yellow-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  z-20 ">
    //   <div class="container flex flex-wrap items-center justify-between mx-auto px-20">
    //     <a href="https://flowbite.com/" class="flex items-center">
    //         <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
    //         <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Gestari</span>
    //     </a>
    //     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //       <span class="sr-only">Open main menu</span>
    //       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //     </button>
    //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
    //         <Link to="/">
    //           <a href="#" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent   dark:text-white">Home</a>
    //         </Link>
    //         <Link to="/aboutus">
    //           <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
    //         </Link>
    //         <Link to="/catalog">
    //           <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Catalog</a>
    //         </Link>
    //         <li>
    //           <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</a>
    //         </li>
    //         <li>
    //           <a href="#" class="block py-2 pl-3 pr-4 text-yellow-300 bg-white rounded-full  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar
      fluid={true}
      rounded={true}
      class="bg-gradient-to-r from-green-400 via-green-300 to-yellow-300 border-gray-200 px-2 sm:px-10 py-6  dark:bg-gray-900  z-20 top-0"
    >
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
          Gestari
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link >
          <Link to="/">
            <a
             
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </a>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/aboutus">
            <a
              
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About Us
            </a>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/catalog">
            <a
         
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Catalog
            </a>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/journey">
            <a
         
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              News
            </a>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/contactus">
            <a
             
              class="block py-2 pl-3 pr-4 text-yellow-300 bg-white rounded-full  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact Us
            </a>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbarcomponent;

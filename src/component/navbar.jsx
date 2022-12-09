/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navbarcomponent = () => {
  return (
   
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
          <Link to="/" className="">
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

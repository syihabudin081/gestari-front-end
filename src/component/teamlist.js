/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Teamlist() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
            Our team
          </h2>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
              src="https://hammerhead-app-zfi4g.ondigitalocean.app/images/Hammam.jpg"
              alt="Bonnie Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Hammam</a>
            </h3>
            <p>Backend Developer</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-right-top"
              src="https://hammerhead-app-zfi4g.ondigitalocean.app/images/Agil.jpg"
              alt="Helene Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Agil</a>
            </h3>
            <p>Front End Developer</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full object-cover "
              src="https://hammerhead-app-zfi4g.ondigitalocean.app/images/Syifa.jpg"
              alt="Helene Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Syifa</a>
            </h3>
            <p>UI/UX Designer</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full object-cover "
              src="https://hammerhead-app-zfi4g.ondigitalocean.app/images/Indra.png"
              alt="Helene Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Indra</a>
            </h3>
            <p>CTO</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full object-cover "
              src="https://hammerhead-app-zfi4g.ondigitalocean.app/images/Tika.jpg"
              alt="Helene Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Tika</a>
            </h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamlist;

import React from "react";
import logo from "../assets/logo2.png";
import { Flowbite } from "flowbite-react";
import "flowbite";
import Aboutuscaroussel from "../component/aboutuscaroussel";
import Statistics from "../component/statistics";
import Teamlist from "../component/teamlist";
function AboutUs() {
  return (
<>
<Aboutuscaroussel/>
<Statistics/>
<Teamlist/>
</>

  );
}

export default AboutUs;

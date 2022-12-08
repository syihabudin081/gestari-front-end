import React, { useEffect } from "react";

import Aboutuscaroussel from "../component/aboutuscaroussel";
import Statistics from "../component/statistics";
import Teamlist from "../component/teamlist";


function AboutUs() {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
  
  return (
<>
<Aboutuscaroussel/>
<Statistics/>
<Teamlist/>
</>

  );
}

export default AboutUs;

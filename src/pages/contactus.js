import React from "react";
import Contactuscomponent from "../component/contactuscomponent";
import Mapsdisplay from "../component/mapsdisplay";

function Contactus() {
  return (
    <>
      <div class="flex flex-col items-center text-center gap-5 my-5">
        <span>
          Home {">"} <span class="text-yellow-500">Gestari's Journey</span>
        </span>
        <h1 class="text-3xl font-semibold">Bank Sampah Gestari</h1>
        <h1 class=" font-normal">Sustainable Life, Sustainable Environtment</h1>
      </div>
  <Mapsdisplay/>
<Contactuscomponent/>
    </>
  );
}

export default Contactus;

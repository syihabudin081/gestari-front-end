


import Catalogcard from "../component/catalogcard";

function Catalog() {




  return (
    <div className="w-[95%] mx-auto pb-10">
      <div className="flex flex-col items-center text-center gap-5 my-5">
        <span>
          Home {">"} <span className="text-yellow-500">Catalog</span>
        </span>
        <h1 className="text-3xl font-semibold">Katalog Sampah</h1>
        <h1 className=" font-normal">
          Diversifikasi jenis sampah membantu mengolah sampah sesuai jenisnya
        </h1>
      </div>

      <Catalogcard  />
    </div>
  );
}

export default Catalog;

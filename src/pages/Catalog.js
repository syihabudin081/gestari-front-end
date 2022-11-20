import React from 'react'
import Cardcaroussel from '../component/cardcaroussel'
import Catalogcard from '../component/catalogcard'

function Catalog() {
  return (
    <div class="w-full h-screen">
    <div class="flex flex-col items-center gap-5 my-5">
    <span>
        Home    {'>'}   <span class="text-yellow-500">Catalog</span>
    </span>
    <h1 class="text-3xl font-semibold">
        Katalog Sampah
    </h1>
    <h1 class=" font-normal">
    Diversifikasi jenis sampah membantu mengolah sampah sesuai jenisnya
    </h1>
    </div>
    <Catalogcard/>


    </div>
  )
}

export default Catalog
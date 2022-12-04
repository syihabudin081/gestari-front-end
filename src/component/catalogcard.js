/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import CarouselItem from "./carouselitem";

function Catalogcard() {
  const [data, setData] = useState();
  const [groupedData, setGroupedData] = useState(null);

  let fetchdata = async () => {
    console.log("halo");
    try {
      let res = await axios.get(
        "https://hammerhead-app-zfi4g.ondigitalocean.app/katalog"
      );

      setData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (data) {
      const newData = data.reduce((group, product) => {
        const { type } = product;
        group[type] = group[type] ?? [];
        group[type].push(product);
        return group;
      }, {});
      setGroupedData(newData);
    }
  }, [data]);

  return (
    <>
      <div>
        {groupedData ? (
          Object.keys(groupedData)?.map((key) => 
            <CarouselItem
              key={key}
              groupedData={groupedData[key]}
              title={key}
            />
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default Catalogcard;

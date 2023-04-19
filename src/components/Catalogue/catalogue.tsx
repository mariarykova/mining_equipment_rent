import React, { useState } from "react";

import data from "../../equipments.json";

import CatalogueCard from "../CatalogueCard/catalogueCard";

import cn from "./catalogue.module.css";

function Catalogue() {
  return (
    <div className={cn.catalogue}>
      <h1>Equipment Catalogue</h1>
      {data.map((item) => {
        return <CatalogueCard equipment={item} />;
      })}
    </div>
  );
}

export default Catalogue;

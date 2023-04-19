import * as React from "react";
import { Equipment } from "../../types";
import cn from "./catalogueCard.module.css";

const CatalogueCard = ({ equipment }: { equipment: Equipment }) => {
  return (
    <div className={cn.card}>
      <div className={cn.photo}>
        <img src={equipment.photo} alt={equipment.type} />
      </div>
      <div className={cn.info}>
        <div className={cn.title}>
          {equipment.type}, {equipment.producer}, {equipment.model}
        </div>
        <div className={cn.characteristics}>
          {equipment.characteristics.map((characteristic) => {
            return (
              <div className={cn.characteristic}>
                <div>{characteristic.characteristic_name}</div>
                <div>{characteristic.characteristic_value}</div>
                <div>{characteristic.characteristic_unit_of_measure}</div>
              </div>
            );
          })}
        </div>
        <div>{equipment.location}</div>
      </div>
      <div className={cn.info_right}>
        <div className={cn.year}>{equipment.year}</div>
        <div>{equipment.producer}</div>
        <div>{equipment.rent_rate} AUD per day</div>
      </div>
    </div>
  );
};

export default CatalogueCard;

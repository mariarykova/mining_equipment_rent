export type EquipmentData = Equipment[];
export interface Equipment {
  equipmentId: number;
  type: string;
  subtype: string;
  producer: string;
  location: string;
  rent_rate: string;
  year: string;
  model: string;
  characteristics: Characteristics[];
  photo: string;
}

export type Characteristics = {
  characteristic_name: string;
  characteristic_unit_of_measure: string;
  characteristic_value: string;
};

export interface IFleet {
  id: string;
  fleetNumber: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status?: string;
  carrierId: string;
  carrierName: string;
  createdAt?: string;
}

export interface IFleetUpdate {
  id: string;
  fleetNumber: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status?: string;
  carrierId: string;
  carrierName: string;
}
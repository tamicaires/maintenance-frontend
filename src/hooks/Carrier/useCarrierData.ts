import { useQuery } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { ICarrier } from "../../interfaces/carrier.interface";

export function useCarrierData() {
  const data = useQuery<ICarrier[]>({
    queryKey: ['carriers'],
    queryFn: CarrierService.getAll,
    staleTime: 60 * 5 * 1000,
  });

  return data;
}
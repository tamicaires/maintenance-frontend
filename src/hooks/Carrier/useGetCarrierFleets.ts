import { useQuery } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { IFleet } from "../../interfaces/fleet.interface";

export function useGetCarrierFleets(carrierId: string) {
  const { data, isLoading } = useQuery<IFleet[]>({
    queryKey: ['carrier', carrierId],
    queryFn: () => CarrierService.getCarrierFleets(carrierId),
    staleTime: 60 * 5 * 1000,
  });

  return { data, isLoading };
}
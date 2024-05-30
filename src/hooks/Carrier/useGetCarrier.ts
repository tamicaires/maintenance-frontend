import { useQuery } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { ICarrier } from "../../interfaces/carrier.interface";

export function useGetCarrierById(carrierId: string) {
  const { data, isLoading } = useQuery<ICarrier>({
    queryKey: ['carrier', carrierId],
    queryFn: () => CarrierService.getById(carrierId),
    staleTime: 60 * 5 * 1000,
  });

  return { data, isLoading };
}
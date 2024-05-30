import { useQuery } from "@tanstack/react-query";
import { IFleet } from "../../interfaces/fleet.interface";
import { FleetService } from "../../services/FleetService/FleetService";

export function useFleetData() {
  const data = useQuery<IFleet[]>({
    queryKey: ['fleets'],
    queryFn: FleetService.getAll,
    staleTime: 60 * 5 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return data;
}
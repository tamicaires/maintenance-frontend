import { useQuery } from "@tanstack/react-query";
import { IFleet } from "../../interfaces/fleet.interface";
import { FleetService } from "../../services/FleetService/FleetService";

export function useGetFleetById(fleetId: string) {
  const { data, isLoading } = useQuery<IFleet>({
    queryKey: ['carrier', fleetId],
    queryFn: () => FleetService.getById(fleetId),
    staleTime: 60 * 5 * 1000,
  });

  return { data, isLoading };
}
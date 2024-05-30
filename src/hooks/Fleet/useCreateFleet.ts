import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { FleetService } from "../../services/FleetService/FleetService";

export function useCreateFleet() {
  const mutate = useMutation({
    mutationFn: FleetService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['fleets']})
    }
  });
  
  return mutate;
}
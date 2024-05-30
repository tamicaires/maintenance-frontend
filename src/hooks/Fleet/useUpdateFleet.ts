import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../services/QueryClient";
import { IFleetUpdate } from "../../interfaces/fleet.interface";
import { FleetService } from "../../services/FleetService/FleetService";

export function useUpdateFleet() {
  const mutate = useMutation({
    mutationFn: ({id, ...data}: IFleetUpdate) => {
      return FleetService.updateById(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['fleets']})
    }, 
    onError: (error) => {
      console.log(error)
    }
  });

  return mutate;
}
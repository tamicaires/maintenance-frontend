import { useMutation } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { queryClient } from "../../services/QueryClient";
import { ICarrierUpdate } from "../../interfaces/carrier.interface";

export function useUpdateCarrier() {
  const mutate = useMutation({
    mutationFn: ({id, ...data}: ICarrierUpdate) => {
      console.log('hook query', data, id)
      return CarrierService.updateById(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['carriers']})
    }, 
    onError: (error) => {
      console.log(error)
    }
  });

  return mutate;
}
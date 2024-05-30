import { useMutation } from "@tanstack/react-query";
import { CarrierService } from "../../services/CarrierService/CarrierService";
import { queryClient } from "../../services/QueryClient";

const useDeleteCarrier = () => {
  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return CarrierService.deleteById(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey:  ["carriers"]})
    }
  });

  return deleteMutation;
};

export default useDeleteCarrier;
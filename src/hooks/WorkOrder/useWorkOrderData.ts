import { useQuery } from "@tanstack/react-query";
import { IWorkOrder } from "../../interfaces/work-order.interface";
import { WorkOrderService } from "../../services/WorkOrderService/WorkOrderService";

export function useWorkOrderData() {
  const data = useQuery<IWorkOrder[]>({
    queryKey: ['work-orders'],
    queryFn: WorkOrderService.getAll,
    staleTime: 60 * 5 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  console.log('use', data.isError)
  return data;
}

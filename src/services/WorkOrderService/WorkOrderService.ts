import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { IWorkOrder } from "../../interfaces/work-order.interface";

const token = getTokenLocalStorage();

const getAll = async (): Promise<IWorkOrder[]> => {
    const { data } = await Api().get('work-orders', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log('use react', data)
    return data;
};

const getById = async (id: string): Promise<IWorkOrder> => {
    const { data } = await Api().get(`work-orders/${id}`);

    return data;
};

const create = async (dataToCreate: Omit<IWorkOrder, 'id'>): Promise<IWorkOrder> => {
    const { data } = await Api().post(`work-orders`, dataToCreate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const updateById = async (id: string, dataToUpdate: IWorkOrder): Promise<IWorkOrder> => {
    const { data } = await Api().put(`work-orders/${id}`, dataToUpdate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const deleteById = async (id: string): Promise<void> => {
    await Api().delete(`work-orders/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
};

export const WorkOrderService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
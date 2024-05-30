import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { IFleet } from "../../interfaces/fleet.interface";

const token = getTokenLocalStorage();

const getAll = async (): Promise<IFleet[]> => {
  const { data } = await Api().get('fleets', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('api me chamaram de novo', data)
  return data;
};

const getById = async (id: string): Promise<IFleet> => {
  const { data } = await Api().get(`fleets/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('service', data)
  return data;
};

const create = async (dataToCreate: Omit<IFleet, 'id'>): Promise<IFleet> => {
  const { data } = await Api().post(`fleets`, dataToCreate, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

const updateById = async (id: string, dataToUpdate: IFleet): Promise<IFleet> => {
  const { data } = await Api().put(`fleets/${id}`, dataToUpdate, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

const deleteById = async (id: string): Promise<void> => {
  await Api().delete(`fleets/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
};

export const FleetService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
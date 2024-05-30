/* eslint-disable @typescript-eslint/no-explicit-any */
import { Api } from "../Api/ApiConfig";
import { ICarrier, ICarrierUpdate } from "../../interfaces/carrier.interface";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";

const token = getTokenLocalStorage();

const getAll = async (): Promise<ICarrier[]> => {
    const { data } = await Api().get('carriers', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const getById = async (id: string): Promise<ICarrier> => {
    const { data } = await Api().get(`carriers/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const getCarrierFleets = async (id: string): Promise<any> => {
    const { data } = await Api().get(`carriers/${id}/fleets`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const create = async (dataToCreate: Omit<ICarrier, 'id'>): Promise<ICarrier> => {
    const { data } = await Api().post(`carriers`, dataToCreate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const updateById = async (id: string, dataToUpdate: ICarrierUpdate): Promise<ICarrier> => {
    const { data } = await Api().put(`carriers/${id}`, dataToUpdate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log(dataToUpdate)
    return data;
};

const deleteById = async (id: string): Promise<void> => {
    await Api().delete(`carriers/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
};

export const CarrierService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getCarrierFleets
};
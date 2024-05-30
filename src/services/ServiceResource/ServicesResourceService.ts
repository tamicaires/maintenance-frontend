import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { IServiceResource } from "../../interfaces/service-resource.interface";

const token = getTokenLocalStorage();

const getAll = async (): Promise<IServiceResource[]> => {
    const { data } = await Api().get('services', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log('api me chamaram de novo', data)
    return data;
};

const getById = async (id: string): Promise<IServiceResource> => {
    const { data } = await Api().get(`services/${id}`);

    return data;
};

const create = async (dataToCreate: Omit<IServiceResource, 'id'>): Promise<IServiceResource> => {
    const { data } = await Api().post(`services`, dataToCreate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const updateById = async (id: string, dataToUpdate: IServiceResource): Promise<IServiceResource> => {
    const { data } = await Api().put(`services/${id}`, dataToUpdate, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
};

const deleteById = async (id: string): Promise<void> => {
    await Api().delete(`services/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
};

export const ServiceResourceService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
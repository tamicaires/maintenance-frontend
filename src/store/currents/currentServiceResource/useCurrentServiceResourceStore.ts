import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IServiceResource } from '../../../interfaces/service-resource.interface';

interface ServiceResourceState {
  currentServiceResource: IServiceResource | null;
  setCurrentServiceResource: (serviceResource: IServiceResource | null) => void;
}

const createStoreWithPersist = (set: (state: ServiceResourceState) => void): ServiceResourceState => ({
  currentServiceResource: null,
  setCurrentServiceResource: (serviceResource) => set({ currentServiceResource: serviceResource }),
});

export const useCurrentServiceResourceStore = create(
  persist(
    createStoreWithPersist,
    { name: 'current-service-resource' }
  )
);

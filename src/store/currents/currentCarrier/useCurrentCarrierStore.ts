import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ICarrier } from '../../../interfaces/carrier.interface';

interface CarrierState {
  currentCarrier: ICarrier | null;
  setCurrentCarrier: (carrier: ICarrier | null) => void;
}

const createStoreWithPersist = (set: (state: CarrierState) => void): CarrierState => ({
  currentCarrier: null,
  setCurrentCarrier: (carrier: ICarrier | null) => set({ currentCarrier: carrier }),
});

export const useCurrentCarrierStore = create(
  persist(
    createStoreWithPersist,
    { name: 'current-carrier' }
  )
);

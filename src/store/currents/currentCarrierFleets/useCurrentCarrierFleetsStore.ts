import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IFleet } from '../../../interfaces/fleet.interface';

interface CarrierState {
  currentCarrierFleets: IFleet[];
  setCurrentCarrierFleets: (carrierFleets: IFleet[]) => void;
}

const createStoreWithPersist = (set: (state: CarrierState) => void): CarrierState => ({
  currentCarrierFleets: [],
  setCurrentCarrierFleets: (fleets: IFleet[]) => set({ currentCarrierFleets: fleets }),
});

export const useCurrentCarrierFleetsStore = create(
  persist(
    createStoreWithPersist,
    { name: 'current-carrier-fleets' }
  )
);

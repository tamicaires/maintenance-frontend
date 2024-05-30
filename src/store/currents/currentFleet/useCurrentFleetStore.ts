import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IFleet } from '../../../interfaces/fleet.interface';

interface FleetState {
  currentFleet: IFleet | null;
  setCurrentFleet: (Fleet: IFleet | null) => void;
}

const createStoreWithPersist = (set: (state: FleetState) => void): FleetState => ({
  currentFleet: null,
  setCurrentFleet: (fleet: IFleet | null) => set({ currentFleet: fleet }),
});

export const useCurrentFleetStore = create(
  persist(
    createStoreWithPersist,
    { name: 'current-fleet' }
  )
);

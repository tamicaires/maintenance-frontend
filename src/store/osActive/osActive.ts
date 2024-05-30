import { create } from 'zustand';

interface ModalState {
  osActive: boolean;
  setOsActive: (show: boolean) => void;
}

export const useOsActiveStore = create<ModalState>((set) => ({
  osActive: false,
  setOsActive: (isActive) => set({ osActive: isActive }),
}));

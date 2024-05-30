import { create } from "zustand";

interface ThemeSettingsStore {
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

export const useThemeSettingsStore = create<ThemeSettingsStore>((set) => ({
  currentColor: localStorage.getItem('colorMode') || '#189947', 
  setCurrentColor: (color) => {
    set({ currentColor: color });
    localStorage.setItem('colorMode', color);
  }
}));
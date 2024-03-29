import { create } from "zustand";

interface MenuStore {
  activeMenu: boolean;
  setActiveMenu: (isActive: boolean) => void;
  screenSize?: number;
  setScreenSize: (size: number) => void;
  isClicked: {
    notification: boolean;
    userProfile: boolean;
  };
  handleClick: (clicked: keyof MenuStore['isClicked']) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  activeMenu: true,
  setActiveMenu: (isActive) => set((state) => ({ ...state, activeMenu: isActive })),
  screenSize: undefined,
  setScreenSize: (size) => set((state) => ({ ...state, screenSize: size })),
  isClicked: {
    notification: false,
    userProfile: false
  },
  handleClick: (clicked) => set((state) => ({
    ...state,
    isClicked: {
      ...state.isClicked,
      [clicked]: !state.isClicked[clicked]
    }
  }))
}));



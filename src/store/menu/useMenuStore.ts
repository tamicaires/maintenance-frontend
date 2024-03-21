import { create } from "zustand";

interface MenuState {
  activeMenu: boolean;
  screenSize?: number;
  isClicked: {
    notification: boolean;
    userProfile: boolean;
  };
}

interface MenuActions {
  setActiveMenu: (isActive: boolean) => void;
  setScreenSize: (size: number | undefined) => void;
  handleClick: (clicked: keyof MenuState['isClicked']) => void;
}

interface MenuStore {
  state: MenuState;
  actions: MenuActions;
}

export const useMenuStore = create<MenuStore>((set) => ({
  state: {
    activeMenu: true,
    screenSize: undefined,
    isClicked: {
      notification: false,
      userProfile: false
    }
  },
  actions: {
    setActiveMenu: (isActive) => set((state) => ({ ...state, activeMenu: isActive })),
    setScreenSize: (size) => set((state) => ({ ...state, screenSize: size })),
    handleClick: (clicked) => set((state) => ({
      ...state,
      isClicked: {
        ...state.state.isClicked,
        [clicked]: !state.state.isClicked[clicked]
      }
    }))
  }
}));

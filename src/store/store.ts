import { create } from "zustand";

type ColorModeStore = {
  lightMode: boolean;
  setLightMode: (lightMode: boolean) => void;
};

export const useColorModeStore = create<ColorModeStore>((set) => ({
  lightMode: false,
  setLightMode: (lightMode: boolean) => set({ lightMode }),
}));

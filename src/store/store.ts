import { create } from "zustand";

type ColorModeStoreType = {
  lightMode: boolean;
  setLightMode: (lightMode: boolean) => void;
};

type LoginStoreType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

export const useColorModeStore = create<ColorModeStoreType>((set) => ({
  lightMode: false,
  setLightMode: (lightMode: boolean) => set({ lightMode }),
}));

export const useLoginStore = create<LoginStoreType>((set) => ({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
}));

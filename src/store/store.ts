import { create } from "zustand";
import {
  AddPodcastStoreType,
  ColorModeStoreType,
  LoginStoreType,
} from "../types/global";

export const useColorModeStore = create<ColorModeStoreType>((set) => ({
  lightMode: false,
  setLightMode: (lightMode: boolean) => set({ lightMode }),
}));

export const useLoginStore = create<LoginStoreType>((set) => ({
  isLogged: false,
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
}));

export const useAddPodcastStore = create<AddPodcastStoreType>((set) => ({
  addPodcast: false,
  setAddPodcast: (addPodcast: boolean) => set({ addPodcast }),
}));

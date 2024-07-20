export type PlaylistDataType = {
  id: string;
  name: string;
  playlistImg: string;
  date: string;
  featuredImg: string;
};

export type ColorModeStoreType = {
  lightMode: boolean;
  setLightMode: (lightMode: boolean) => void;
};

export type LoginStoreType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

export type AddPodcastStoreType = {
  addPodcast: boolean;
  setAddPodcast: (isLogged: boolean) => void;
};

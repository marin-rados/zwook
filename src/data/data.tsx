//dark mode icons
import homeIconDark from "../assets/icons/sidebar/darkMode/home.svg";
import devicesIconDark from "../assets/icons/sidebar/darkMode/devices.svg";
import subscriptionsIconDark from "../assets/icons/sidebar/darkMode/subscriptions.svg";
import settingsIconDark from "../assets/icons/sidebar/darkMode/settings.svg";
import playlistsIconDark from "../assets/icons/sidebar/darkMode/playlists.svg";
import albumsIconDark from "../assets/icons/sidebar/darkMode/albums.svg";
import artistsIconDark from "../assets/icons/sidebar/darkMode/artists.svg";
import stationsIconDark from "../assets/icons/sidebar/darkMode/stations.svg";
import podcastsIconDark from "../assets/icons/sidebar/darkMode/podcasts.svg";
//light mode icons
import homeIconLight from "../assets/icons/sidebar/lightMode/home.svg";
import devicesIconLight from "../assets/icons/sidebar/lightMode/devices.svg";
import subscriptionsIconLight from "../assets/icons/sidebar/lightMode/subscriptions.svg";
import settingsIconLight from "../assets/icons/sidebar/lightMode/settings.svg";
import playlistsIconLight from "../assets/icons/sidebar/lightMode/playlists.svg";
import albumsIconLight from "../assets/icons/sidebar/lightMode/albums.svg";
import artistsIconLight from "../assets/icons/sidebar/lightMode/artists.svg";
import stationsIconLight from "../assets/icons/sidebar/lightMode/stations.svg";
import podcastsIconLight from "../assets/icons/sidebar/lightMode/podcasts.svg";

export const sidebarData = [
  {
    id: 1,
    name: "Home",
    iconDark: homeIconDark,
    iconLight: homeIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 2,
    name: "Devices",
    iconDark: devicesIconDark,
    iconLight: devicesIconLight,
    href: "home",
    notiffication: true,
    notifficationText: 10,
  },
  {
    id: 3,
    name: "Subscriptions",
    iconDark: subscriptionsIconDark,
    iconLight: subscriptionsIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 4,
    name: "Settings",
    iconDark: settingsIconDark,
    iconLight: settingsIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 5,
    name: "Playlists",
    iconDark: playlistsIconDark,
    iconLight: playlistsIconLight,
    href: "playlists",
    notiffication: false,
  },
  {
    id: 6,
    name: "Albums",
    iconDark: albumsIconDark,
    iconLight: albumsIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 7,
    name: "Artists",
    iconDark: artistsIconDark,
    iconLight: artistsIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 8,
    name: "Stations",
    iconDark: stationsIconDark,
    iconLight: stationsIconLight,
    href: "home",
    notiffication: false,
  },
  {
    id: 9,
    name: "Podcasts",
    iconDark: podcastsIconDark,
    iconLight: podcastsIconLight,
    href: "podcasts",
    notiffication: true,
    notifficationText: "Add New",
  },
];

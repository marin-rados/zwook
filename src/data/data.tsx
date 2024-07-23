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

//SIDEBAR DATA
export const sidebarData = [
  {
    id: 1,
    name: "Home",
    iconDark: homeIconDark,
    iconLight: homeIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 2,
    name: "Devices",
    iconDark: devicesIconDark,
    iconLight: devicesIconLight,
    href: "/",
    notiffication: true,
    notifficationText: 10,
  },
  {
    id: 3,
    name: "Subscriptions",
    iconDark: subscriptionsIconDark,
    iconLight: subscriptionsIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 4,
    name: "Settings",
    iconDark: settingsIconDark,
    iconLight: settingsIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 5,
    name: "Playlists",
    iconDark: playlistsIconDark,
    iconLight: playlistsIconLight,
    href: "/playlist/midnight-melodies",
    notiffication: false,
  },
  {
    id: 6,
    name: "Albums",
    iconDark: albumsIconDark,
    iconLight: albumsIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 7,
    name: "Artists",
    iconDark: artistsIconDark,
    iconLight: artistsIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 8,
    name: "Stations",
    iconDark: stationsIconDark,
    iconLight: stationsIconLight,
    href: "/",
    notiffication: false,
  },
  {
    id: 9,
    name: "Podcasts",
    iconDark: podcastsIconDark,
    iconLight: podcastsIconLight,
    href: "/podcast/new",
    notiffication: true,
    notifficationText: "Add New",
    createPodcast: true,
  },
];

// FEATURED DATA

//images

import guitarMan from "../assets/images/featured-images/guitar-man.jfif";
import kissDorka from "../assets/images/featured-images/kiss-dorka.jfif";
import lunaDova from "../assets/images/featured-images/luna-dova.jfif";
import maxSterling from "../assets/images/featured-images/max-sterling.jfif";
import orionStarlight from "../assets/images/featured-images/orion-starlight.jfif";
import phantomEchos from "../assets/images/featured-images/phantom-echos.jfif";
import rapper from "../assets/images/featured-images/rapper.jfif";
import singer from "../assets/images/featured-images/singer.jfif";

export const featuredData = [
  {
    img: singer,
    name: "Kiss Dorka",
  },
  {
    img: lunaDova,
    name: "Luna Dova",
  },
  {
    img: rapper,
    name: "Phantom Echos",
  },
  {
    img: guitarMan,
    name: "Kiss Dorka",
  },
  {
    img: maxSterling,
    name: "Max Sterling",
  },
  {
    img: orionStarlight,
    name: "Orion Starlight",
  },
  {
    img: kissDorka,
    name: "Kiss Dorka",
  },
  {
    img: phantomEchos,
    name: "Phantom Echos",
  },
];

//CATEGORIES DATA

//images
import beachGuitar from "../assets/images/categories-images/beach-guitar.jfif";
import rockMusician from "../assets/images/categories-images/rock-musician.jfif";
import saxophoneGuy from "../assets/images/categories-images/saxophone-guy.jfif";
import streetMusician from "../assets/images/categories-images/street-musician.jfif";

export const categoriesdData = [
  {
    img: streetMusician,
    name: "Folk",
  },
  {
    img: beachGuitar,
    name: "Blues",
  },
  {
    img: saxophoneGuy,
    name: "Jazz Classics",
  },
  {
    img: rockMusician,
    name: "Stadium Rock",
  },
  {
    img: streetMusician,
    name: "Folk & Acoustic",
  },
  {
    img: guitarMan,
    name: "Country",
  },
  {
    img: beachGuitar,
    name: "Acoustic Guitar Hits",
  },
  {
    img: saxophoneGuy,
    name: "Monday Jazz",
  },
];

//PLAYER DATA
//icons
import nextButton from "../assets/icons/music-control/next.svg";
import prevButton from "../assets/icons/music-control/prev.svg";
import play from "../assets/icons/music-control/play.svg";
import repeat from "../assets/icons/music-control/repeat.svg";
import shuffle from "../assets/icons/music-control/shuffle.svg";
import nextButtonLight from "../assets/icons/music-control/light-mode/next-lightMode.svg";
import prevButtonLight from "../assets/icons/music-control/light-mode/prev-lightMode.svg";
import playLight from "../assets/icons/music-control/light-mode/play-lightMode.svg";
import repeatLight from "../assets/icons/music-control/light-mode/repeat-lightMode.svg";
import shuffleLight from "../assets/icons/music-control/light-mode/shuffle-lightMode.svg";

export const playerIconsData = [
  {
    img: shuffle,
    lightModeImg: shuffleLight,
    playIcon: false,
  },
  {
    img: prevButton,
    lightModeImg: prevButtonLight,
    playIcon: false,
  },
  {
    img: play,
    lightModeImg: playLight,
    playIcon: true,
  },
  {
    img: nextButton,
    lightModeImg: nextButtonLight,
    playIcon: false,
  },

  {
    img: repeat,
    lightModeImg: repeatLight,
    playIcon: false,
  },
];

//PLAYLIST SONGS DATA

export const playlistSongsData = [
  {
    dateAdded: "03/03/2024",
    songDuration: "3:03",
    songImg: kissDorka,
    songName: "Lost in the Echoes",
    artistName: "The Wanderers",
    album: "Shadows of the Past",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "5:22",
    songImg: orionStarlight,
    songName: "Luna Waves",
    artistName: "Midnight Mirage",
    album: "Dreamscapes",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "3:46",
    songImg: phantomEchos,
    songName: "Velvet Strings",
    artistName: "Hearfelt Harmony",
    album: "Serenade of the Souls",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "1:55",
    songImg: saxophoneGuy,
    songName: "The Electric Suns",
    artistName: "Solar Flare",
    album: "Galactic Journey",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "2:40",
    songImg: beachGuitar,
    songName: "Sapphire Sky",
    artistName: "Crystal Clear",
    album: "Celestial Dreams",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "2:34",
    songImg: guitarMan,
    songName: "Mystic Moon",
    artistName: "Enchanted Night",
    album: "Twilight Whispers",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "4:14",
    songImg: rockMusician,
    songName: "Aurora Echo",
    artistName: "Northern Lights",
    album: "Aurora Borealis",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "3:24",
    songImg: lunaDova,
    songName: "The Rythm Riders",
    artistName: "Pulse of the City",
    album: "Urban Beats",
  },
  {
    dateAdded: "04/17/2024",
    songDuration: "4:44",
    songImg: rapper,
    songName: "Crimson Tide",
    artistName: "Deep Sea Symphony",
    album: "Oceanic Reverie",
  },
  {
    dateAdded: "04/22/2024",
    songDuration: "6:01",
    songImg: maxSterling,
    songName: "Golden Horizon",
    artistName: "Sunset Serenade",
    album: "Dusk to Dawn",
  },
  {
    dateAdded: "04/22/2024",
    songDuration: "2:35",
    songImg: singer,
    songName: "Silver Strings",
    artistName: "Grey Satin",
    album: "Starlit Nights",
  },
  {
    dateAdded: "04/22/2024",
    songDuration: "4:33",
    songImg: kissDorka,
    songName: "Empty",
    artistName: "Martin Jones",
    album: "Sentio",
  },
  {
    dateAdded: "05/01/2024",
    songDuration: "3:54",
    songImg: guitarMan,
    songName: "Reboot",
    artistName: "Bright Skies",
    album: "Gold Skies",
  },
  {
    dateAdded: "05/01/2024",
    songDuration: "7:12",
    songImg: phantomEchos,
    songName: "Silhouettes",
    artistName: "Tom Hangs",
    album: "True",
  },
  {
    dateAdded: "05/17/2024",
    songDuration: "3:28",
    songImg: rockMusician,
    songName: "Comfort in Chaos",
    artistName: "John Sunset",
    album: "Comfort in Chaos",
  },
];

//PLAYLIST PAGE DATA
import midnight from "../assets/images/abstract-images/midnight.jfif";
import virgos from "../assets/images/abstract-images/virgos.jfif";

export const playlistPageData = [
  {
    id: "midnight-melodies",
    name: "Midnight Melodies",
    playlistImg: midnight,
    date: "June,16",
    featuredImg: guitarMan,
  },
  {
    id: "virgos",
    name: "Virgos",
    playlistImg: virgos,
    date: "July,23",
    featuredImg: beachGuitar,
  },
];

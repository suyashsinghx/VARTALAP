//these are the array of wallpapers that we will use to choose the wallpaper as background func..

export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  {
    id: "breno-machado",
    category: "desktop",
    label: "Breno Machado",
    url: "/wallpapers/breno-machadojpg.jpg",
  },
  {
    id: "cash-macanayay",
    category: "desktop",
    label: "Cash Macanayay",
    url: "/wallpapers/cash-macanayajpg.jpg",
  },
  {
    id: "clay-banks",
    category: "desktop",
    label: "Clay Banks",
    url: "/wallpapers/clay-banks.jpg",
  },
  {
    id: "drew-beamer",
    category: "desktop",
    label: "Drew Beamer",
    url: "/wallpapers/drew-beamer.jpg",
  },
  {
    id: "jonatan-pie",
    category: "desktop",
    label: "Jonatan Pie",
    url: "/wallpapers/jonatan-pie.jpg",
  },
  {
    id: "jonatan-pie-2",
    category: "desktop",
    label: "Jonatan Pie 2",
    url: "/wallpapers/jonatan-pie-jpg.jpg",
  },
  {
    id: "luca-micheli",
    category: "desktop",
    label: "Luca Micheli",
    url: "/wallpapers/luca-micheli-jpg.jpg",
  },
  {
    id: "lucas-k",
    category: "desktop",
    label: "Lucas K",
    url: "/wallpapers/lucas-k-.jpg",
  },
  {
    id: "nattu-adnan",
    category: "desktop",
    label: "Nattu Adnan",
    url: "/wallpapers/nattu-adnan.jpg",
  },
  {
    id: "paulo",
    category: "desktop",
    label: "Paulo",
    url: "/wallpapers/paulo-.jpg",
  },
  {
    id: "andrew-kliatskyi",
    category: "abstract",
    label: "Andrew Kliatskyi",
    url: "/wallpapers/andrew-kliatskyi.jpg",
  },
  {
    id: "bolivia-inteligente",
    category: "abstract",
    label: "Bolivia Inteligente",
    url: "/wallpapers/boliviainteligente.jpg",
  },
  {
    id: "flyd-uA",
    category: "abstract",
    label: "Flyd UA",
    url: "/wallpapers/flyd--uA.jpg",
  },
  {
    id: "flyd-xFG3",
    category: "abstract",
    label: "Flyd XFG3",
    url: "/wallpapers/flyd-XfG3.jpg",
  },
  {
    id: "pawel-czer",
    category: "abstract",
    label: "Pawel Czer",
    url: "/wallpapers/pawel-czer.jpg",
  },
  {
    id: "richard-horvath-razu",
    category: "abstract",
    label: "Richard Horvath RAZU",
    url: "/wallpapers/richard-horvath-RAZU.jpg",
  },
  {
    id: "sole-dalessandro",
    category: "abstract",
    label: "Sole D'Alessandro",
    url: "/wallpapers/sole-d-alessandro.jpg",
  },
  {
    id: "bolivia-inteligente-s4e",
    category: "abstract",
    label: "Bolivia Inteligente S4E",
    url: "/wallpapers/boliviainteligente-S4e.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}

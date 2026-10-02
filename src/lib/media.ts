/*
  Central media manifest.

  Every image on the site is registered here exactly once. The previous
  approach kept the ids inside individual pages, which is how
  photo-1486406146926 ended up serving as both the hero poster and the
  mid-page band, and how photo-1581092160562 leaked onto two routes.

  Rule: one id per slot, no id reused anywhere on the site. If you add a
  slot, add a new id here — do not borrow an existing one.
*/

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/*
  Hero video.

  The previous source was a hotlink to mixkit.co that had started returning
  HTTP 403, so the hero was silently falling back to its poster with no video
  at all. The reference site carries a video in this exact slot, so the slot
  stays — but the source is registered here rather than inlined, which makes it
  a one-line change and gives the poster a single home too.

  Stock: Pexels, "Blue Colored Cables" — cable management, patching and
  connectivity. Replace src if you would rather run brand footage of your own.
*/
export const HERO_VIDEO = {
  src: "https://videos.pexels.com/video-files/1085656/1085656-hd_1280_720_25fps.mp4",
} as const;

export const img = {
  /* hero poster — sits behind the video, so it must stand alone */
  heroPoster: u("photo-1518770660439-4636190af475", 2400),

  /* full-bleed mid-page band */
  band: u("photo-1497366811353-6870744d04b2", 2400),

  /* capability carousel */
  accessRack: u("photo-1558494949-ef010cbdcc31"),
  patchPanel: u("photo-1551434678-e076c223a692"),
  cameras: u("photo-1557597774-9d273605dfa9"),
  smartLock: u("photo-1521791136064-7986c2920216"),
  technician: u("photo-1581092160562-40aa08e78837"),
  av: u("photo-1598488035139-bdbb2231ce04"),

  /* who we work for */
  gc: u("photo-1503387762-592deb58ef4e", 1200),
  designer: u("photo-1600585154340-be6161a56a0c", 1200),
  property: u("photo-1486406146926-c627a92ad1ab", 1200),
  strata: u("photo-1545324418-cc1a3fa10c00", 1200),
  tenant: u("photo-1441986300917-64674bd600d8", 1200),

  /* services route */
  structuredCabling: u("photo-1581092918056-0c4c3acd3789"),
  accessControl: u("photo-1560732488-6b0df240254a"),
  surveillance: u("photo-1610557892470-55d9e80c0bce"),
  doorHardware: u("photo-1560518883-ce09059eeffa"),
  commercial: u("photo-1487958449943-2429e8be8625"),
  office: u("photo-1497366754035-f200968a6e72"),

  /* team route — role illustrations, not portraits of real staff */
  teamLeadership: u("photo-1454165804606-c3d57bc86b40"),
  teamTechnical: u("photo-1581092580497-e0d23cbdf1dc"),
  teamInstall: u("photo-1581094794329-c8112a89af12"),
  teamService: u("photo-1621905251189-08b45d6a269e"),
} as const;
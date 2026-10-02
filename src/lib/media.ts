/*
  Central media manifest.

  Every image on the site is registered here exactly once. The previous
  approach kept the ids inside individual pages, which is how
  photo-1486406146926 ended up serving as both the hero poster and the
  mid-page band, and how photo-1581092160562 leaked onto two routes.

  Rule: one id per slot, no id reused anywhere on the site. If you add a
  slot, add a new id here — do not borrow an existing one.

  Art direction
  -------------
  The site is positioned against architectural developers (the reference
  brief), not against IT resellers. Every photograph is therefore a piece
  of contemporary West Coast architecture — dusk and golden-hour exteriors,
  glass, concrete, timber and warm interior light — rather than the
  circuit-board / server-rack / ceiling-dome / handshake imagery that made
  an earlier pass read like a cabling supplier's price list.

  Two hosts are used:
    u() — Unsplash, `photo-<id>`
    p() — Pexels,   `<numeric id>`

  Both permit hotlinking at the widths requested here.
*/

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

const p = (id: string, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/*
  Hero video.

  Stock: Pexels, "Drone Footage of a Buildings" — a slow aerial pass over
  modern towers. Chosen to replace the previous clip ("Blue Colored
  Cables"), which was technically fine but read as a cabling supplier's
  own advert and undercut the whole positioning.

  The poster below is deliberately a dusk architectural frame, so if the
  video is blocked, throttled or fails to decode, the hero still lands on a
  premium image rather than on nothing. Swap `src` for brand footage of
  your own at any time — it is the only line that needs to change.
*/
export const HERO_VIDEO = {
  src: "https://videos.pexels.com/video-files/6950314/6950314-hd_1920_1080_30fps.mp4",
} as const;

export const img = {
  /* hero poster — sits behind the video, so it must stand alone */
  heroPoster: p("4626268", 2400),

  /* full-bleed mid-page band */
  band: p("10344206", 2400),

  /* capability carousel */
  accessRack: p("5098634"),
  patchPanel: p("28481587"),
  cameras: p("37435153"),
  smartLock: p("7598365"),
  technician: p("6794929"),
  av: u("photo-1598488035139-bdbb2231ce04"),

  /* who we work for */
  gc: p("1666667", 1200),
  designer: u("photo-1600585154340-be6161a56a0c", 1200),
  property: u("photo-1486406146926-c627a92ad1ab", 1200),
  strata: u("photo-1545324418-cc1a3fa10c00", 1200),
  tenant: u("photo-1441986300917-64674bd600d8", 1200),

  /* services route */
  structuredCabling: p("38816564"),
  accessControl: p("18415802"),
  surveillance: p("28532416"),
  doorHardware: p("6146552"),
  commercial: p("33857126"),
  office: p("31117874"),

  /* about route */
  history: p("26859301"),
  approach: p("33798955"),
  impact: p("31884675"),
} as const;
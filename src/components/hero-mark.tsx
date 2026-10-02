import KeywayEmblem from "./keyway-emblem";

/*
  Hero mark — the PI Locks logotype paired with the keyway emblem and a
  radial dot lattice, laid out on the same 16:9 stage the reference
  mark uses so it scales identically inside the full-bleed hero.

  Animation sequence (CSS, ~2.6s):
    1. dot lattice fades in outward from centre
    2. emblem rings draw clockwise
    3. ticks sweep
    4. keyway + keyhole resolve
    5. wordmark letters rise
*/
export default function HeroMark() {
  return (
    <svg
      className="hero__marksvg"
      viewBox="0 0 1920 1080"
      role="img"
      aria-label="PI Locks — Secure. Connect. Control."
    >
      <defs>
        <radialGradient id="piFaceHero" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#2a2b30" />
          <stop offset="100%" stopColor="#1b1c20" />
        </radialGradient>
      </defs>

      {/* ---- radial dot lattice (hero scale) ---- */}
      <g className="mark__bug" fill="#ffffff" fillOpacity="0.85">
        {DOTS.map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            className="mark__dot"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </g>

      {/* ---- keyway emblem, centred behind the wordmark ---- */}
      <g transform="translate(960 372) scale(1.62) translate(-100 -100)">
        <KeywayEmblem animated size={200} />
      </g>

      {/* ---- wordmark ---- */}
      <g className="mark__type" fill="#ffffff">
        {"PILOCKS".split("").map((ch, i) => (
          <text
            key={i}
            className="mark__ch"
            style={{ "--i": i } as React.CSSProperties}
            x={960 + (i - 3.5) * 150}
            y="800"
            textAnchor="middle"
            fontSize="180"
            fontWeight="100"
            letterSpacing="6"
          >
            {ch}
          </text>
        ))}
      </g>

      <text
        className="mark__tag"
        x="960"
        y="900"
        textAnchor="middle"
        fill="#ffffff"
        fillOpacity="0.6"
        fontSize="34"
        fontWeight="300"
        letterSpacing="18"
      >
        SECURE · CONNECT · CONTROL
      </text>
    </svg>
  );
}

/*
  Dot lattice geometry — a hex packing centred on (960, 420) with three
  radii, mirroring the reference mark's bug cluster.
*/
const RINGS = [
  { r: 0, count: 1, dot: 5 },
  { r: 62, count: 6, dot: 7 },
  { r: 118, count: 12, dot: 7 },
];

const DOTS: [number, number, number][] = (() => {
  const out: [number, number, number][] = [];
  for (const { r, count, dot } of RINGS) {
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 - Math.PI / 2;
      out.push([
        Math.round(960 + Math.cos(a) * r),
        Math.round(420 + Math.sin(a) * r),
        dot,
      ]);
    }
  }
  return out;
})();
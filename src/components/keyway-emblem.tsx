import type { CSSProperties } from "react";

/*
  KeywayEmblem — PI Locks brand mark.

  A lock-cylinder face: brass graduation ring, ink plate, keyway slot with
  bitting teeth, and the keyhole at its base. Drawn on a 1920x1080-style
  stage so it can sit at hero scale the way the reference mark does.

  `animated` runs the reveal sequence — rings draw, ticks sweep, keyway
  fills, keyhole snaps in.
*/

const TICKS = Array.from({ length: 24 }, (_, i) => i * 15);

export default function KeywayEmblem({
  className = "",
  animated = false,
  size,
}: {
  className?: string;
  animated?: boolean;
  /*
    Intrinsic size. This must be explicit: a nested <svg> with no width or
    height defaults to 100% of the parent viewport, not of its parent <g>,
    which blew the hero mark up to full-stage dimensions.
  */
  size?: number | string;
}) {
  // Circumference values for the stroke-draw sequence.
  const c92 = 2 * Math.PI * 92;
  const c70 = 2 * Math.PI * 70;
  const c48 = 2 * Math.PI * 48;

  const anim = animated ? "emblem is-animated" : "";

  return (
    <svg
      viewBox="0 0 200 200"
      width={size ?? 200}
      height={size ?? 200}
      className={`emblem ${anim} ${className}`}
      role="img"
      aria-label="PI Locks keyway emblem"
    >
      <defs>
        <radialGradient id="piFace" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#2a2b30" />
          <stop offset="100%" stopColor="#1b1c20" />
        </radialGradient>
      </defs>

      {/* outer brass ring — draws first */}
      <circle
        className="emblem__ring emblem__ring--outer"
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1.4"
        style={
          animated
            ? ({ "--dash": c92, "--i": 0 } as CSSProperties)
            : undefined
        }
      />

      {/* graduation ticks — sweep in after the ring lands */}
      <g className="emblem__ticks">
        {TICKS.map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="6"
            x2="100"
            y2="12"
            stroke="var(--brass)"
            strokeWidth="1"
            strokeOpacity="0.55"
            transform={`rotate(${deg} 100 100)`}
            style={
              animated
                ? ({ "--i": 1, "--deg": deg } as CSSProperties)
                : undefined
            }
          />
        ))}
      </g>

      {/* guidance rings */}
      <circle
        className="emblem__ring emblem__ring--mid"
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="var(--em-ring)"
        strokeWidth="1"
        strokeDasharray="2 6"
        style={animated ? ({ "--dash": c70, "--i": 2 } as CSSProperties) : undefined}
      />

      {/* cylinder plate */}
      <circle
        className="emblem__plate"
        cx="100"
        cy="100"
        r="48"
        fill="url(#piFace)"
        stroke="var(--em-ring)"
        strokeWidth="1"
        style={animated ? ({ "--dash": c48, "--i": 3 } as CSSProperties) : undefined}
      />

      <circle
        cx="100"
        cy="100"
        r="36"
        fill="none"
        stroke="var(--em-ring)"
        strokeWidth="1"
        strokeDasharray="1 5"
        className="emblem__ring emblem__ring--inner"
        style={animated ? ({ "--i": 4 } as CSSProperties) : undefined}
      />

      {/* keyway slot + bitting teeth */}
      <g className="emblem__keyway" style={animated ? ({ "--i": 5 } as CSSProperties) : undefined}>
        <rect
          x="90"
          y="58"
          width="20"
          height="44"
          rx="8"
          fill="var(--brass-soft)"
          stroke="var(--brass)"
          strokeWidth="1.4"
        />
        <rect x="90" y="66" width="8" height="6" rx="1.5" fill="var(--ink)" />
        <rect x="90" y="80" width="8" height="6" rx="1.5" fill="var(--ink)" />
        <rect x="90" y="94" width="8" height="6" rx="1.5" fill="var(--ink)" />
      </g>

      {/* keyhole — the eye of the lock, lands last */}
      <g className="emblem__keyhole" style={animated ? ({ "--i": 6 } as CSSProperties) : undefined}>
        <circle
          cx="100"
          cy="118"
          r="12"
          fill="var(--ink)"
          stroke="var(--brass)"
          strokeWidth="1.4"
        />
        <line
          x1="95"
          y1="130"
          x2="95"
          y2="138"
          stroke="var(--brass)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="105"
          y1="130"
          x2="105"
          y2="138"
          stroke="var(--brass)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
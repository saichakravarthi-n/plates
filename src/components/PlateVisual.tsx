import type { PlateShape } from "@/data/products";

type Props = {
  shape: PlateShape;
  tone: string;
  className?: string;
};

function veins(cx: number, cy: number, r: number) {
  return (
    <g opacity="0.28" stroke="#5c3d22" strokeWidth="0.8" fill="none">
      <path d={`M ${cx} ${cy - r * 0.85} Q ${cx + r * 0.1} ${cy} ${cx} ${cy + r * 0.85}`} />
      <path d={`M ${cx} ${cy - r * 0.4} Q ${cx + r * 0.55} ${cy - r * 0.1} ${cx + r * 0.7} ${cy + r * 0.15}`} />
      <path d={`M ${cx} ${cy} Q ${cx - r * 0.5} ${cy + r * 0.05} ${cx - r * 0.68} ${cy + r * 0.35}`} />
      <path d={`M ${cx} ${cy + r * 0.25} Q ${cx + r * 0.4} ${cy + r * 0.45} ${cx + r * 0.55} ${cy + r * 0.65}`} />
    </g>
  );
}

export function PlateVisual({ shape, tone, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 160 120"
      className={className}
      aria-hidden
      role="img"
    >
      <defs>
        <radialGradient id={`g-${shape}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f0e2c8" />
          <stop offset="45%" stopColor={tone} />
          <stop offset="100%" stopColor="#8a6238" />
        </radialGradient>
        <filter id={`s-${shape}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodOpacity="0.18" />
        </filter>
      </defs>

      {shape === "round" || shape === "mini" ? (
        <g filter={`url(#s-${shape})`}>
          <ellipse
            cx="80"
            cy="62"
            rx={shape === "mini" ? 38 : 52}
            ry={shape === "mini" ? 28 : 40}
            fill={`url(#g-${shape})`}
          />
          <ellipse
            cx="80"
            cy="62"
            rx={shape === "mini" ? 28 : 40}
            ry={shape === "mini" ? 20 : 30}
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          {veins(80, 62, shape === "mini" ? 30 : 42)}
        </g>
      ) : null}

      {shape === "square" ? (
        <g filter={`url(#s-${shape})`}>
          <rect
            x="34"
            y="22"
            width="92"
            height="76"
            rx="10"
            fill={`url(#g-${shape})`}
          />
          <rect
            x="46"
            y="34"
            width="68"
            height="52"
            rx="6"
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          {veins(80, 60, 36)}
        </g>
      ) : null}

      {shape === "compartment" ? (
        <g filter={`url(#s-${shape})`}>
          <ellipse cx="80" cy="62" rx="54" ry="42" fill={`url(#g-${shape})`} />
          <path
            d="M80 28 V96 M34 62 H80 M80 62 Q118 48 122 36 M80 62 Q118 76 122 88"
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.28"
            strokeWidth="1.8"
          />
          {veins(58, 48, 22)}
        </g>
      ) : null}

      {shape === "tray" ? (
        <g filter={`url(#s-${shape})`}>
          <rect
            x="18"
            y="34"
            width="124"
            height="52"
            rx="14"
            fill={`url(#g-${shape})`}
          />
          <rect
            x="30"
            y="44"
            width="100"
            height="32"
            rx="8"
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          {veins(80, 60, 40)}
        </g>
      ) : null}

      {shape === "boat" ? (
        <g filter={`url(#s-${shape})`}>
          <path
            d="M18 58 C40 28, 120 28, 142 58 C120 88, 40 88, 18 58 Z"
            fill={`url(#g-${shape})`}
          />
          <path
            d="M34 58 C50 42, 110 42, 126 58"
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          {veins(80, 58, 34)}
        </g>
      ) : null}

      {shape === "bowl" ? (
        <g filter={`url(#s-${shape})`}>
          <ellipse cx="80" cy="54" rx="48" ry="18" fill={`url(#g-${shape})`} />
          <path
            d="M32 54 Q32 92 80 96 Q128 92 128 54"
            fill={`url(#g-${shape})`}
            opacity="0.95"
          />
          <ellipse
            cx="80"
            cy="54"
            rx="36"
            ry="12"
            fill="#6b4423"
            fillOpacity="0.12"
          />
        </g>
      ) : null}

      {shape === "oval" ? (
        <g filter={`url(#s-${shape})`}>
          <ellipse cx="80" cy="60" rx="62" ry="34" fill={`url(#g-${shape})`} />
          <ellipse
            cx="80"
            cy="60"
            rx="48"
            ry="24"
            fill="none"
            stroke="#6b4423"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          {veins(80, 60, 40)}
        </g>
      ) : null}
    </svg>
  );
}

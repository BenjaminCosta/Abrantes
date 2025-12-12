interface DecorativeProps {
  className?: string;
}

export const LeafDecoration = ({ className = "" }: DecorativeProps) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 20C60 60 50 120 60 180C70 240 100 280 100 280C100 280 130 240 140 180C150 120 140 60 100 20Z"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.4"
    />
    <path
      d="M100 50C75 80 70 130 75 170C80 210 100 240 100 240C100 240 120 210 125 170C130 130 125 80 100 50Z"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <line x1="100" y1="20" x2="100" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <path d="M70 100 Q85 110 100 100" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <path d="M130 100 Q115 110 100 100" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <path d="M65 150 Q82 165 100 150" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <path d="M135 150 Q118 165 100 150" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
  </svg>
);

export const MushroomDecoration = ({ className = "" }: DecorativeProps) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 150 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="75" cy="70" rx="60" ry="40" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
    <ellipse cx="75" cy="70" rx="45" ry="28" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <path d="M55 95 L55 170 Q55 180 65 180 L85 180 Q95 180 95 170 L95 95" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
    <ellipse cx="75" cy="180" rx="20" ry="5" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

export const BranchDecoration = ({ className = "" }: DecorativeProps) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 300 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 75 Q50 60 100 75 T200 75 T300 75"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.3"
    />
    <circle cx="50" cy="68" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <circle cx="120" cy="78" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="180" cy="72" r="14" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <circle cx="250" cy="76" r="11" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <path d="M30 50 Q40 60 50 55" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <path d="M160 55 Q170 65 180 58" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
  </svg>
);

export const OrganicCircles = ({ className = "" }: DecorativeProps) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="140" cy="140" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <circle cx="150" cy="70" r="12" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
  </svg>
);

export const CornerVines = ({ className = "", flip = false }: DecorativeProps & { flip?: boolean }) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
  >
    <path
      d="M0 200 Q30 170 50 150 Q80 110 100 80 Q130 40 180 0"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.25"
    />
    <path
      d="M0 180 Q20 160 35 145 Q55 115 70 90 Q90 55 130 20"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.2"
    />
    <circle cx="50" cy="150" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <circle cx="80" cy="110" r="6" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
    <circle cx="110" cy="70" r="7" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <path d="M40 160 Q50 150 45 140" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
    <path d="M90 100 Q100 90 95 80" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
  </svg>
);

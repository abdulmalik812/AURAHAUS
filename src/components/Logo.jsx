/**
 * AuraHäus Logo Component
 * 
 * Recreates the brand logo: a gold-gradient circle with a stylized "A" 
 * letterform inside (curved legs + triangular roof peak + teardrop arch).
 * Below the mark: "AURAHÄUS" in spaced uppercase.
 * 
 * Props:
 * - size: 'small' | 'default' | 'large' | 'xlarge'
 * - showText: boolean (default true)
 * - variant: 'gold' | 'white' (default 'gold')
 * - className: additional CSS classes
 */
export default function Logo({ size = 'default', showText = true, variant = 'gold', className = '' }) {
  const sizes = {
    small:   { icon: 30, text: 'text-lg sm:text-xl' },
    default: { icon: 38, text: 'text-xl sm:text-2xl' },
    large:   { icon: 48, text: 'text-2xl sm:text-3xl' },
    xlarge:  { icon: 64, text: 'text-3xl sm:text-4xl' },
  };

  const s = sizes[size] || sizes.default;
  const uid = `logo-${size}-${variant}`;

  // Color setup
  const gradientStops = variant === 'gold'
    ? [
        { offset: '0%',   color: '#c9952e' },
        { offset: '40%',  color: '#d4a853' },
        { offset: '75%',  color: '#dab56a' },
        { offset: '100%', color: '#c47f3a' },
      ]
    : [
        { offset: '0%',   color: '#ffffff' },
        { offset: '100%', color: '#e0e0e0' },
      ];

  const textColor = variant === 'gold' ? 'text-text-primary' : 'text-white';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Logo Mark SVG */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="AuraHäus logo"
      >
        <defs>
          <linearGradient id={uid} x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
            {gradientStops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
        </defs>

        {/* Outer circle */}
        <circle
          cx="55"
          cy="40"
          r="33"
          stroke={`url(#${uid})`}
          strokeWidth="3"
          fill="none"
        />

        {/* Left curved leg of the "A" — sweeps from bottom-left up into the arch */}
        <path
          d="M28 108 C28 72, 32 55, 42 40 C48 31, 52 26, 55 20"
          stroke={`url(#${uid})`}
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right curved leg of the "A" — sweeps from bottom-right up into the arch */}
        <path
          d="M55 20 C58 26, 62 31, 68 40 C78 55, 82 72, 82 108"
          stroke={`url(#${uid})`}
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Triangular roof/peak — small pointed house shape at top of the A */}
        <path
          d="M45 42 L55 26 L65 42"
          stroke={`url(#${uid})`}
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner arch/teardrop cutout */}
        <path
          d="M46 65 Q50 42, 55 40 Q60 42, 64 65"
          stroke={`url(#${uid})`}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Name */}
      {showText && (
        <span className={`font-heading ${s.text} tracking-[0.12em] leading-none ${textColor}`}>
          AURAHÄUS
        </span>
      )}
    </span>
  );
}

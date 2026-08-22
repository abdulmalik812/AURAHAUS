/** Uses the supplied AuraHaus artwork, cropped into a compact horizontal lock-up. */
export default function Logo({ size = 'default', className = '' }) {
  return (
    <span className={`actual-logo actual-logo-${size} ${className}`} role="img" aria-label="AuraHaus logo">
      <span className="actual-logo-mark" aria-hidden="true" />
      <span className="actual-logo-wordmark" aria-hidden="true" />
    </span>
  );
}

import './BrowserMockup.css';

// Browser-chrome frame with a placeholder screenshot area. The client drops
// real screenshots into the image area later; until then it shows a labeled
// placeholder (no placeholder image file, so nothing to forget to replace).
export default function BrowserMockup({ url, className = '' }) {
  return (
    <div className={`mockup ${className}`.trim()}>
      <div className="mockup__toolbar">
        <span className="mockup__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="mockup__url">{url}</span>
      </div>
      <div className="mockup__screen">
        <span className="mockup__placeholder">Screenshot: {url}</span>
      </div>
    </div>
  );
}

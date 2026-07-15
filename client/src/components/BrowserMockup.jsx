import './BrowserMockup.css';

// Browser-chrome frame. Renders a real screenshot when `image` is provided,
// otherwise a labeled placeholder. Screenshots are cropped to the site's hero
// and shown top-anchored so the frame reads like a live browser window.
export default function BrowserMockup({
  url,
  className = '',
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  loading = 'lazy',
}) {
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
        {image ? (
          <img
            className="mockup__img"
            src={image}
            alt={imageAlt || `Screenshot of ${url}`}
            width={imageWidth}
            height={imageHeight}
            loading={loading}
            decoding="async"
          />
        ) : (
          <span className="mockup__placeholder">Screenshot: {url}</span>
        )}
      </div>
    </div>
  );
}

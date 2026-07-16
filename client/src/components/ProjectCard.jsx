import { Link } from 'react-router-dom';
import BrowserMockup from './BrowserMockup.jsx';
import './ProjectCard.css';

export default function ProjectCard({
  url,
  name,
  industry,
  description,
  status,
  image,
  imageWidth,
  imageHeight,
}) {
  return (
    <Link to="/work" className="project-card" aria-label={`${name}, ${industry}`}>
      <div className="project-card__media">
        {status === 'in-progress' && (
          <span className="project-card__badge">In progress</span>
        )}
        <BrowserMockup
          url={url}
          className="project-card__mockup"
          image={image}
          imageAlt={`${name} website homepage`}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          sizes="(min-width: 1129px) 350px, (min-width: 743px) 465px, calc(100vw - 76px)"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__head">
          <h3 className="project-card__name">{name}</h3>
          <span className="project-card__tag">{industry}</span>
        </div>
        <p className="project-card__desc">{description}</p>
      </div>
    </Link>
  );
}

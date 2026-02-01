interface Props {
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  caseStudyHref?: string;
  caseStudyLabel?: string;
}

const ExperienceItem: React.FC<Props> = ({
  role,
  company,
  duration,
  description,
  highlights,
  caseStudyHref,
  caseStudyLabel = 'View case study →',
}) => {
  return (
    <div className="experience-item">
      <h3>{role}</h3>
      <p className="company">
        {company} · <span>{duration}</span>
      </p>

      <p className="description">{description}</p>

      {caseStudyHref && (
        <a className="case-link-inline" href={caseStudyHref}>
          {caseStudyLabel}
        </a>
      )}

      <ul>
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;

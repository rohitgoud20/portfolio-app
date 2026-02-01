interface Props {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  caseStudy?: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  stack,
  highlights,
  github,
  caseStudy,
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>

      <ul className="project-highlights">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="project-stack">
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}
        {caseStudy && <a href={caseStudy}>Case Study →</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

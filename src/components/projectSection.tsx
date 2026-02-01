import ProjectCard from './projectcard';
import './projects.css';

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <ProjectCard
        title="Walleto — Personal Finance & Budgeting Platform"
        description="A backend-driven personal finance system focused on correctness, transactional integrity, and reliable API design."
        highlights={[
          "Designed and implemented secure REST APIs for financial workflows",
          "Modeled relational schemas to ensure data consistency and auditability",
          "Automated build and deployment using Jenkins CI/CD pipelines",
          "Optimized SQL queries and backend logic for performance",
        ]}
        stack={[
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'REST APIs',
          'Jenkins',
        ]}
        github="https://github.com/rohitgoud20/Walleto"
      />

      <ProjectCard
        title="E-Commerce Backend System"
        description="A transactional backend system supporting product management, cart handling, and order workflows."
        highlights={[
          "Built backend services for cart and order processing",
          "Designed SQL schemas and optimized queries (~25% improvement)",
          "Implemented server-side validation for data integrity",
          "Debugged and resolved backend performance issues",
        ]}
        stack={[
          'Java',
          'Node.js',
          'MySQL',
          'REST APIs',
        ]}
        github="https://github.com/rohitgoud20/Ecom"
      />
    </section>
  );
};

export default ProjectsSection;

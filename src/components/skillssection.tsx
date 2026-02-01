import './skills.css';

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skills-group">
          <h3>Backend Engineering</h3>
          <p>
            Java, Spring Boot, Node.js, REST APIs, API Design, Backend Services,
            Transactional Systems, Data Integrity
          </p>
        </div>

        <div className="skills-group">
          <h3>Databases</h3>
          <p>
            PostgreSQL, MySQL, Relational Schema Design, Query Optimization,
            Indexing, Transactions
          </p>
        </div>

        <div className="skills-group">
          <h3>Frontend & Full-Stack</h3>
          <p>
            React, Ionic React, HTML, CSS, TypeScript, Frontend–Backend
            Integration
          </p>
        </div>

        <div className="skills-group">
          <h3>DevOps & Cloud</h3>
          <p>
            Jenkins, GitHub Actions, CI/CD Pipelines, Docker (basics), AWS,
            Azure, Cloud Deployments
          </p>
        </div>

        <div className="skills-group">
          <h3>Testing & Reliability</h3>
          <p>
            JUnit, Jest, Integration Testing, Debugging, Root Cause Analysis,
            Production Support
          </p>
        </div>

        <div className="skills-group">
          <h3>Tools & Practices</h3>
          <p>
            Git, Linux, Postman, Jira, Agile/Scrum, Code Reviews, Documentation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

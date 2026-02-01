import ExperienceItem from './ExperienceItem';
import './Experience.css';

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>

      <ExperienceItem
        role="Software Engineer"
        company="VoiceGate Technologies"
        duration="Dec 2021 – Dec 2023"
        description="Owned and operated production backend services and REST APIs supporting web and mobile clients, with responsibility across development, deployment, and production debugging."
        highlights={[
          "Built and maintained backend services handling transactional data",
          "Optimized SQL queries to improve performance and reliability",
          "Automated builds and deployments using Jenkins CI/CD pipelines",
          "Debugged and resolved production issues impacting system stability",
        ]}
        caseStudyHref='/case-study/voicegate'
      />

      <ExperienceItem
        role="Graduate Assistant / Research Assistant"
        company="Pace University"
        duration="Aug 2024 – May 2025"
        description="Designed and tested backend systems with emphasis on correctness, reliability, and documentation."
        highlights={[
          "Performed root cause analysis on system failures",
          "Built prototypes using structured development workflows",
          "Collaborated cross-functionally to translate requirements into backend solutions",
        ]}
      />
    </section>
  );
};

export default ExperienceSection;

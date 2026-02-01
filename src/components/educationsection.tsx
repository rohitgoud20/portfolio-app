import './education.css';

const EducationSection: React.FC = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>

      <div className="education-item">
        <h3>Master’s Degree</h3>
        <p className="edu-meta">
          Pace University · New York, NY
        </p>
        <p className="edu-details">
          Graduate Assistant / Research Assistant · Aug 2024 – May 2025
        </p>
        <p className="edu-focus">
          Focus: Backend systems, software engineering practices, research-driven development
        </p>
      </div>
    </section>
  );
};

export default EducationSection;

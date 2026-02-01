import { IonContent, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import './CaseStudyVoiceGate.css';

const CaseStudyVoiceGate: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="case-content">
        <div className="case-wrap">
          <header className="case-header">
            <p className="case-breadcrumb">
              <Link to="/home" className="case-link">Home</Link>
              <span className="case-sep">/</span>
              <span>Case Study</span>
            </p>

            <h1>Building and Operating Production Backend Services at VoiceGate</h1>
            <p className="case-subtitle">
              A deep dive into backend system design, deployment, and production ownership.
            </p>

            <div className="case-meta">
              <span>Role: Software Engineer</span>
              <span className="dot">•</span>
              <span>Focus: APIs, SQL, CI/CD, Debugging</span>
              <span className="dot">•</span>
              <span>Period: Dec 2021 – Dec 2023</span>
            </div>
          </header>

          <section className="case-section">
            <h2>System Overview</h2>
            <p>
              At VoiceGate, I worked on production backend services that supported web and mobile clients.
              These services exposed REST APIs, handled transactional data, and were deployed in cloud environments.
              Because the systems backed a live product, reliability, correctness, and safe deployments were critical.
            </p>
          </section>

          <section className="case-section">
            <h2>My Role & Ownership</h2>
            <p>
              I owned backend features end-to-end, including API design and implementation, database interactions,
              build and deployment automation via CI/CD pipelines, and debugging issues in production. I collaborated
              closely with QA and product stakeholders to ship changes safely and on schedule.
            </p>
          </section>

          <section className="case-section">
            <h2>Architecture</h2>
            <ul>
              <li><strong>Interface:</strong> REST APIs consumed by web and mobile clients</li>
              <li><strong>Backend:</strong> Request validation, business logic, data access layer</li>
              <li><strong>Data:</strong> Relational database for transactional consistency</li>
              <li><strong>Delivery:</strong> Jenkins pipelines for build/test/deploy automation</li>
            </ul>
          </section>

          <section className="case-section">
            <h2>Key Technical Decisions</h2>
            <ul>
              <li>
                <strong>REST APIs</strong> to keep client-server boundaries clean and enable parallel development.
              </li>
              <li>
                <strong>Relational database</strong> for consistency and transactional integrity in core workflows.
              </li>
              <li>
                <strong>CI/CD automation (Jenkins)</strong> to reduce manual errors and improve release confidence.
              </li>
            </ul>
          </section>

          <section className="case-section">
            <h2>Problems Solved in Production</h2>
            <p>
              I worked through issues such as performance bottlenecks, inefficient SQL queries, and deployment-related
              failures. I performed root cause analysis to isolate the problem areas, optimized queries, refactored
              backend logic when needed, and validated fixes with testing and controlled deployments.
            </p>
            <ul>
              <li>Investigated API failures and data inconsistencies using logs and request traces</li>
              <li>Optimized SQL queries and indexes to reduce response time and improve reliability</li>
              <li>Hardened deployment workflow through CI/CD improvements and safer release steps</li>
            </ul>
          </section>

          <section className="case-section">
            <h2>Outcomes & Learnings</h2>
            <p>
              This experience strengthened my ability to operate backend systems in production. I learned how design
              and database decisions impact reliability and performance, and how CI/CD automation improves developer
              velocity and system stability. It shaped how I approach backend engineering today: prioritize correctness,
              observability, and safe delivery.
            </p>
          </section>

          <footer className="case-footer">
            <Link to="/home" className="case-back">← Back to Home</Link>
          </footer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CaseStudyVoiceGate;

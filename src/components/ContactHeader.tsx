import './ContactHeader.css';

const ContactHeader: React.FC = () => {
  return (
    <div className="contact-header">
      <a href="mailto:rohitgoud179@gmail.com">Email</a>
      <a
        href="https://www.linkedin.com/in/rohit-g-b99026131/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/rohitgoud20"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};

export default ContactHeader;

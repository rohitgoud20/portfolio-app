import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Rohit Goud Muddagouni</h1>
        <h2>Software Engineer</h2>

        <p>
          I build and operate reliable backend systems and APIs with a focus on
          correctness, scalability, and production readiness.
        </p>
      </div>

      <div className="hero-right">
        <img
          src="https://webpage.pace.edu/rm19258n/cropped%20dp.jpg"
          alt="Rohit Goud"
        />
      </div>
    </section>
  );
};

export default Hero;

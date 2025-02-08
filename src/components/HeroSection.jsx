import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Frontend Developer</h1>
          <p className="mb-5">Hi, I'm [Your Name], a passionate frontend developer.</p>
          <Link to="/resume" className="btn btn-primary">Download Resume</Link>
          <div className="mt-5 flex space-x-4 justify-center">
            <a href="https://github.com/yourusername" className="btn btn-outline">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="btn btn-outline">LinkedIn</a>
            {/* <!-- Add other social links as needed --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const Skills = () => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">JavaScript</div>
        {/* <!-- Add more skills --> */}
      </div>
    </section>
  );
};

export default Skills;

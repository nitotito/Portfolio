import React from 'react';
import './About.css';

const About = ({ className }) => {
    const skills = ['JavaScript','Angular','React', 'Node.js','React Native','NextJS','NestJS','Express','Vanilla JS','C','C#','PHP','JAVA','Python','MySQL','PostgreSQL','MongoDB','Git','GitLab','GitHub','TortoiseGit','Jira','Confluence','Invgate','Scrum','Kanban',];

    return (
    <section className={className} class="about" id="about">
    <div class="about-content">
      <div class="about-text">
        <h2>Sobre Mí</h2>
        <p>Soy un desarrollador full stack con más de 2 años de experiencia, especializado en el desarrollo backend.
            Además, estoy terminando la carrera de Analista de sistemas por lo que también cuento con conceptos claros y bien definidos sobre la gestión de proyectos.
        </p>
        <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
      </div>
      <div class="about-image">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--accent)" d="M45.7,-58.9C59.9,-51.4,72.5,-39.1,77.8,-24.1C83.1,-9,81.1,8.8,73.9,23.5C66.7,38.2,54.3,49.8,40.4,57.4C26.4,65.1,10.9,68.8,-4.4,74.1C-19.7,79.3,-39.4,86.1,-54.4,79.7C-69.5,73.4,-79.9,53.8,-84.4,33.5C-88.9,13.2,-87.5,-7.8,-80.7,-26C-74,-44.2,-61.8,-59.6,-46.5,-66.7C-31.2,-73.8,-12.8,-72.6,2.1,-75.3C17,-78,31.5,-66.5,45.7,-58.9Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  </section>
)};

export default About;
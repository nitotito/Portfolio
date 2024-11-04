import React from 'react';
import './Experience.css';
import experiences from '../../assets/archivos/experience.json';

function Experience() {
    return (
        <div className="experience-container" id='experience'>
            <h2 className="experience-title">Experiencia Laboral</h2>
            
            {experiences.map((experience, index) => (
                <div key={index} className="job-card">
                    <h3 className="job-title">{experience.title}</h3>
                    <div className="company">{experience.company}</div>
                    <div className="date">{experience.date}</div>
                    <p className="description">{experience.description}</p>
                    <div className="skills-tags">
                        {experience.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
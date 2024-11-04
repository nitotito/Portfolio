import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Función para cargar los proyectos desde el archivo JSON
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json'); // Asegúrate de que la ruta sea correcta
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Parsear la respuesta como JSON
                setProjects(data); // Actualizar el estado con los proyectos
            } catch (error) {
                console.error('Error fetching projects:', error); // Manejo de errores
            }
        };

        fetchProjects();
    }, []); // Se ejecuta una vez al montar el componente

    return (
        <section className='projects' id="projects">
            <h2>Proyectos</h2>
            <ul className='project-grid'>
                {projects.map((project, index) => (
                    <li 
                        className='project-card' 
                        key={index} 
                        onClick={() => window.location.href = project.link}
                        style={{ cursor: 'pointer' }} // Cambia el cursor al de "mano"
                    >
                         <img 
                            src={process.env.PUBLIC_URL + `/assets/${project.image}`} 
                            alt={`${project.name} preview`} 
                            className="project-image" 
                        />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="skills">
                            {project.tecnologias.map((tecnologia, techIndex) => (
                                <span className="skill-tag" key={techIndex}>
                                    {tecnologia}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
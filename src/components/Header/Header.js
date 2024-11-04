import React, { useEffect, useRef } from 'react';
import './Header.css'
import * as THREE from 'three';

const Header = () => {
    const bgRef = useRef(null); 

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        bgRef.current.appendChild(renderer.domElement); // Adjunta el renderer al contenedor

        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x0984e3,
            wireframe: true
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        camera.position.z = 30;

        function animate() {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Smooth scroll for navigation
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            const handleClick = (e) => {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            };
            anchor.addEventListener('click', handleClick);

            // Limpiar el evento al desmontar el componente
            return () => {
                anchor.removeEventListener('click', handleClick);
            };
        });

        // Limpiar la escena cuando el componente se desmonte
        return () => {
            renderer.dispose(); // Limpia el renderer
            bgRef.current.removeChild(renderer.domElement); // Elimina el elemento DOM
        };
    }, []); // El arreglo vacío asegura que solo se ejecute al montar el componente

    return (
        <header className='header'>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="header-content" id="home">
                <h1>Lopez Nicolas</h1>
                <p>Creative Developer & Designer</p>
            </div>
            <div className="animated-bg" ref={bgRef}></div> {/* Usamos la referencia aquí */}
        </header>
    );
};

export default Header;
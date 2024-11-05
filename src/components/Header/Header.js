import React, { useEffect, useRef,useState  } from 'react';
import './Header.css'
import * as THREE from 'three';
import '../../assets/styles/styles.css';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
    const bgRef = useRef(null); 
    const [showContent, setShowContent] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 100); // Ajusta el tiempo de retraso aquí
            return () => clearTimeout(timer);
        }, []);

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
            console.log("lalalala", anchor);
            const handleClick = (e) => {
                e.preventDefault();
               /*  document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                }); */
                const targetId = e.currentTarget.getAttribute('href');
                const targetElement = document.querySelector(targetId); // Seleccionamos el elemento

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.warn(`Elemento con ID ${targetId} no encontrado`); // Agregamos un mensaje de advertencia
                }
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <header className='header' id="home">
            <nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                    {/* Icono de menú hamburguesa */}
                    &#9776;
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencias</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <CSSTransition in={showContent} classNames="fade" timeout={500}>
                    <h1>Lopez Nicolas</h1>
                </CSSTransition>
                <CSSTransition in={showContent} classNames="fade" timeout={500}>
                    <p>Desarrollador - Analista de sistemas</p>
                </CSSTransition>
            </div>
            
            <div className="animated-bg"style={{ opacity: showContent ? 1 : 0 }} ref={bgRef}></div> {/* Usamos la referencia aquí */}
        </header>
    );
};

export default Header;
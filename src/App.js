import React, { useEffect, useState }  from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import './assets/styles/styles.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Crear el cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Actualiza la posición del cursor
    const updateCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    };

    // Agregar el evento mousemove
    window.addEventListener('mousemove', updateCursor);

    // Limpiar el evento y eliminar el cursor al desmontar
    return () => {
        window.removeEventListener('mousemove', updateCursor);
        document.body.removeChild(cursor); // Asegúrate de que el cursor se elimine correctamente
    };
}, []);

    useEffect(() => {
      const timer = setTimeout(() => {
          setIsVisible(true);
      }, 200); // Ajusta el tiempo de retraso aquí
      return () => clearTimeout(timer);
  }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <TransitionGroup>
                    {isVisible && (
                        <>
                            <CSSTransition classNames="fade" timeout={500}>
                                <About />
                            </CSSTransition>
                            <CSSTransition classNames="fade" timeout={500}>
                                <Projects />
                            </CSSTransition>
                            <CSSTransition classNames="fade" timeout={500}>
                                <Experience />
                            </CSSTransition>
                            <CSSTransition classNames="fade" timeout={500}>
                                <Contact />
                            </CSSTransition>
                        </>
                    )}
                </TransitionGroup>
            </main>
            <Footer />
        </div>
    );
}

export default App;
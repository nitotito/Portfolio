import React, { useEffect, useState }  from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/styles.css';

function App() {

  const [isVisible, setIsVisible] = useState(false);

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
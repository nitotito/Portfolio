import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
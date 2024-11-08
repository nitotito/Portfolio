import React, { useRef,useState }  from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [clicked, setClicked] = useState(false);
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);

    const handleClick = (type) => {

        switch(type){
            case 0:
                setClicked(true);
                setTimeout(() => {
                    /* window.location.href = "/miCV.pdf";  */
                    setClicked(false);
                }, 300);
                break;
            case 1:
                setClicked1(true);
                setTimeout(() => {
                    /* window.location.href = "/miCV.pdf";  */
                    setClicked1(false);
                }, 300);
                break;
            case 2:
                setClicked2(true);
                setTimeout(() => {
                    /* window.location.href = "/miCV.pdf";  */
                    setClicked2(false);
                }, 300);
                break;
        }
        /* setClicked(true);
        setTimeout(() => {
            setClicked(false); 
        }, 300); */
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dpeuk1d', 'template_o9dx485', form.current, 'kQERmLQIO308tvi9w')
            .then((result) => {
                console.log(result.text);
                alert('Correo enviado exitosamente');
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el correo');
            });
    };

    return (
        <section className="contact" id="contact">
            <h2>Contacto</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <input type="email" name="user_email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="text" name="subject" placeholder="Asunto" required />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Mensaje" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
            <div className="social-links">
            <a href="https://github.com/nitotito" title="GitHub" onClick={() =>handleClick(0)}><svg className={`download-icon ${clicked ? 'clicked' : ''}`} width="24" height="24" viewBox="1 0 23 24" fill="none"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill={clicked ? '#00cec9' : '#2d3436'}/></svg></a>
            <a href="https://www.linkedin.com/in/nicolas-lopez-alb/" title="LinkedIn" onClick={() => handleClick(1)}><svg className={`download-icon ${clicked1 ? 'clicked' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill={clicked1 ? '#00cec9' : '#2d3436'}/></svg></a>

            <a href="/LopezNicolas-CV.pdf" title="Descargar Portafolio" download onClick={() =>handleClick(2)}>
            <svg
                        className={`download-icon ${clicked2 ? 'clicked' : ''}`}
                        width="30"
                        height="28"
                        viewBox="3 0 24 15"
                        fill="none"
                    >
                        <path d="M19 9h-4V2H9v7H5l7 7 7-7zm0 7H5v2h14v-2z" fill={clicked2 ? '#00cec9' : '#2d3436'} />
                    </svg>
            </a>
            </div>
        </section>
    );
};


export default Contact;
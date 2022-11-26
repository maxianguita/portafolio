import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Edward</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre Mí</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Proyectos</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Recomendación</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/edward-camilo-cifuentes-moreno-a38a36229/" className="footer__social-link" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
                <a href="https://github.com/CIFU1199" className="footer__social-link" target="_blank"><i class='bx bxl-github' ></i></a>
                {/* <a href="" className="home__social-icon" target="_blank"></a> */}
            </div>
            <span className='footer__copy'>&#169; Edward Cifuentes. Reservados todos los derechos</span>

        </div>
    </footer>
  )
}

export default Footer
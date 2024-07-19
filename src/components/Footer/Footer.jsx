import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Maxi Anguita</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre Mí</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Proyectos</a>
                </li>

            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/maxi-anguita-944774256/" className="footer__social-link" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
                <a href="https://github.com/maxianguita" className="footer__social-link" target="_blank"><i class='bx bxl-github' ></i></a>
                {/* <a href="" className="home__social-icon" target="_blank"></a> */}
            </div>
            <span className='footer__copy'>&#169; Maxi Anguita. Todos los derechos reservados</span>

        </div>
    </footer>
  )
}

export default Footer
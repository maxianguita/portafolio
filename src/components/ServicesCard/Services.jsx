import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Lo que Ofrezco</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services__title">Desarrollador <br/> Web</h3>

                    <span className="services__button" onClick={() => toggleTab(1)}>Ver Más 
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Desarrollo Web</h3>
                            <p className="services__modal-description">Servicio haciendo un trabajo de calidad a clientes y empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de interfaz de usuario.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de páginas web.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización del rendimiento del sitio web.</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <i className="uil uil-server-network services_icon"></i>
                    <h3 className="services__title">Desarrollador <br/> Full Stack</h3>

                    <span className="services__button" onClick={() => toggleTab(2)}>Ver Más 
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Desarrollo Full Stack</h3>
                            <p className="services__modal-description">Servicio haciendo un trabajo de calidad a clientes y empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de aplicaciones completas.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Gestión de bases de datos.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementación de API RESTful.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

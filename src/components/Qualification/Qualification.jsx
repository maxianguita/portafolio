import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi Viaje Personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          
          <div className={toggleState === 1 ? "qualification__button qualification__active  button--flex" :"qualification__button  button--flex"}
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon qualification__active"></i>
            Educación
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active  button--flex" :"qualification__button  button--flex"}
          onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingeniero de Sistemas</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Git+Github</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master en CSS</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">JavaScript Moderno</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 
                </div>
              </div>
              
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Monitor de Programación</h3>
                <span className="qualification__subtitle">UNISANGIL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Docente de Tecnología e informática</h3>
                <span className="qualification__subtitle">Colegio Liceo Superior Rafael Pombo</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 
                </div>
              </div>
              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollador Web</h3>
                <span className="qualification__subtitle">Primera Experiencia IT</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification
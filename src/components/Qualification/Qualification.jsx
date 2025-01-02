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
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon qualification__active"></i>
            Educación
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active  button--flex" :"qualification__button  button--flex"}
          onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FULL STACK DEVELOPER</h3>
                <span className="qualification__subtitle">SOY HENRY</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
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
                <h3 className="qualification__title">Juan cruz vanitorys</h3>
                <span className="qualification__subtitle">App</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollo web</h3>
                <span className="qualification__subtitle">Coder House</span>
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
                <h3 className="qualification__title">NEON GN</h3>
                <span className="qualification__subtitle">App henry project</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Landing EcoClima</h3>
                <span className="qualification__subtitle">Landing Page</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
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
                <h3 className="qualification__title">NBA Score</h3>
                <span className="qualification__subtitle">App</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
              
              </div>
              <div>
               
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">KICK STORE</h3>
                <span className="qualification__subtitle">App tienda de ropa</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 
                </div>
              </div>
              
            </div>

            <div className="qualification__data">
              <div>
              
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
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

export default Qualification;

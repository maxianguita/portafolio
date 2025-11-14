import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => setToggleState(index);

  const education = [
    { title: "FULL STACK DEVELOPER", subtitle: "SOY HENRY", year: "2022 - 2023" },
    { title: "Desarrollo web", subtitle: "Coder House", year: "2022" },
  ];

  const experience = [
    { title: "L&MConstrucciones", subtitle: "L&MConstrucciones", year: "2025" },
    { title: "Primalstrength", subtitle: "Primalstrength ", year: "2025" },
    { title: "Barber App", subtitle: "Barber App", year: "2025" },
    { title: "Ingresos Gym", subtitle: "App para gestión de ingresos", year: "2025" },
    { title: "KICK STORE", subtitle: "App tienda de ropa", year: "2024" },
    { title: "NBA Score", subtitle: "App juegos en tiempo real", year: "2024" },
    { title: "Juan Cruz Vanitorys", subtitle: "App de ventas de vanitorios", year: "2024" },
    { title: "Eco clima", subtitle: "App de tienda de electrodomesticos", year: "2024" },
  ];

  const renderItems = (items) =>
    items.map((item, i) => (
      <div key={i} className="qualification__item">
        <div className="qualification__header">
          <h3>{item.title}</h3>
          <span>{item.year}</span>
        </div>
        <p className="qualification__subtitle">{item.subtitle}</p>
      </div>
    ));

  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi Viaje Personal</span>

      <div className="qualification__tabs">
        <button
          className={toggleState === 1 ? "active" : ""}
          onClick={() => toggleTab(1)}
        >
          Educación
        </button>
        <button
          className={toggleState === 2 ? "active" : ""}
          onClick={() => toggleTab(2)}
        >
          Experiencia
        </button>
      </div>

      <div className="qualification__list">
        {toggleState === 1 && renderItems(education)}
        {toggleState === 2 && renderItems(experience)}
      </div>
    </section>
  );
};

export default Qualification;

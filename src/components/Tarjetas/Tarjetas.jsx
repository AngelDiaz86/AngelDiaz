import React, { useState } from 'react';
import "./Tarjetas.css";

export default function Tarjetas({ Data }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='Tarjeta'>
      <img
        src={Data.image}
        alt=''
        onClick={openModal} // Abrir la ventana modal al hacer clic en la imagen
      />

      {/* Ventana modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="centered-content">
              <h2 className='textmodal'>{Data.name}</h2>
              <img src={Data.image} alt='' />
              <h3> {Data.status} - {Data.species}</h3>
              
              <h3>Última ubicación conocida:</h3>
              <h3>{Data.location.name}</h3>
              {/* Agrega cualquier otro contenido que desees mostrar en la ventana modal */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


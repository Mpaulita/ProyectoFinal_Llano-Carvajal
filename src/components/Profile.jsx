import React, { useState } from 'react';
import '../Styles/Profile.css';
import ButtonGeneral from './ButtonGeneral'; // Asegúrate de tener el componente ButtonGeneral importado

function Profile() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      {/* Cabecera de la página */}
      <div className="header-container">
        <h1 className="header-title">SKILLSWAP</h1>
        <p className="header-description">
          Crea tus propias solicitudes y encuentra con quien intercambiar tus
          habilidades
        </p>
      </div>

      {/* Contenedor horizontal para los botones */}
      <div className="horizontal-container">
        <ButtonGeneral
          texto="Swap"
          pagina="request"
          atributo="swap"
          path="home"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Publicar Propuesta"
          pagina="home"
          atributo="help"
          path="publicar"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Mensajes"
          pagina="home"
          atributo="request"
          path="mensajes"
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
        />
        <ButtonGeneral
          texto="Salir"
          pagina="home"
          atributo="logout"
          path=""
          url={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          }
        />
      </div>

      {/* Formulario y área de carga de imagen */}
      <div className="profile-container">
        <div className="form-container">
          <form>
            <input type="text" placeholder="Nombre" className="input full-width" />
            <div className="input-row">
              <input type="text" placeholder="Edad" className="input half-width" />
              <input type="text" placeholder="Sexo" className="input half-width" />
            </div>
            <input type="text" placeholder="Ciudad" className="input full-width" />
            <input type="text" placeholder="Dirección" className="input full-width" />
            <input type="text" placeholder="Teléfono" className="input full-width" />
            <input type="email" placeholder="Correo electrónico" className="input full-width" />
          </form>
        </div>
        
        <div className="upload-container1">
          <div className="upload-image1">
            <label htmlFor="image-upload" className="upload-label">
              <div className="upload-button1">Upload Image</div>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <div className='saveDiv'>
            <button className="save-button">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;


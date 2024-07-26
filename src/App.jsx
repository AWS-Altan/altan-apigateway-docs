import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';

function App() {
  // Obtener la URL del parámetro de consulta
  const urlParams = new URLSearchParams(window.location.search);
  const swaggerUrl = urlParams.get('url');

  return (
    <div className="App">
      <Navbar />
      {swaggerUrl ? (
        <SwaggerUI className='container' url={swaggerUrl} />
      ) : (
        <div className='container'>
          <h2>Error</h2>
          <p>No se proporcionó la URL del archivo Swagger. Utiliza el parámetro de consulta "url" para especificar la URL.</p>
        </div>
      )}
    </div>
  );
}

export default App;


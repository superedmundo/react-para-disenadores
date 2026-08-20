import { useState } from "react";

function App() {
  const [abierto, setAbierto] = useState(false);

  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Completa una interacción que recuerde</h1>
        <p>El estado ya existe. Conecta la acción y el resultado visual.</p>
      </header>

      <article className="panel">
        <p className="etiqueta">Información de visita</p>
        <h2>{abierto ? "Información visible" : "Información oculta"}</h2>

        <button
          onClick={() => {
            // Pista: cambia `abierto` al valor contrario usando setAbierto.
          }}
        >
          {abierto ? "Ocultar información" : "Ver información"}
        </button>

        {/* Pista: muestra este bloque únicamente cuando `abierto` sea verdadero. */}
        <div className="detalle">
          <p>Martes a domingo · 10:00–18:00</p>
          <p>Centro Cultural Forma</p>
        </div>
      </article>
    </main>
  );
}

export default App;

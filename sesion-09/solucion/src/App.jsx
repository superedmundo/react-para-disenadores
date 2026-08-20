import { useState } from "react";

function App() {
  const [abierto, setAbierto] = useState(false);

  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Información que recuerda si está abierta</h1>
        <p>El botón cambia una memoria sencilla: abierto o cerrado.</p>
      </header>

      <article className="panel">
        <p className="etiqueta">Información de visita</p>
        <h2>{abierto ? "Información visible" : "Información oculta"}</h2>

        <button onClick={() => setAbierto(!abierto)}>
          {abierto ? "Ocultar información" : "Ver información"}
        </button>

        {abierto && (
          <div className="detalle">
            <p>Martes a domingo · 10:00–18:00</p>
            <p>Centro Cultural Forma</p>
          </div>
        )}
      </article>
    </main>
  );
}

export default App;

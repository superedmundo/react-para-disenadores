function Panel({ abierto }) {
  return (
    <article className="panel">
      <p className="etiqueta">Información de visita</p>
      <h2>{abierto ? "Estado abierto" : "Estado cerrado"}</h2>
      <button>{abierto ? "Ocultar información" : "Ver información"}</button>

      {abierto && (
        <div className="detalle">
          <p>Martes a domingo · 10:00–18:00</p>
          <p>Centro Cultural Forma</p>
        </div>
      )}
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Una interfaz puede tener estados distintos</h1>
        <p>Compara las dos versiones. Todavía no hay interacción.</p>
      </header>

      <section className="comparacion">
        <Panel abierto={false} />
        <Panel abierto={true} />
      </section>
    </main>
  );
}

export default App;

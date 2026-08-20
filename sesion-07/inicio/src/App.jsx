function Tarjeta() {
  return (
    <article className="tarjeta">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <p className="categoria">Exposición</p>
      <h2>Archivo Vivo</h2>
      <p>Diseño y memoria gráfica en una misma pieza.</p>
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>La misma pieza, el mismo contenido</h1>
        <p>Observa qué problema aparece cuando reutilizamos una tarjeta con texto fijo.</p>
      </header>

      <section className="galeria">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </section>
    </main>
  );
}

export default App;

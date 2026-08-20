function Tarjeta() {
  return (
    <article className="tarjeta">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <p className="categoria">Exposición</p>
      <h2>Archivo Vivo</h2>
      <p>Diseño y memoria gráfica.</p>
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Una pieza reutilizable</h1>
        <p>La misma tarjeta se utiliza tres veces.</p>
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

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Convierte la repetición en componente</h1>
        <p>Las tres tarjetas de abajo tienen la misma estructura.</p>
      </header>

      <section className="galeria">
        <article className="tarjeta">
          <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
          <p className="categoria">Exposición</p>
          <h2>Archivo Vivo</h2>
          <p>Diseño y memoria gráfica.</p>
        </article>
        <article className="tarjeta">
          <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
          <p className="categoria">Exposición</p>
          <h2>Archivo Vivo</h2>
          <p>Diseño y memoria gráfica.</p>
        </article>
        <article className="tarjeta">
          <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
          <p className="categoria">Exposición</p>
          <h2>Archivo Vivo</h2>
          <p>Diseño y memoria gráfica.</p>
        </article>
      </section>
    </main>
  );
}

export default App;

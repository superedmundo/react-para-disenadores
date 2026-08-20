function Tarjeta({ titulo, categoria }) {
  return (
    <article className="tarjeta">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <p className="categoria">{categoria}</p>
      <h2>{titulo}</h2>
      <p>Una misma estructura con información diferente.</p>
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Tres proyectos escritos uno por uno</h1>
        <p>Las props cambian el contenido, pero todavía repetimos cada instancia manualmente.</p>
      </header>

      <section className="galeria">
        <Tarjeta titulo="Materia" categoria="Exposición" />
        <Tarjeta titulo="Territorio" categoria="Fotografía" />
        <Tarjeta titulo="Archivo" categoria="Taller" />
      </section>
    </main>
  );
}

export default App;
